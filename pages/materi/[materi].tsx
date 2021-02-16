import { Container } from '@chakra-ui/react'
import htmr from 'htmr'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Navigation from '~root/components/Navigation'
import { materialsDir, materialsList } from '~root/lib/constants'
import { getMarkdownData } from '~root/lib/functions'
import { htmrOptions } from '~root/lib/htmr'
import { MarkdownData } from '~root/lib/types'

type MateriParams = {
  materi: string
}

type MateriProps = {
  data: MarkdownData
}

const MateriSingle: NextPage<MateriProps> = ({
  data: {
    content,
    metadata: { title },
  },
}) => {
  return (
    <>
      <NextSeo title={title} />

      <Navigation backButton='/materi' />

      <Container maxWidth={['90%', '80%', '60%']} paddingY={8}>
        {htmr(content, htmrOptions)}
      </Container>
    </>
  )
}

export default MateriSingle

export const getStaticPaths: GetStaticPaths<MateriParams> = async () => {
  return {
    paths: materialsList.map(({ name }) => ({
      params: {
        materi: name,
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
      data: data,
    },
  }
}
