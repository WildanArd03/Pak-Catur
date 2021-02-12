import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { materialsList } from '~root/lib/constants'
import sanitizeURL from '~root/lib/sanitizeURL'

type MateriParams = {
  materi: string
}

type MateriProps = {
  judul: string
}

const MateriIndex: NextPage<MateriProps> = ({ judul }) => {
  return (
    <div>
      <p>Hai aku {judul}</p>
    </div>
  )
}

export default MateriIndex

export const getStaticPaths: GetStaticPaths<MateriParams> = async () => {
  return {
    paths: materialsList.map(material => ({
      params: {
        materi: sanitizeURL(material),
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  MateriProps,
  MateriParams
> = async ({ params: { materi } }) => {
  return {
    props: {
      judul: materi,
    },
  }
}
