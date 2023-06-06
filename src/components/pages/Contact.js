import React, {useState} from "react";

export default function Contact() {
    let [inputNameValue, setNameInputValue ] = useState('');
    let [inputEmailValue, setEmailInputValue] = useState('')
    let [inputMessageValue, setMessageInputValue] = useState('')

    let handleNameChange = (event) => {
        setNameInputValue(event.target.value);
    }

    let handleEmailChange = (event) => {
        setEmailInputValue(event.target.value);
    }

    let handleMessageChange = (event) => {
        setMessageInputValue(event.target.value);
    }

    return (
        <div>
    <h2>Contact Me!</h2>
    <form>
     <label>
        Name:
        <input 
        type="text" value={inputNameValue} onChange={handleNameChange}
        />
        <p>{inputNameValue}</p>
        </label>
    </form>
    <form>
        <label>
        email:
        <input 
        type="text" value={inputEmailValue} onChange={handleEmailChange}
        />
        <p>{inputEmailValue}</p>
        </label>
    </form>
        <form>
        message:
        <input 
        type="text" value={inputMessageValue} onChange={handleMessageChange}
        />
        <p>{inputMessageValue}</p>
        <button onClick={ () => console.log('hey')} >Submit</button>
        </form>

        </div>
    )
}