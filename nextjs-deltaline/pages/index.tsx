import { Navbar } from './../lib/index-components/navbar';
import type { NextPage } from 'next'
import Head from 'next/head'
import { MantineProvider } from "@mantine/core"


const Home: NextPage = () => {
  return (
    <MantineProvider theme={{ fontFamily: "Quicksand", colorScheme: "dark", headings: { fontFamily: "Quicksand" }}} withGlobalStyles>
    <div>
      <Head>
      <link
            href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
            rel="stylesheet"
          />
      </Head>
    <Navbar   undefined={undefined}  />
    </div>
    </MantineProvider>
  )
}

export default Home
