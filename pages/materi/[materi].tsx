import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { materialsDir, materialsList } from '~root/lib/constants'
import { cleanFileName, getMarkdownData } from '~root/lib/functions'
import { MarkdownData } from '~root/lib/types'
import htmr from 'htmr'

type MateriParams = {
  materi: string
}

type MateriProps = {
  judul: string
  data: MarkdownData
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
    paths: materialsList.map(material => ({
      params: {
        materi: cleanFileName(material),
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
