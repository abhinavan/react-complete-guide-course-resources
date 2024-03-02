import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    duration: 10,
    expectedReturn: 6,
  });
  const isValidData = userInput.duration > 0;
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {isValidData && <Results userInput={userInput} />}
      {!isValidData && (
        <p className="center">Please enter a positive duration in years</p>
      )}
    </>
  );
}

export default App;
