import React, { useState } from "react";
const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initalInvestment: 1000,
    annualInvestment: 100,
    duration: 6,
    expectedReturn: 12,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(event) =>
              handleChange("initalInvestment", event.target.value)
            }
            value={userInput.initalInvestment}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(event) => handleChange("duration", event.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
};
export default UserInput;
