import { useState } from 'react'
import './App.css'

function App() {
  const numbers = ['9', '8', '7', '4', '5', '6', '1', '2', '3', '0']
  const actions = ['+', '-', '*', '/', 'C', '=']
  const [operator, setOperator] = useState('')
  const [value1, setValue1] = useState('0')
  const [value2, setValue2] = useState('')
  const [finish, setFinish] = useState(false)

  let display = value1 + operator + value2
  let result = 0

  function sum() {
    if (display.includes('+')) {
      return (result = Number(value1) + Number(value2))
    } else if (display.includes('-')) {
      return (result = Number(value1) - Number(value2))
    } else if (display.includes('*')) {
      return (result = Number(value1) * Number(value2))
    } else if (display.includes('/')) {
      return (result = Number(value1) / Number(value2))
    }
  }

  const handleClick = (value) => {
    if (value1 === '0') {
      setValue1(value)
    } else if (operator) {
      setValue2((prev) => prev + value)
    } else {
      setValue1((prev) => prev + value)
    }
  }

  const handleOp = (op) => {
    switch (op) {
      case 'C':
        setValue1('0')
        setValue2('')
        setOperator('')
        setFinish(false)
        break
      case '=':
        setFinish(true)
        sum()
        setValue1(result)
        setValue2('')
        setOperator('')
        break
      default:
        setOperator(op)
        setFinish(false)
    }
  }

  if (finish) {
    const inputCalc = document.querySelector('.inputCalc')
    inputCalc.classList.add('red')
  }

  return (
    <div className="calcBlock">
      <div className={finish ? 'inputCalc red' : 'inputCalc black'}>
        {display}
      </div>
      <div className="buttonBlock">
        <div className="numberBlock">
          {numbers.map((item) => (
            <div
              onClick={() => handleClick(item)}
              key={item}
              className="number"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="operBlock">
          {actions.map((item) => (
            <div
              onClick={() => handleOp(item)}
              key={item}
              className="operButton"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
