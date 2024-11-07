import * as React from 'react';
import LayOut from '../components/layout';
const IndexPage = ()=> {
  return (
    <main>
      <LayOut pageTitle={'WelCome to my GatsBy Site !'}>
      <p className='text-xl font-medium'>I'm making this by following the Gatsby Tutorial.</p>
      </LayOut>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage;