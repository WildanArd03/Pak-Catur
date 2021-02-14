import { Center, Container, SimpleGrid, MenuButton } from '@chakra-ui/react'
import { FC } from 'react'

const MenuWrapper: FC = ({ children }) => {
  return (
    <Center minHeight='100vh'>
      <Container maxWidth={['90%', '80%', '60%']}>
        <SimpleGrid columns={[1, , 2]} spacing={4}>
          {children}
        </SimpleGrid>
      </Container>
    </Center>
  )
}

export default MenuWrapper
