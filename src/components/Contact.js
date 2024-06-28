function Contact(){
  return<div className="container" style={{marginTop:'150px'}}>
    <h1 className="text-center" style={{textDecoration:"underline", fontFamily:"Callibri"}}>CONTACT US</h1>
    <br/><br/>
    <div className="row">
        <div className="col-md-6 col-md-offset-3">
                <b>Get In Touch</b><br/>
                <p>We love hearing from our customers and are here to help with any questions, concerns, or feedback.</p>
                <p>If you have any question aboutv your order,please include in your message , the order number and the email address associated with your account. Thanks ! </p>
                <br/>
                <b>Customer Support</b><br/><br/>
                <b>Email</b><br/>
                <p>support@yourshop.com</p><br/>
                <b>Phone</b><br/>
                <p>1-800-123-4567</p><br/>
                <b>Address</b><br/>
                <p>YourShop Inc.<br/>123 Shopping <br/>Street<br/>Retail City, <br/>ST 12345</p><br/>
                <b>Business Hours:</b><br/>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 4:00 PM<br/>Sunday: Closed</p>
        </div>
        <div className="col-md-5 offset-1">
              <div className="container border border-3 rounded  p-5" >
                <div className="text-center"><b>Please fill out the form below and we will get back to you as soon as possible.</b></div><br/>
                <form>
                    <label className="form-group">
                        Your Name :
                    </label>
                    <input type="text" id="name" className="form-control"></input>
                    <br/>
                    <label className="form-group">
                        Your Email :
                    </label>
                    <input type="email" id="email" className="form-control"></input>
                    <br/>
                    <label className="form-group">
                        Your Phone :
                    </label>
                    <input type="number" id="phone" className="form-control"></input>
                    <br/>
                    <label className="form-group">
                        Order Number :
                    </label>
                    <input type="number" id="O_num" className="form-control"></input>
                    <br/>
                    <label className="form-group">
                        Message :
                    </label>
                    <textarea rows={5} cols={20}   id="comment" className="form-control"></textarea><br/><br/>
                    <button type="button" className="btn btn-info btn-block">Submit</button>
                </form>
              </div><br/><br/><br/><br/><br/><br/>
        </div>
        
    </div>
  </div>
}
export default Contact;