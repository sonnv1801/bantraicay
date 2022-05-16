export default function Subcribe(){
    return(
<footer className="text-center text-white footercolor">
  <div className="container p-4 pb-0">
      <form action="#">
        <div className="row d-flex justify-content-center">
          <div className="col-auto buttonfooter">
              <p className="pt-2">
                <strong>Subcribe to our Newsletter</strong>
              </p>
          </div>
          <div className="col-md-5 col-12 buttonfooter">
              <input type="text" className="form-control" placeholder="Email address"/>  
          </div>
          <div className="col-auto buttonfooter">
              <input className="btn btn-primary" type="submit" value="Submit"/>
          </div>      
        </div>
      </form>
  </div>
</footer>
    );
}