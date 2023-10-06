import Image from 'next/image'
import Navbar from '../../Components/Navbar'
import Hero from '../../Components/Hero'
import Provide from '../../Components/Provide'
import Head from 'next/head'
import Whatwedo from '../../Components/Whatwedo'
import ProjMalhar from '../../Components/ProjMalhar'
import Footer from '../../Components/Footer'
import Subfooter from '../../Components/Subfooter'
import Bottom from '../../Components/Bottom'
import ProjKrishnadhan from '../../Components/ProjKrishnadhan'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Manas Developers</title>
        <meta name='description' content='' key='desc' />
        <meta title='Manas Developers'/>
        <meta property='og:image' content='At Manas Builders, our mission is to build a legacy of excellence by delivering superior construction
                        and design solutions that
                        enrich the lives of our clients' />
        <meta name='author' content='Manas Developers' />
        <meta name='keywords' content='construction , building , repair , tower' />
        <head>
          <link rel='icon' href='/favicon.ico' />
        </head>
      </Head>
      <section>
        <Hero />
      </section>
      <section id='about'>
        <Provide />
      </section>
      {/* <section id=''>
        <Whatwedo />
      </section> */}
      <section id='projects'>
        <ProjMalhar />
        <ProjKrishnadhan/>
      </section>
      <footer>
        
        <section id='contact'>
          <Footer />
        </section>
        <Subfooter />
        <Bottom />
      </footer>
    </div>
  )
}
