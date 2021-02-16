import { Container, HStack, IconButton, Text } from '@chakra-ui/react'
import { IoMdArrowBack } from 'react-icons/io'
import LinkWrapper from './LinkWrapper'

export type NavigationProps = {
  backButton?: string
}

export default function Navigation({ backButton }: NavigationProps) {
  return (
    <Container maxWidth={['100%']} bgColor='blue.500' paddingY={3} paddingX={8}>
      <HStack spacing={8} >
        {backButton && (
          <LinkWrapper nextProps={{ href: backButton }}>
            <IconButton aria-label='back' icon={<IoMdArrowBack />} />
          </LinkWrapper>
        )}
        <Text color='white' fontSize='3xl' padding={0} margin={0} >
          Math Wikrama
        </Text>
      </HStack>
    </Container>
  )
}
