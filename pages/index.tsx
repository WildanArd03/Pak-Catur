import { NextPage } from 'next'
import MenuButton from '~root/components/MenuButton'
import MenuWrapper from '~root/components/MenuWrapper'

const Home: NextPage = () => {
  return (
    <MenuWrapper>
      <MenuButton href='/materi'>Materi</MenuButton>
      <MenuButton href='/soal'>Latihan Soal</MenuButton>
    </MenuWrapper>
  )
}

export default Home
