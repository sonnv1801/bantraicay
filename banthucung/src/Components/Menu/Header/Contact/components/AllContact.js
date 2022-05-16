import Todolist from './Todolist';
import Contact from './Contact';
import Googlemap from './Googlemap';
import Formcontact from './Formcontact';
import Footer from '../../../../Footer/Footer';



export default function AllContact() {
    return(
        <div>
            <Todolist />
            <Contact />
            <div className= "container Mapcss">
                <div className= "row">
                <Googlemap/>
                <Formcontact/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}