import video2 from "../../../../../Images/video2.mp4"

export default function Second_image(props) {
    return (
        <>
            <video width="350px" height="auto" controls>
                <source src= { video2 } className="video1" type="video/mp4"/>
            </video>
        </>
    )
  }