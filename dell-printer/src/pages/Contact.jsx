
import React from "react";
import ContactCart from "../component/ContactCart";
import Contact from "../component/Contact";
import InnerBenar from "../component/InnerBenar";
 
const Contacts = () => {
        const dis = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quidem?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quidem?'
    return(
        <>
        <InnerBenar title='Contact' dis={dis} />
        <ContactCart />
        <Contact />
        </>
    )
}

export default Contacts