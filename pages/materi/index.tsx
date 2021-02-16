import { Heading } from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import MenuButton from '~root/components/MenuButton'
import MenuWrapper from '~root/components/MenuWrapper'
import Navigation from '~root/components/Navigation'
import { materialsList } from '~root/lib/constants'
import { IndexingData } from '~root/lib/types'

type MateriIndexProps = {
  materials: IndexingData[]
}

const MateriIndex: NextPage<MateriIndexProps> = ({ materials }) => {
  return (
    <>
      <NextSeo title='Daftar Materi' />

      <Navigation backButton='/' />

      <Heading marginTop={8} textAlign='center'>
        Daftar Materi
      </Heading>

      <MenuWrapper>
        {materials.map(({ name, title }) => (
          <MenuButton key={name} href={`/materi/${name}`}>
            {title}
          </MenuButton>
        ))}
      </MenuWrapper>
    </>
  )
}

export default MateriIndex

export const getStaticProps: GetStaticProps<MateriIndexProps> = async () => {
  return {
    props: {
      materials: materialsList,
    },
  }
}
