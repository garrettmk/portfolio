import { PaginatedResult, PaginationInput, paginate } from '@/util';
import { compareDesc } from 'date-fns';
import fs from 'fs';
import { bundleMDX } from 'mdx-bundler';
import path from 'path';

/**
 * Metadata for Project articles
 */
export type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  excerpt: string;
  tech: string[];
  urls: {
    demo?: string;
    source?: string;
    docs?: string;
  },
}

/**
 * Combined content and metadata for Project articles
 */
export type ProjectContent = {
  meta: ProjectMeta
  raw: string;
  code: string;
}

/**
 * Get metadata for all Project articles
 */
export async function getAllMetas(pagination?: PaginationInput): Promise<PaginatedResult<ProjectMeta>> {
  const content = await getAllContent(pagination);
  const metas = content.data.map(({ meta }) => meta);

  return { ...content, data: metas };
}

/**
 * Get all Project articles
 */
export async function getAllContent(pagination?: PaginationInput): Promise<PaginatedResult<ProjectContent>> {
  const slugs = getAllContentSlugs();
  
  const projects: ProjectContent[] = await Promise.all(slugs.map(slug => {
    return getContent(slug);
  }));

  const sortedProjects = projects.sort((a, b) => {
    return compareDesc(new Date(a.meta.updated), new Date(b.meta.updated))
  });

  const paginatedProjects = paginate(sortedProjects, pagination);

  return paginatedProjects;
}

/**
 * Scans the content directory and returns slugs for all
 * Project articles
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
 * Loads and parses the content for a Project article
 */
export async function getContent(slug: string): Promise<ProjectContent> {
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
    } as ProjectMeta,
    code,
  }
}

/**
 * Joins the given segments to the content path
 */
export function joinContentPath(...segments: string[]): string {
  return path.join('src', 'app', 'projects', 'content', ...segments);
}