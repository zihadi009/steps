import React from 'react';
import './index.css'

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

const App = () => {
  let step = 3;
  function handlePrevious() {
    alert("Previous")
  }

  function handleNext() {
    alert("Next");
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
      </div>

      <p class="message">Step {step}: {messages[step - 1]}</p>

      <div class="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }} class="previous" onClick={handlePrevious}>Previous</button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }} class="previous" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default App;