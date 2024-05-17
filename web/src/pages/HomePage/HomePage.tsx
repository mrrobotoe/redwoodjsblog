import { Metadata } from '@redwoodjs/web'

import ArticleCells from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <ArticleCells />
    </>
  )
}

export default HomePage
