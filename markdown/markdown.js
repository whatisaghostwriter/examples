/* eslint-disable prettier/prettier */
import { join } from 'path'
import matter from 'gray-matter'
import fs from 'fs'

const dataDirectory = join(process.cwd(), 'content')
const parseMdFile = (filePath) => {
  const fullPath = join(dataDirectory, filePath)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const parsed = matter(fileContents)
  return {
    fileName: `${filePath.replace('.md', '')}`,
    fileRelativePath: `${filePath}`,
    frontmatter: parsed.data,
    markdownBody: parsed.content
  }
}
export { dataDirectory, parseMdFile }