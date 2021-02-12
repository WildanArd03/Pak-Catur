import { Container } from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { materialsList } from '~root/lib/constants'
import sanitizeURL from '~root/lib/sanitizeURL'

type HomeProps = {
  materials: string[]
}

const MateriIndex: NextPage<HomeProps> = ({ materials }) => {
  return (
    <Container maxWidth='80%'>
      <ol>
        {materials.map(material => (
          <li key={material}>
            <Link href={`/materi/${sanitizeURL(material)}`}>{material}</Link>
          </li>
        ))}
      </ol>
    </Container>
  )
}

export default MateriIndex

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      materials: materialsList,
    },
  }
}
