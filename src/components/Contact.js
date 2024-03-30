import React, { useState } from "react";
import "./css/Contact.css";

const Contact = () => {
  const [formData, setFromData] = useState({
    email: "",
    name: "",
    firstVisit: false,
    foundNeeded: false,
    primaryReason: "",
    infoSeeking: "",
  });
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          {/* -------------- */}
          <div className="formbold-form-title">
            <h2 className="">React Form!</h2>
            <p>Learning to handle forms in React</p>
          </div>
          <div className="formbold-input-flex">
            <div>
              <label for="firstname" className="formbold-form-label">
                Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="formbold-form-input"
              />
            </div>
            <div>
              <label for="email" className="formbold-form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="formbold-form-input"
              />
            </div>
          </div>
          <div className="formbold-input-radio-wrapper">
            <label for="ans" className="formbold-form-label">
              Was this your first time visiting this website? (radio)
            </label>

            <div className="formbold-radio-flex">
              <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                  <input
                    className="formbold-input-radio"
                    type="radio"
                    name="ans"
                    id="ans"
                    value={"yes"}
                  />
                  Yes
                  <span className="formbold-radio-checkmark"></span>
                </label>
              </div>

              <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                  <input
                    className="formbold-input-radio"
                    type="radio"
                    name="ans"
                    id="ans"
                    value={"no"}
                  />
                  No
                  <span className="formbold-radio-checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="formbold-input-radio-wrapper">
            <label className="formbold-form-label">
              Were you able to find what you need? (checkbox)
            </label>

            <div className="formbold-radio-group">
              <label className="formbold-radio-label" for="yes">
                <input
                  className="formbold-input-radio"
                  type="checkbox"
                  name="yes"
                  id="yes"
                  value={"yes"}
                />
                Yes
                <span className="formbold-radio-checkmark"></span>
              </label>
            </div>

            <div className="formbold-radio-group">
              <label className="formbold-radio-label" for="no">
                <input
                  className="formbold-input-radio"
                  type="checkbox"
                  name="no"
                  id="no"
                  value={"no"}
                />
                No
                <span className="formbold-radio-checkmark"></span>
              </label>
            </div>

            <div className="formbold-radio-group">
              <label className="formbold-radio-label" for="maybe">
                <input
                  className="formbold-input-radio"
                  type="checkbox"
                  name="maybe"
                  id="maybe"
                  value={"maybe"}
                />
                Maybe
                <span className="formbold-radio-checkmark"></span>
              </label>
            </div>
          </div>
          <div>
            <label for="message" className="formbold-form-label">
              What is your primary reason to visit this website?
            </label>
            <textarea
              rows="3"
              name="message"
              id="message"
              placeholder="Type here..."
              className="formbold-form-input"
            ></textarea>
          </div>
          <div>
            <label for="message" className="formbold-form-label">
              If you could'nt find what you needed, please tell us what you were
              seeking?
            </label>
            <textarea
              rows="3"
              name="message"
              id="message"
              placeholder="Type here..."
              className="formbold-form-input"
            ></textarea>
          </div>
          <input type="submit" value={"Submit Form"} className="formbold-btn" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
