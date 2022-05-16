import bg_1 from '../images/bg_1.jpg'
export default function Todolist(){
    return(
        <div className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={bg_1} className="d-block w-100 manager" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <span className="Todoimg">Home Contact us</span>
                <h1 className="Todoimg">Contact us</h1>
              </div>
            </div>
          </div>
      </div>
    );
}