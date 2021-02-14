import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { materialsDir, materialsList } from '~root/lib/constants'
import { cleanFileName, getMarkdownData } from '~root/lib/functions'
import { MarkdownData } from '~root/lib/types'
import htmr from 'htmr'
import { htmrOptions } from '~root/lib/htmr'
import { Container } from '@chakra-ui/react'

type MateriParams = {
  materi: string
}

type MateriProps = {
  judul: string
  data: MarkdownData
}

const MateriSingle: NextPage<MateriProps> = ({
  judul,
  data: {
    content,
    metadata: { title },
  },
}) => {
  return (
    <Container maxWidth={['90%', '80%', '60%']} paddingY={8}>
      {htmr(content, htmrOptions)}
    </Container>
  )
}

export default MateriSingle

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
