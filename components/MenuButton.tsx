import { Box, Button, Center, Link, Text } from '@chakra-ui/react'
import { FC } from 'react'
import LinkWrapper from './LinkWrapper'

export type MenuButtonProps = {
  href: string
}

const MenuButton: FC<MenuButtonProps> = ({ href, children }) => {
  return (
    <LinkWrapper
      nextProps={{ href }}
      chakraProps={{ textDecoration: 'none', width: '100%' }}
    >
      <Button colorScheme='blue' width='full' minHeight={24} whiteSpace='normal' >
        {children}
      </Button>
    </LinkWrapper>
  )
}

export default MenuButton
