import React, { useState, useEffect, useRef } from "react";

function EmailSection() {
  let [inputEmailValue, setEmailInputValue] = useState("");
  let [emailStatus, setEmailStatus] = useState("wrong");

  const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  let handleEmailChange = (event) => {
    setEmailInputValue(event.target.value);
    if (regex.test(event.target.value)) {
      setEmailStatus("good");
      console.log(emailStatus);
    }
  };

  
  if (emailStatus === "wrong") {
    return (
      <form>
        <label>
          email:
          <input
            type="text"
            value={inputEmailValue}
            onChange={handleEmailChange}
          />
          <p>Not a valid Email!</p>
        </label>
      </form>
    );
  }

  if (emailStatus === "good") {
    return (
      <form>
        <label>
          email:
          <input
            type="text"
            value={inputEmailValue}
            onChange={handleEmailChange}
          />
          <p>valid</p>
        </label>
      </form>
    );
  }
}

function NameSection() {
  let [inputNameValue, setNameInputValue] = useState("");
  let [nameStatus, setNameStatus] = useState("empty");

  let handleNameChange = (event) => {
    setNameInputValue(event.target.value);
    setNameStatus("filled");
  };

  if (nameStatus === "empty") {
    return (
      <div>
        <h2>Contact Me!</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={inputNameValue}
              onChange={handleNameChange}
            />
            <p>name please</p>
          </label>
        </form>
      </div>
    );
  }
  if (nameStatus === "filled") {
    return (
      <div>
        <h2>Contact Me!</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={inputNameValue}
              onChange={handleNameChange}
            />
            <p>thanks</p>
          </label>
        </form>
      </div>
    );
  }
}

function MessageSection() {
  let [inputMessageValue, setMessageInputValue] = useState("");
  let [messageState, setMessageState] = useState("noMessage");

  let handleMessageChange = (event) => {
    setMessageInputValue(event.target.value);
    setMessageState("message");
  };
  if (messageState === "noMessage") {
    return (
      <form>
        message:
        <input
          type="text"
          value={inputMessageValue}
          onChange={handleMessageChange}
        />
        <p>No message!</p>
        <button onClick={() => console.log("hey")}>Submit</button>
      </form>
    );
  }
  if (messageState === "message") {
    return (
      <form>
        message:
        <input
          type="text"
          value={inputMessageValue}
          onChange={handleMessageChange}
        />
        <p>Thanks!</p>
        <button onClick={() => console.log("hey")}>Submit</button>
      </form>
    );
  }
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
