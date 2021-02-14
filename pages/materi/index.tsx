import { GetStaticProps, NextPage } from 'next'
import MenuButton from '~root/components/MenuButton'
import MenuWrapper from '~root/components/MenuWrapper'
import { materialsList } from '~root/lib/constants'
import { cleanFileName } from '~root/lib/functions'

type HomeProps = {
  materials: string[]
}

const MateriIndex: NextPage<HomeProps> = ({ materials }) => {
  return (
    <MenuWrapper>
      {materials.map(material => (
        <MenuButton key={material} href={`/materi/${material}`}>
          {material}
        </MenuButton>
      ))}
    </MenuWrapper>
  )
}

export default MateriIndex

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      materials: materialsList.map(material => cleanFileName(material)),
    },
  }
}
