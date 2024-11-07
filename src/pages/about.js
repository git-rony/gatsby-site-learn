import * as React from 'react';
import LayOut from '../components/layout';
import { title } from '../components/my-component.module.css';
import { SEO } from '../components/seo';

const AboutPage = ()=>{
    return (
        <main>
            <LayOut pageTitle={'About Me'}>
            <p className={title}>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            </LayOut>
           
        </main>

    )
}

export default AboutPage
export const Head = () => <SEO title={"About Me"} description={"About me page"} />