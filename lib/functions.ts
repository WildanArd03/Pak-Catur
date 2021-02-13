import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { Remarkable } from 'remarkable'
import { materialsDir } from './constants'
import { MaterialData } from './types'

export const cleanFileName = (fileName: string) => fileName.replace(/\.md$/, '')

export function getMarkdownData(
  folderPath: string,
  fileName: string
): MaterialData {
  const md = new Remarkable()

  const fileContent = fs.readFileSync(path.join(materialsDir, `${fileName}.md`))

  const matterData = matter(fileContent)
  const parsed = md.render(matterData.content)

  return {
    content: parsed,
    metadata: matterData.data,
    id: cleanFileName(fileName),
  }
}

export function sanitizeURL(url: string) {
  return url.replaceAll(' ', '-').replaceAll(',', '').toLocaleLowerCase()
}
