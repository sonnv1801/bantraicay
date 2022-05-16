import Fourth from "./Fourth"
import anhfourth1 from "../../../../../Images/anhfourth1.jpg"
import anhfourth2 from "../../../../../Images/anhfourth2.jpg"
import anhfourth3 from "../../../../../Images/anhfourth3.jpg"




const listAbout = [
    {
        "id"    : 1,
        "image" : anhfourth1,
        "name" : 'Nguyen Thanh Truong',
        "title" : 'Identify the improvements needed by the company, design the system to implement those changes, and train and transfer the system to others.',
        "letter" : 'SYSTEM ANALYST',
    },
    {
        "id"    : 2,
        "image" : anhfourth2,
        "name" : 'Lieu Anh Vu',
        "title" : 'Management with the responsibility of anticipating and identifying customer needs, the business will make marketing policies to meet customer requirements.',
        "letter" : 'MARKETING MANAGER',
    },
    {
        "id"    : 3,
        "image" : anhfourth3,
        "name" : 'Le Hong Minh Tuan',
        "title" : 'As a user interface designer that helps users to communicate with the computer as well as the one who decides the colors and images of the website.',
        "letter" : 'INTERFACE DESIGNER',
    },


]

export default function AllFourth(){
    return(
        <div className="container">
            <div className="row Fourth">
                
            {listAbout.map(listAbout => (
            <Fourth
                
                image={listAbout.image}
                key={listAbout.id}
                title={listAbout.title}
                name={listAbout.name}
                letter={listAbout.letter}
            />
        ))}
        </div>
        </div>
    )
}
