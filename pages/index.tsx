import { Footer, Header, Loader, MainContents, PageWrapperWithOpacity, Seo, TechnicalWritingContent } from '@src/components'
import type { NextPage } from 'next'
import { useState } from 'react';


const Home: NextPage = () => {
  const [done, setDone] = useState(false);
  return (
    <>
      <Seo
        title="John O. Ajeigbe | Software Engineer"
        description="I’m a Software Engineer with more than 3 years of experience 
        building groundbreaking digital products across a variety of industries."
      />
      {!done && <Loader setDone={setDone} />}
      <PageWrapperWithOpacity active={done}>
        <Header />
        <MainContents />
        <TechnicalWritingContent />
        <Footer />
      </PageWrapperWithOpacity>
    </>
  )
}

export default Home
