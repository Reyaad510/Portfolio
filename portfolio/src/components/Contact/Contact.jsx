import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="contactPage">
        <div className="contactPageContainer" id="contact">
          <h2>Contact</h2>
          <div className="flexContact">
            <div className="iconBox">
              {/* <FontAwesomeIcon
                icon="envelope-open"
                size="10x"
                className="colorIcon"
              /> */}
              <a
                href="https://www.linkedin.com/in/nicholasrafeek/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin-in"]}
                  size="7x"
                  className="icon-effect"
                />
              </a>

              <a
                href="https://github.com/Reyaad510"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  size="7x"
                  className="icon-space icon-effect"
                />
              </a>
            </div>
            <div className="formBox">
              <h3>Let's get in touch...</h3>
              <form
                onSubmit={this.submitForm}
                action="https://formspree.io/xjvydnoo"
                method="POST"
                className="form"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="What's your name?"
                ></input>
                <input
                  type="email"
                  name="email"
                  placeholder="What's your email?"
                />
                <textarea
                  rows="7"
                  type="text"
                  name="message"
                  placeholder="What's your questions?"
                />
                {status === "SUCCESS" ? (
                  <p>Thanks!</p>
                ) : (
                  <button className="submitButton">Submit</button>
                )}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default Contact;
