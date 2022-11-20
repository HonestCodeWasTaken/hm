import type { ReactElement, ReactNode } from 'react'
import '../styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'

import { trpc } from '../utils/trpc'
// eslint-disable @typescript-eslint/ban-types
export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
  )
}

export default trpc.withTRPC(MyApp)
