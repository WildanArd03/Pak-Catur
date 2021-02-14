import { Box, Center, Link, Text } from '@chakra-ui/react'
import { FC } from 'react'
import LinkWrapper from './LinkWrapper'

export type MenuButtonProps = {
  href: string
}

const MenuButton: FC<MenuButtonProps> = ({ href, children }) => {
  return (
    <LinkWrapper nextProps={{ href }}>
      <Center height='100px' width='full' bgColor='cyan.400' rounded={4}>
        <Text fontSize='lg'>{children}</Text>
      </Center>
    </LinkWrapper>
  )
}

export default MenuButton
