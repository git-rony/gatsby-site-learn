import * as React from "react";
import Greeting from "../components/greeting";
import { SEO } from "../components/seo";

const SayHello = () =>{
    return (
        
            <div>
                <Greeting name={"Jahid"}/>
                <Greeting name={"Hasan"}/>
                <Greeting name={"Rony"}/>
            </div>
       
    )
}

export default SayHello;

export const Head = ()=> <SEO title={"greeting"}/>