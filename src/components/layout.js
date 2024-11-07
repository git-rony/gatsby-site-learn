import { Link } from 'gatsby';
import * as React from 'react';
import {
    container,
    heading,
    navLinkItem,
    navLinks,
    navLinkText
} from '../components/my-component.module.css';
const LayOut = ({pageTitle, children}) =>{
    return (
            <>
            <div className={container}>
            <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
        </ul>
      </nav>

      <main>
      <h2 className={`text-5xl text-center font-semibold ${heading}`}>{pageTitle}</h2>
        {children}
        </main>
            </div>

            </>
    )
}

export default LayOut;

