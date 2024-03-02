import React, { useState } from 'react';
import './index.css';
import 'remixicon/fonts/remixicon.css'

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  function handleOpenClose() {
    setIsOpen((is) => !is);
  }

  return (
    <div>
      <button className='close' onClick={handleOpenClose}>{isOpen === true ? <i class="ri-book-fill"></i> : <i class="ri-book-open-fill"></i>}</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p class="message">Step {step}: {messages[step - 1]}</p>

          <div class="buttons">
            <button style={{ backgroundColor: "#7950f2", color: "#fff" }} class="previous" onClick={handlePrevious}>Previous</button>
            <button style={{ backgroundColor: "#7950f2", color: "#fff" }} class="previous" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;