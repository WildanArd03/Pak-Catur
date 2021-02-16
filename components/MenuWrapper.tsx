import { Center, Container, SimpleGrid, MenuButton } from '@chakra-ui/react'
import { FC } from 'react'

const MenuWrapper: FC = ({ children }) => {
  return (
    <Center paddingY={8}>
      <Container maxWidth={['90%', '80%', '60%']}>
        <SimpleGrid columns={[1, , 2]} spacing={4}>
          {children}
        </SimpleGrid>
      </Container>
    </Center>
  )
}

export default MenuWrapper
