import { Link } from 'gatsby';
import * as React from 'react';
import { SEO } from '../components/seo';

const AboutPage = ()=>{
    return (
        <main>
            <h1 className='text-4xl font-bold'>About Me</h1>
            <Link to="/">Back to Home</Link>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </main>

    )
}

export default AboutPage
export const Head = () => <SEO title={"About Me"} description={"About me page"} />