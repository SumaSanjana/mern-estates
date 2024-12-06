import React from "react";
import "./contact.scss";

function contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>
        We're here to help! Whether you have questions about our services or
        need assistance, feel free to reach out.
      </p>
      <div className="contact-form">
        <form action="https://formsubmit.co/varunyadav4868@gmail.com" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your name" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Enter your message" 
              required
            ></textarea>
          </div>
          {/* Honeypot field to prevent spam */}
          <input 
            type="text" 
            name="_honey" 
            style={{ display: "none" }} 
          />
          {/* Success redirect */}
          <input 
            type="hidden" 
            name="_next" 
            value="https://your-redirect-url.com" 
          />
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default contact;
