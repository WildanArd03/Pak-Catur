import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { materialsDir, practicesList } from '~root/lib/constants'
import { cleanFileName, getMarkdownData } from '~root/lib/functions'
import { MaterialData } from '~root/lib/types'
import htmr from 'htmr'

type MateriParams = {
  soal: string
}

type MateriProps = {
  judul: string
  data: MaterialData
}

const MateriIndex: NextPage<MateriProps> = ({
  judul,
  data: {
    content,
    metadata: { title },
  },
}) => {
  return (
    <div>
      <p>Hai aku {title}</p>
      {htmr(content)}
    </div>
  )
}

export default MateriIndex

export const getStaticPaths: GetStaticPaths<MateriParams> = async () => {
  return {
    paths: practicesList.map(practice => ({
      params: {
        soal: cleanFileName(practice),
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  MateriProps,
  MateriParams
> = async ({ params: { materi } }) => {
  const data = getMarkdownData(materialsDir, materi)

  return {
    props: {
      judul: materi,
      data: data,
    },
  }
}
