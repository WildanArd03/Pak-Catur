import htmr from 'htmr'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { practicesDir, practicesList } from '~root/lib/constants'
import { cleanFileName, getMarkdownData } from '~root/lib/functions'
import { MaterialData } from '~root/lib/types'

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
> = async ({ params: { soal } }) => {
  const data = getMarkdownData(practicesDir, soal)

  return {
    props: {
      judul: soal,
      data: data,
    },
  }
}
