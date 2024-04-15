import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const initialNumbers = [];
    for (let index = 2; index < 40; index++) {
      initialNumbers.push(index);
    }
    setNumbers([...numbers, ...initialNumbers]);
  }, []);

  function generateNumber() {
    if (numbers.length === 0) {
      setErrorMessage("No more numbers");
    } else {
      const randNumber = numbers[Math.floor(Math.random() * numbers.length)];
      const newNumbers = numbers.filter((item) => item !== randNumber);
      setCount(randNumber);
      setNumbers(newNumbers);
      console.log(numbers.length);
      console.log(numbers)
    }
  }

  return (
    <>
      <h1 className="text-3xl">RandomNumberGenerator</h1>
      <div className="text-center">
        <button onClick={generateNumber} className="border-2 border-black p-2 rounded-xl">generate number</button>

        <p className="text-7xl font-bold mt-4">{count}</p>
        <p>{errorMessage}</p>
      </div>
    </>
  );
}

export default App;
