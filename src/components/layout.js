import { Link } from 'gatsby';
import * as React from 'react';

const LayOut = ({pageTitle, children}) =>{
    return (
            <>
            <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <main>
      <h2 className='text-center text-3xl font-semibold'>{pageTitle}</h2>
        {children}
        </main>

            </>
    )
}

export default LayOut;

