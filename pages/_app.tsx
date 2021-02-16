import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DefaultSeo
        titleTemplate='%s | Matematika'
        title='Matematika'
        description='Kuliah? BSI aja! Hotel? Traveloka'
        openGraph={{
          type: 'website',
          url: 'https://pak-catur.netlify.app/',
          title: 'Aplikasi Matematika',
          description: 'Kuliah? BSI aja! Hotel? Traveloka',
          images: [{ url: 'https://pak-catur.netlify.app/splash.jpg' }],
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
