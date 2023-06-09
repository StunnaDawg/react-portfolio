import { useState, useEffect, useRef } from 'react';

// This function helps create the contact me "not valid email" section functionaility
// Checks to see if the user has clicked outside of the target 
export default function ClickOutside(initialIsOutisde) {
    const [isClickedOutside, setIsClickedOutside] = useState(initialIsOutisde);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsClickedOutside(true);
        } else {
            setIsClickedOutside(false)
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref, isClickedOutside, setIsClickedOutside};
}