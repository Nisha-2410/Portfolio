
import "./Contact.css"

const Contact = () => {
  return (
    <>
            <div className="form-container flex justify-center flex-col items-center">
            <div className="card-pattern"></div>
            <div className="form-title">

            </div>
            <h2 className="form-section-title text-4xl md:text-5xl lg:text-6xl font-bold">Get in Touch</h2>
            <form>
                <div className='flex flex-col text-center'>

                 <div className="mb-4 flex justify-between w-full ">
                    <label for="name1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name1" placeholder="Your name"/>
                </div>

                 <div className="mb-4 flex justify-between">
                    <label for="email1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email1" placeholder="name@example.com"/>
                </div>

                
                <div className="mb-4 flex justify-between">
                    <label for="message1" className="form-label">Message</label>
                    <textarea className="form-control" id="message1" rows="4" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message <i className="fas fa-paper-plane ms-1"></i></button>
                </div>



            </form>
        </div>
    </>
  )
}

export default Contact