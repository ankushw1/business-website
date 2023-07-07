import React, { useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using emailjs
    emailjs
      .send(
        "service_i0qkvow",
        "template_pftzh7r",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "Tmj4Q_O-3hyHdBJz6"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred while sending the message. Please try again.");
        }
      );
  };

  return (
    <div style={{padding:'40px'}}>
      <h1>Contact Us</h1>
      <p style={{paddingLeft:'50px',paddingRight:'50px', paddingTop:'10px',paddingBottom:'20px'}}>
      Welcome to <strong>VelWet I.T. Solutions!</strong>  We are dedicated to providing top-notch technology services tailored to your needs. Whether you have a question, need assistance with a project, or want to explore partnership opportunities, we're all ears. Our team of skilled professionals is passionate about delivering exceptional results and helping you harness the power of technology to achieve your goals. Reach out to us by filling out the form below, and we will promptly provide you with the information and guidance you need. We look forward to hearing from you!
      </p>
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit} >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
