import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/posts/_content/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}));

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**/projects/_content/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the project',
      required: true,
    },
    tech: {
      description: 'The tech used in the project',
      required: true,
      type: 'list',
      of: {
        type: 'string',
      },
    },
    githubUrl: {
      type: 'string',
      description: 'The url of the project github repository',
    },
    documentationUrl: {
      type: 'string',
      description: 'The url of the project documentation',
    },
    demoUrl: {
      type: 'string',
      description: 'The url of the project demo',
    },
  },
}))

export default makeSource({
  contentDirPath: 'src',
  documentTypes: [Post, Project],
})
