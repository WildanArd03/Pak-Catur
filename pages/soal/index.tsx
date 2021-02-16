import { Heading } from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import MenuButton from '~root/components/MenuButton'
import MenuWrapper from '~root/components/MenuWrapper'
import Navigation from '~root/components/Navigation'
import { practicesList } from '~root/lib/constants'
import { IndexingData } from '~root/lib/types'

type SoalIndexProps = {
  practices: IndexingData[]
}

const SoalIndex: NextPage<SoalIndexProps> = ({ practices }) => {
  return (
    <>
      <NextSeo title='Daftar Latihan Soal' />

      <Navigation backButton='/' />

      <Heading marginTop={8} textAlign='center'>
        Daftar Latihan Soal
      </Heading>

      <MenuWrapper>
        {practices.map(({ name, title }) => (
          <MenuButton key={name} href={`/soal/${name}`}>
            {title}
          </MenuButton>
        ))}
      </MenuWrapper>
    </>
  )
}

export default SoalIndex

export const getStaticProps: GetStaticProps<SoalIndexProps> = async () => {
  return {
    props: {
      practices: practicesList,
    },
  }
}
