import React, { useState } from "react";
import "./css/Contact.css";

/*
form:
Input tag attribute : name is used to capture input value by onChangeHandler
=> input tag name should be same as component state.


*/
const Contact = () => {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    firstVisit: "",
    foundNeeded: "",
    primaryReason: "",
    infoSeeking: "",
  });

  const onChangeHandler = (e) => {
    setFromData(()=> ({
      ...formData,
      [e.target.name]: [e.target.value]
    }))
  };

  const onSubmitHandler = (e) => {

    e.preventDefault();
   console.log(formData);
   
     
  };

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form onSubmit={onSubmitHandler}>
          <div className="formbold-form-title">
            <h2 className="">React Form!</h2>
            <p>Learning to handle forms in React</p>
          </div>
          <div className="formbold-input-flex">
            <div>
              <label htmlFor="name" className="formbold-form-label">
                Name
              </label>
              <input
                onChange={onChangeHandler}
                type="text"
                name="name"
                className="formbold-form-input"
              />
            </div>
            <div>
              <label htmlFor="email" className="formbold-form-label">
                Email
              </label>
              <input
                onChange={onChangeHandler}
                type="email"
                name="email"
                className="formbold-form-input"
              />
            </div>
          </div>
          <div className="formbold-input-radio-wrapper">
            <label htmlFor="firstVisit" className="formbold-form-label">
              Was this your first time visiting this website? (radio)
            </label>

            <div className="formbold-radio-flex">
              <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                  <input
                    onChange={onChangeHandler}
                    className="formbold-input-radio"
                    type="radio"
                    name="firstVisit"
                    value={"yes"}
                  />
                  Yes
                  <span className="formbold-radio-checkmark"></span>
                </label>
              </div>

              <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                  <input
                    onChange={onChangeHandler}
                    className="formbold-input-radio"
                    type="radio"
                    name="firstVisit"
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
              <label className="formbold-radio-label">
                <input
                  onChange={onChangeHandler}
                  className="formbold-input-radio"
                  type="checkbox"
                  name="foundNeeded"
                  value={"yes"}
                />
                Yes
                <span className="formbold-radio-checkmark border-radius"></span>
              </label>
            </div>

            <div className="formbold-radio-group">
              <label className="formbold-radio-label">
                <input
                  onChange={onChangeHandler}
                  className="formbold-input-radio"
                  type="checkbox"
                  name="foundNeeded"
                  value={"no"}
                />
                No
                <span className="formbold-radio-checkmark border-radius"></span>
              </label>
            </div>

            <div className="formbold-radio-group">
              <label className="formbold-radio-label">
                <input
                  onChange={onChangeHandler}
                  className="formbold-input-radio"
                  type="checkbox"
                  name="foundNeeded"
                  value={"maybe"}
                />
                Maybe
                <span className="formbold-radio-checkmark border-radius"></span>
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="primaryReason" className="formbold-form-label">
              What is your primary reason to visit this website?
            </label>
            <textarea
              onChange={onChangeHandler}
              rows="3"
              name="primaryReason"
              placeholder="Type here..."
              className="formbold-form-input"
            ></textarea>
          </div>
          <div>
            <label htmlFor="infoSeeking" className="formbold-form-label">
              If you could'nt find what you needed, please tell us what you were
              seeking?
            </label>
            <textarea
              onChange={onChangeHandler}
              rows="3"
              name="infoSeeking"
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
