import fs from 'fs'
import path from 'path'

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

export const materialsList = fs.readdirSync(materialsDir)
export const practicesList = fs.readdirSync(practicesDir)

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
