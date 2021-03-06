import { AppProps } from "next/app"
import { NextPage } from "next"
import { SessionProvider } from "next-auth/react"
import { config } from "@fortawesome/fontawesome-svg-core"
import Layout from "@/components/Layout"
import "@/styles/globals.scss"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

type AppPropsWithLayout = AppProps & {
  Component: NextPage
}

export default function MyFursonaApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppPropsWithLayout) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
