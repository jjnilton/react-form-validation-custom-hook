import { useState } from "react";

const useInput = (validator) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [userInteracted, setUserInteracted] = useState(false);

  const isValid = validator(enteredValue);
  const hasError = userInteracted && !isValid

  const handleChange = (event) => {
    setUserInteracted(true);
    setEnteredValue(event.target.value);
  };

  const handleBlur = () => {
    setUserInteracted(true);
  }

  const handleReset = () => {
    setEnteredValue("");
    setUserInteracted(false);
  }

  return {
    value: enteredValue,
    valid: isValid,
    error: hasError,
    change: handleChange,
    blur: handleBlur,
    reset: handleReset   
  }
};

export default useInput;
