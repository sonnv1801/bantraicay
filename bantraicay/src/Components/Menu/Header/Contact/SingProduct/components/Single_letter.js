import Singlecar from "./Single_car"
import product from "../images/product.jpg"
import halan from "../images/halan.jpg"
import caitim from "../images/caitim.jpg"
import dautay from "../images/dautay.jpg"


const listAbout = [
    {
        "id"    : 1,
        "image" : product,
        "name" : 'Orange',
        "title" : '$80.00',
    },
    {
        "id"    : 2,
        "image" : halan,
        "name" : 'peas',
        "title" : '$110.00.',
    },
    {
        "id"    : 3,
        "image" : caitim,
        "name" : 'purple cabbage',
        "title" : '$95.00',
    },
    {
        "id"    : 4,
        "image" : dautay,
        "name" : 'hand strawberry',
        "title" : '$120.00',
    },



]

export default function Single_letter(){
    return(
        <div className="container menu">
            <div className="row">
                
            {listAbout.map(listAbout => (
            <Singlecar
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