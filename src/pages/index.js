import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import LayOut from '../components/layout';
const IndexPage = ()=> {
  return (
    <main>
      <LayOut pageTitle={'WelCome to my GatsBy Site !'}>
      <p className='text-xl font-medium'>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      </LayOut>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage;