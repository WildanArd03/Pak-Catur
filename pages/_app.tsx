import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DefaultSeo titleTemplate='%s | Matematika' title='Matematika' />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
