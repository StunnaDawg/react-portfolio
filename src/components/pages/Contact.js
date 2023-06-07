import React, { useState } from "react";

function EmailSection() {
  let [inputEmailValue, setEmailInputValue] = useState("");
  let [emailStatus, setEmailStatus] = useState("wrong")

  const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  let handleEmailChange = (event) => {
    setEmailInputValue(event.target.value);
    if (regex.test(event.target.value)) {
      setEmailStatus("good")
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

export default function Contact() {
  let [inputNameValue, setNameInputValue] = useState("");
  let [inputMessageValue, setMessageInputValue] = useState("");

  let handleNameChange = (event) => {
    setNameInputValue(event.target.value);
  };

  let handleMessageChange = (event) => {
    setMessageInputValue(event.target.value);
  };

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
          <p>{inputNameValue}</p>
        </label>
      </form>

      <div>
        <EmailSection />
      </div>

      <form>
        message:
        <input
          type="text"
          value={inputMessageValue}
          onChange={handleMessageChange}
        />
        <p>{inputMessageValue}</p>
        <button onClick={() => console.log("hey")}>Submit</button>
      </form>
    </div>
  );
}
