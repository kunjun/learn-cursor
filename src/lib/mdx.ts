import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'
import type { Pluggable } from 'unified'

export async function serializeMDX(content: string) {
  return serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm as unknown as Pluggable],
      rehypePlugins: [rehypePrism as unknown as Pluggable],
    },
    parseFrontmatter: true,
  })
}
