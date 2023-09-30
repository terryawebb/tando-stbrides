import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <img src= "/pork.png" alt="Beautiful pork" width="600" height="600" />
        <Header title="Olivia & Terry are getting wed, and you're invited!" />
        <p className="description">
         Please join us on 26 Oct 2024. More details to follow.
        </p>
      </main>

      <Footer />
    </div>
  )
}
