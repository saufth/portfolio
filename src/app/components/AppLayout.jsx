// Components
import Footer from '../../components/sections/Footer'
import Head from 'next/head'

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

      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default AppLayout
