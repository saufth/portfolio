// Components
import Footer from '../../components/sections/Footer'
import Head from 'next/head'
import Navbar from '../../components/navigation/Navbar'
import Container from '../../core/ui/components/layout/Container'

const keywordList = [
  'web developer',
  'fullstack developer',
  'javascrip developer',
  'software developer',
  'web design',
  'ui design',
  'ux design'
]

const AppLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name="description" content="Web developer" />
        <meta name="keywords" content={String(keywordList)} />
        <title>Saufthdev portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Navbar />

        <main>
          {children}
        </main>
      </Container>

      <Footer />
    </div>
  )
}

export default AppLayout
