import { GetStaticProps, NextPage } from 'next'
import MenuButton from '~root/components/MenuButton'
import MenuWrapper from '~root/components/MenuWrapper'
import { practicesList } from '~root/lib/constants'
import { cleanFileName } from '~root/lib/functions'

type HomeProps = {
  practices: string[]
}

const SoalIndex: NextPage<HomeProps> = ({ practices }) => {
  return (
    <MenuWrapper>
      {practices.map(practice => (
        <MenuButton key={practice} href={`/soal/${practice}`}>
          {practice}
        </MenuButton>
      ))}
    </MenuWrapper>
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
