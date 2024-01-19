import React, { useState } from 'react';

const PalindromeNumberChecker = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(null);

  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
  };

  const checkPalindrome = () => {
    const cleanedNumber = parseInt(inputNumber, 10); // Parse the input as an integer
    const numString = cleanedNumber.toString();
    const reversedString = numString.split('').reverse().join('');
    setIsPalindrome(numString === reversedString);
  };

  return (
    <div>
      <h2>Palindrome Number Checker</h2>
      <label>
        Enter a number:
        <input type="text" value={inputNumber} onChange={handleInputChange} />
      </label>
      <button onClick={checkPalindrome}>Check Palindrome</button>
      {isPalindrome !== null && (
        <p>
          {isPalindrome
            ? `${inputNumber} is a palindrome!`
            : `${inputNumber} is not a palindrome.`}
        </p>
      )}
    </div>
  );
};

export default PalindromeNumberChecker;
