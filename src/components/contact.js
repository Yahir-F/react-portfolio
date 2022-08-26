function ContactMe() {
  return (
      <div class='col-12'>
          <div class="d-flex justify-content-center">
              <h2>Contact Me</h2>
          </div>
          <div class="d-flex justify-content-center">
              <form class="col-7">
          <div class="form-outline mb-4">
           <input type="text" id="name" class="form-control" placeholder="Your Name" />
              </div>
            <div class="form-outline mb-4">
          <input type="email" id="email" class="form-control" placeholder="Email" />
         </div>
        <div class="form-outline mb-4">
      <textarea class="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
        </div>
      <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
      </form>
   </div>
 </div>
  )
}

export default ContactMe;
