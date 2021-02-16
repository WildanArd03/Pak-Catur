export type MarkdownData = {
  content: string
  metadata: {
    [key: string]: any
  }
  id: string
}

export type IndexingData = {
  title: string
  name: string
}

export type Soal = {
  pertanyaan: string
  daftarJawaban: Jawaban[]
}

export type Jawaban = {
  jawaban: string
  trueKah: boolean
}
