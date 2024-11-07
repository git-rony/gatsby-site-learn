import { Link } from 'gatsby';
import * as React from 'react';
const IndexPage = ()=> {
  return (
    <main>
      <h2 className='text-center text-3xl font-semibold'>WelCome to my GatsBy Site !</h2>
      <Link to="/about">About</Link>
      <p className='text-xl font-medium'>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage;