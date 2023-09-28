// Sum of two numbers and disabled button

import { useState } from 'react';
import './styles.css';

const SumOfTwoNumbers = () => {
  const [firstInput, setFirstInput] = useState<number>(0);
  const [secondInput, setSecondInput] = useState<number>(0);
  const [total, setTotal] = useState<number>();

  const handleAddNumbers = () => {
    if (firstInput && secondInput) {
      setTotal(firstInput + secondInput)
    }
  };

  return (
    <div className='two-numbers-content'>
      <input
        className='numbers-input'
        type='number'
        value={firstInput}
        onChange={(event) => setFirstInput(+event.target.value)}
      />

      <input
        className='numbers-input'
        type='number'
        value={secondInput}
        onChange={(event) => setSecondInput(+event.target.value)}
      />

      <button
        className='numbers-btn'
        disabled={(!firstInput || !secondInput)}
        onClick={handleAddNumbers}
      >
        Add two numbers
      </button>

      <p>Total: {total && total > 0 ? total : ''}</p>
    </div>
  );
};

export default SumOfTwoNumbers;