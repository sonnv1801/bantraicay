import React from "react";
import ContactLetter from "./ContactLetter.js";



const listAbout = [
    {
        "id"    : 1,
        "name"  : "Address:",
        "title" : '"198 West 21th Street, Suite 721 New York NY 10016"',
    },
    {
        "id"    : 2,
        "name"  : "Phone:",
        "title" : <a href="tel://1234567920">+ 1235 2355 98</a>,
    },
    {
        "id"    : 3,
        "name"  : "Email:",
        "title" :  <a href="mailto:info@yoursite.com">info@yoursite.com</a> ,
    },
    {
        "id"    : 4,
        "name"  : "Website:",
        "title" :  <a href="mailto:info@yoursite.com">info@yoursite.com</a>  ,
    },


]

export default function Contact(){
    return(
        <div className="container Addresscss">
            <div className="row">
                
            {listAbout.map(listAbout => (
            <ContactLetter
             key={listAbout.id}
            name={listAbout.name}
            title={listAbout.title}  
            />
        ))}
        </div>
        </div>
    )
}


// export default function Contact() {
//     return(
//         <section className= "ftco-section contact-section bg-light">
//             <div className="container Banana">
//                 <div className= "row d-flex mb-5 contact-info Contact">
//                     <div className="w-100"></div>
//                     <div className="col-md-3 d-flex Run">
//                         <div className="info bg-white p-4 ">
//                             <p>
//                                 <spam>Address</spam>
//                                 "198 West 21th Street, Suite 721 New York NY 10016"
//                             </p>
//                         </div>
//                     </div>
//                     <div className="col-md-3 d-flex Run">
//                         <div className="info bg-white p-4  ">
//                             <p>
//                                 <spam>Phone</spam>
//                                 <a href="tel://1234567920">+ 1235 2355 98</a>
//                             </p>
//                         </div>
//                     </div>
//                     <div className="col-md-3 d-flex Run">
//                         <div className="info bg-white p-4">
//                             <p>
//                                 <spam>Email:</spam>
//                                 <a href="mailto:info@yoursite.com">info@yoursite.com</a> 
//                             </p>
//                         </div>
//                     </div>
//                     <div className="col-md-3 d-flex Run">
//                         <div className="info bg-white p-4">
//                             <p>
//                                 <spam>Website</spam>
//                                 <a href="#">yoursite.com</a>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div> 
//         </section>
//     )
// }

