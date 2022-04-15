import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'> Contact Us</h1>
      </div>
      <div className='container '>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form>
            <div className="mb-3">
                <label  className="form-label">Name</label>
                <input type="text" className="form-control" id="name"/>
              </div>
              <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="phone"/>
              </div>
              <label for="exampleInputPassword1" className="form-label">Message</label>
              <textarea name="message" className= "form-control" id="message"  rows="3"></textarea>
              <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;