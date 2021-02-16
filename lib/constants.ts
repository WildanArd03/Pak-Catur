import fs from 'fs'
import path from 'path'
import { cleanFileName, getMarkdownData } from './functions'
import { IndexingData } from './types'

export const materialsExample = [
  'Bilangan Pangkat, Akar, dan Logaritma',
  'Persamaan dan Pertidaksamaan',
  'Matriks',
  'Fungsi',
  'Barisan dan Deret',
  'Program Linier',
  'Trigonometri',
  'Geometri',
  'Transformarsi',
  'Lingkaran',
  'Peluang',
  'Statistika',
  'Limit',
  'Turunan',
  'Integral',
]

export const materialsDir = path.join(process.cwd(), 'materi')
export const practicesDir = path.join(process.cwd(), 'soal')

export const materialsList: IndexingData[] = fs
  .readdirSync(materialsDir)
  .map(fileName => {
    const cleanedFileName = cleanFileName(fileName)
    const {
      metadata: { title },
    } = getMarkdownData(materialsDir, cleanedFileName)
    return {
      name: cleanedFileName,
      title,
    }
  })
export const practicesList: IndexingData[] = fs
  .readdirSync(practicesDir)
  .map(fileName => {
    const cleanedFileName = cleanFileName(fileName)
    const {
      metadata: { title },
    } = getMarkdownData(practicesDir, cleanedFileName)
    return {
      name: cleanedFileName,
      title,
    }
  })

export const mmm = [
  {
    judul: 'Bilangan Pangkat, Akar, dan Logaritma',
    submateri: [
      'Operasi Bilangan Berpangkat',
      'Merasionalkan Bentuk Akar',
      'Operasi Logaritma',
    ],
  },
]
