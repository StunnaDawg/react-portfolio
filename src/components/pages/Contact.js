import React, { useState } from "react";
import clickOutside from './utils/clickOutside'

function EmailSection() {
    let [inputEmailValue, setEmailInputValue] = useState("");
    let [emailStatus, setEmailStatus] = useState("");
  
    const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  
    let handleEmailChange = (event) => {
      setEmailInputValue(event.target.value);
      if (regex.test(event.target.value)) {
        setEmailStatus("good");
      } else {
        setEmailStatus("wrong");
      }
    };
  
    const { ref, isClickedOutside, setIsClickedOutside } = clickOutside(false);
  
    return (
      <div ref={ref}>
        <form>
          <label>
            email:
            <input
              type="text"
              value={inputEmailValue}
              onChange={handleEmailChange}
            />
            {(isClickedOutside && emailStatus === "wrong") && <p>Not a valid Email!</p>}
            {(!isClickedOutside && emailStatus === "good") && <p>Email!</p>}
            {(!isClickedOutside && emailStatus === "") && <p></p>}
          </label>
        </form>
      </div>
    );
  }
  


function NameSection() {
  let [inputNameValue, setNameInputValue] = useState("");
  let [nameStatus, setNameStatus] = useState("");

  let handleNameChange = (event) => {
    setNameInputValue(event.target.value)
        setNameStatus("filled");
  };

  const { ref, isClickedOutside, setIsClickedOutside } = clickOutside(false);

    return (
        <div ref={ref}>
        <h2>Contact Me!</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={inputNameValue}
              onChange={handleNameChange}
            />
            {(!isClickedOutside && nameStatus === "filled") && <p>Hello! </p>}
            {(isClickedOutside && nameStatus === "") && <p>Who are you?</p>}
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
        <div ref={ref}>
      <form>
        message:
        <input
          type="text"
          value={inputMessageValue}
          onChange={handleMessageChange}
        />
        {(!isClickedOutside && messageState === "message") && <p>Thanks</p>}
        {(isClickedOutside && messageState === "") && <p>SAY SOMETHING</p>}
        <button onClick={() => console.log("hey")}>Submit</button>
      </form>
      </div>
    );
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
    </div>
  );
}
