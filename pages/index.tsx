import { Footer, Header, Loader, MainContents, PageWrapperWithOpacity, Seo } from '@src/components'
import type { NextPage } from 'next'
import { useState } from 'react';


const Home: NextPage = () => {
  const [done, setDone] = useState(false);
  return (
    <>
      <Seo
        title="John O. Ajeigbe | Software Engineer"
        description="I'm a software developer based in Nigeria with 3 years of professional experience developing web applications."
      />
      {!done && <Loader setDone={setDone} />}
      <PageWrapperWithOpacity active={done}>
        <Header />
        <MainContents />
        <Footer />
      </PageWrapperWithOpacity>
    </>
  )
}

export default Home
