import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_10alzvc",
        "template_5ppyidq",
        form.current,
        "av3Qpa2PTzUbuaole"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Form Submitted Successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );

      setFormData({
        name: '',
        email: '',
        message: '',
      });
  };

  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              placeholder="Abc"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              placeholder="Abc@xyz.com"
            />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your query..."
            />
          </div>

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
