import anh2 from "../../../../../Images/anh2.jpg"
export default function First(){
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={anh2} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <span className="contentHomeFruits layla">HOME ABOUT US</span>
                <h1 className="contentFruits layla">ABOUT US</h1>
              </div>
            </div>
          </div>
      </div>
    );
}