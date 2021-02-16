import { Box, Button, Center, Link, Text } from '@chakra-ui/react'
import { FC } from 'react'
import LinkWrapper from './LinkWrapper'

export type MenuButtonProps = {
  href: string
}

const MenuButton: FC<MenuButtonProps> = ({ href, children }) => {
  return (
    <LinkWrapper nextProps={{ href }} chakraProps={{ textDecoration: 'none' }}>
      <Button colorScheme='blue' width='full' minHeight={24}>
        {children}
      </Button>
    </LinkWrapper>
  )
}

export default MenuButton
