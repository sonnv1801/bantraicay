import Fifth from "./Fifth"
import anh3 from "../../../../../Images/anh3.jpg"
import anh4 from "../../../../../Images/anh4.jpg"
import anh5 from "../../../../../Images/anh5.jpg"
import anh6 from "../../../../../Images/anh6.jpg"



const listAbout = [
    {
        "id"    : 1,
        "image" : anh3,
        "name" : 'FREE SHIPPING',
        "title" : 'ON ORDER OVER $100',
    },
    {
        "id"    : 2,
        "image" : anh4,
        "name" : 'ALWAYS FRESH',
        "title" : 'PRODUCT WELL PACKAGE',
    },
    {
        "id"    : 3,
        "image" : anh5,
        "name" : 'SUPERIOR QUALITY',
        "title" : 'QUALITY PRODUCTS',
    },
    {
        "id"    : 4,
        "image" : anh6,
        "name" : 'SUPPORT',
        "title" : '24/7 SUPPORTSUPPORT',
    },


]

export default function AllFifth(){
    return(
        <div className="container">
            <div className="row">
                
            {listAbout.map(listAbout => (
            <Fifth
                
                image={listAbout.image}
                key={listAbout.id}
                name={listAbout.name}
                title={listAbout.title}
            />
        ))}
        </div>
        </div>
    )
}