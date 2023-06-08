import React, { useState } from "react";
import clickOutside from "./utils/clickOutside";

function EmailSection() {
  let [inputEmailValue, setEmailInputValue] = useState("");
  let [emailStatus, setEmailStatus] = useState("");

  const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  let handleEmailChange = (event) => {
    setEmailInputValue(event.target.value);
    if (regex.test(event.target.value)) {
      setEmailStatus("good");
    }
  };

  const { ref, isClickedOutside, setIsClickedOutside } = clickOutside(false);

  return (
    <div ref={ref} className="form-section">
      <form className="email-form">
        <label className="formNames">
          Email:
          <input
            type="text"
            className={`email-input form-input ${
              isClickedOutside && emailStatus === "" ? "unknown" : ""
            }`}
            value={inputEmailValue}
            onChange={handleEmailChange}
          />
          {isClickedOutside && emailStatus === "" && <p className="emailPlease">Enter a valid email!</p>}
        </label>
      </form>
    </div>
  );
}

function NameSection() {
  let [inputNameValue, setNameInputValue] = useState("");
  let [nameStatus, setNameStatus] = useState("");

  let handleNameChange = (event) => {
    setNameInputValue(event.target.value);
    setNameStatus("filled");
  };

  const { ref, isClickedOutside, setIsClickedOutside } = clickOutside(false);

  return (
    <div ref={ref} className="form-section">
      <form className="name-form">
        <label className="formNames">
          {" "}
          Name:
          <input
            type="text"
            className={`name-input form-input ${
                isClickedOutside && nameStatus === "" ? "unknown" : ""
              }`}
            value={inputNameValue}
            onChange={handleNameChange}
          />
          {isClickedOutside && nameStatus === "" && <p className="emailPlease">Enter your Name!</p>}
        </label>
      </form>
    </div>
  );
}

function MessageSection() {
  let [inputMessageValue, setMessageInputValue] = useState("");
  let [messageState, setMessageState] = useState("");

  let handleMessageChange = (event) => {
    setMessageInputValue(event.target.value);
    setMessageState("message");
  };
  const { ref, isClickedOutside, setIsClickedOutside } = clickOutside(false);

  return (
    <div ref={ref} className="form-section">
      <form className="message-form">
        <label className="formNames">
          Message:
          <textarea
            className={`message-input form-input ${
                isClickedOutside && messageState === "" ? "unknown" : ""
              }`}
            value={inputMessageValue}
            onChange={handleMessageChange}
          />
          {isClickedOutside && messageState === "" && <p>Enter your desired message</p>}
        </label>
      </form>
    </div>
  );
}

function formSubmitHandler () {
    //for the future to be able to send emails
}

export default function Contact() {
  return (
    <div>
      <div>
        <NameSection />
      </div>
      <div>
        <EmailSection />
      </div>
      <div>
        <MessageSection />
      </div>
      <button className="formSubmit" onClick={() => formSubmitHandler()}>
            Submit
        </button>
    </div>
  );
}
