import { Heading, HeadingProps, Image, Text, TextProps } from '@chakra-ui/react'
import { HtmrOptions } from 'htmr'
import { FC } from 'react'

export function configuredComponentFactory<T>(Component: Function, props?: T) {
  const CustomComponent: FC = ({ children }) => {
    return <Component {...props}>{children}</Component>
  }

  return CustomComponent
}

export const htmrOptions: HtmrOptions = {
  transform: {
    h1: configuredComponentFactory<HeadingProps>(Heading, {
      size: '4xl',
      as: 'h1',
    }),
    h2: configuredComponentFactory<HeadingProps>(Heading, {
      size: '3xl',
      as: 'h1',
    }),
    h3: configuredComponentFactory<HeadingProps>(Heading, {
      size: '2xl',
      as: 'h1',
    }),
    h4: configuredComponentFactory<HeadingProps>(Heading, {
      size: 'xl',
      as: 'h1',
    }),
    h5: configuredComponentFactory<HeadingProps>(Heading, {
      size: 'lg',
      as: 'h1',
    }),
    h6: configuredComponentFactory<HeadingProps>(Heading, {
      size: 'md',
      as: 'h1',
    }),
    p: configuredComponentFactory<TextProps>(Text, {
      fontSize: 'lg',
      as: 'p',
    }),
    img: Image,
  },
}
