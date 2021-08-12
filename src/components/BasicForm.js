import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    valid: firstNameValid,
    error: firstNameError,
    change: handleFirstNameChange,
    blur: handleFirstNameBlur,
    reset: resetFirstName,
  } = useInput((value) => value.trim().length > 0);

  const {
    value: secondName,
    valid: secondNameValid,
    error: secondNameError,
    change: handleSecondNameChange,
    blur: handleSecondNameBlur,
    reset: resetSecondName,
  } = useInput((value) => value.trim().length > 0);

  const {
    value: emailAddress,
    valid: emailValid,
    error: emailError,
    change: handleEmailChange,
    blur: handleEmailBlur,
    reset: resetEmail,
  } = useInput((value) => value.trim().length > 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    resetFirstName();
    resetSecondName();
    resetEmail();
    console.log("submitted")
  };

  const formValid = firstNameValid && secondNameValid && emailValid;

  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="first-name">First Name</label>
          <input
            className={firstNameError && "invalid"}
            type="text"
            id="first-name"
            onChange={handleFirstNameChange}
            onBlur={handleFirstNameBlur}
            value={firstName}
          />
          {firstNameError && <div className="error-text">Invalid input.</div>}
        </div>
        <div className="form-control">
          <label htmlFor="second-name">Last Name</label>
          <input
            type="text"
            id="second-name"
            className={secondNameError && "invalid"}
            type="text"
            id="second-name"
            onChange={handleSecondNameChange}
            onBlur={handleSecondNameBlur}
            value={secondName}
          />
          {secondNameError && <div className="error-text">Invalid input.</div>}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input
          className={emailError && "invalid"}
          type="text"
          id="email"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailAddress}
        />
        {emailError && <div className="error-text">Invalid input.</div>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
