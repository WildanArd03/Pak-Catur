import { Container } from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { practicesList } from '~root/lib/constants'
import { cleanFileName } from '~root/lib/functions'

type HomeProps = {
  practices: string[]
}

const SoalIndex: NextPage<HomeProps> = ({ practices }) => {
  return (
    <Container maxWidth='80%'>
      <ol>
        {practices.map(practice => (
          <li key={practice}>
            <Link href={`/soal/${practice}`}>{practice}</Link>
          </li>
        ))}
      </ol>
    </Container>
  )
}

export default SoalIndex

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      practices: practicesList.map(material => cleanFileName(material)),
    },
  }
}
