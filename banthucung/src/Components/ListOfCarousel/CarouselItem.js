import image1 from '../../Images/vegetable.jpg';
import image2 from '../../Images/fruit.jpg';
import image3 from '../../Images/juice.jpg';

export default function CorouseltItem(){
    return(
        <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image1} className="d-block w-100" alt="RAU"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>RAU</h5>
                        <p>SẢN PHẨM RAU SẠCH - BẢO VỆ SỨC KHỎE</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={image2} className="d-block w-100" alt="TRÁI CÂY"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>TRÁI CÂY</h5>
                        <p>SẢN PHẨM TRÁI CÂY - BẢO VỆ SỨC KHỎE</p>
                    </div>
                </div>
                
                <div className="carousel-item">
                    <img src={image3} className="d-block w-100" alt="NƯỚC ÉP"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>NƯỚC ÉP</h5>
                        <p>SẢN PHẨM NƯỚC ÉP - BẢO VỆ SỨC KHỎE</p>
                    </div>
                </div>
            </div>
    );
}