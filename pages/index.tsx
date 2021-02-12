import { Container } from '@chakra-ui/react'
import { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Container maxWidth='80%'>
      <ol>
        <li>
          <Link href='/materi'>material</Link>
        </li>
        <li>
          <Link href='/soal'>soal</Link>
        </li>
      </ol>
    </Container>
  )
}

export default Home
