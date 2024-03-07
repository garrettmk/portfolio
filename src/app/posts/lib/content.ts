import { PaginationInput, PaginatedResult, paginate } from "@/util";
import path from "path";
import fs from 'fs';
import { bundleMDX } from 'mdx-bundler';
import { compareDesc } from "date-fns";

/**
 * Metadata for a post
 */
export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  published: Date;
  updated?: Date;
  excerpt: string;
  tags: string[];
};

/**
 * Combined content and metadata for a post
 */
export type PostContent = {
  meta: PostMeta
  raw: string;
  code: string;
};

/**
 * Get metadata for all posts
 */
export async function getAllMetas(pagination?: PaginationInput): Promise<PaginatedResult<PostMeta>> {
  const { data: contents, ...resultPagination } = await getAllContent(pagination);
  const metas = contents.map(({ meta }) => meta);

  return { ...resultPagination, data: metas };
}

/**
 * Get all posts
 */
export async function getAllContent(pagination?: PaginationInput): Promise<PaginatedResult<PostContent>> {
  const slugs = getAllContentSlugs();
  
  const posts: PostContent[] = await Promise.all(slugs.map(slug => {
    return getContent(slug);
  }));

  const sortedPosts = posts.sort((a, b) => {
    return compareDesc(a.meta.updated ?? a.meta.published, b.meta.updated ?? b.meta.published)
  });

  const paginatedPosts = paginate(sortedPosts, pagination);

  return paginatedPosts;
}

/**
 * Scans the content directory and returns slugs for all
 * Post articles
 */
export function getAllContentSlugs(): string[] {
  const contentPath = joinContentPath();
  const filenames = fs.readdirSync(contentPath);
  
  const slugs = filenames.map(filename => 
    filename.split('.').slice(0, -1).join('-')
  )

  return slugs;
}

/**
 * Loads and parses the content for a Post article
 */
export async function getContent(slug: string): Promise<PostContent> {
  const filePath = joinContentPath(`${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  
  const { code, frontmatter, matter: { excerpt = '' } } = await bundleMDX({
    source: raw,
    mdxOptions(options, frontmatter) {
      return options;
    },
    grayMatterOptions(options) {
      options.excerpt = true;
      return options;
    }
  });

  return {
    raw,
    meta: {
      ...frontmatter,
      slug,
      excerpt
    } as PostMeta,
    code,
  }
}

/**
 * Joins the given segments to the content path
 */
export function joinContentPath(...segments: string[]): string {
  return path.join('src', 'app', 'posts', 'content', ...segments);
}