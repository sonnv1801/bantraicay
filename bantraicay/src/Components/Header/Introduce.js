
export default function Introduce(props){
    return(
         <div className="py-1 introduce-background">
             <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xl-4">
                        <div className="introduce-header">
                            <div className="introduce-icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <span className="introduce-text">
                                {props.phone}
                            </span>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-4">
                        <div className="introduce-header">
                            <div className="introduce-icon">
                                <i className="fa fa-paper-plane-o"></i>
                            </div>
                            <span className="introduce-text">
                                {props.email}
                            </span>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-4">
                        <div className="introduce-header">
                            <span className="introduce-text">
                                {props.letter}
                            </span>
                        </div>
                    </div>
                </div>
             </div>
         </div>   
    );
}