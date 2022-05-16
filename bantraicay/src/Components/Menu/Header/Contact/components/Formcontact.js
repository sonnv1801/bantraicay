
export default function Formcontact() {
    return (
        <div className="col-xl-6 Massege">
            <div className="info bg-white p-4 ">
                <div className="form-group Ichi">
                    <input type="text" className="form-control Forminputcss" placeholder="Your Name" />
                </div>
                <div className="form-group Ichi ">
                    <input type="text" className="form-control Forminputcss" placeholder="Your Email" />
                </div>
                <div className="form-group Ichi">
                    <input type="text" className="form-control Forminputcss" placeholder="Subject" />
                </div>
                <div className="form-group Ichi">
                    <textarea name="" id="" cols="30" rows="7" className="form-control " placeholder="Message"></textarea>
                </div>
                <div className="form-group Ichi">
                    <button type="submit"  className="btn btn-primary py-3 px-5 bd-4">Send Message</button>
                </div>
            </div>
        </div>
    )
}