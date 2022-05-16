
export default function CarouselImages(props){
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={props.images} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <span className="contentHomeFruits">{props.titles}</span>
                <h1 className="contentFruits">{props.contents}</h1>
              </div>
            </div>
          </div>
      </div>
    );
}