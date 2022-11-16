import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons'

const CalculatorApp = () => {

    //declaring state
    const [number, setNumber] = useState('')
    const [result, setResult] = useState('')

    //handle click
    const handleClick = (e) => {
        setNumber(number.concat(e.target.value))
    }

    // handle clear
    const handleClear = () => {
        setNumber('')
    }

    const handleClears = () => {
        setResult('')
    }


    // handle del
    const handleSlice = () => {
        setNumber(number.slice(0, -1))
    }

    const handleSlices = () => {
        setResult('')
    }

    //handle answer 
    const handleAnswer = () => {
        try {
            setResult(eval(number).toString())
        } catch (error) {
            setNumber('Syntax Error')
        }
    }
    return (
        <React.Fragment>
           <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'></link> 
            <body class="bg-black">
                <div class="flex justify-center overflow-hidden">
                    <div class="text-right text-white pt-12 overflow-hidden md:w-2/5 ts:w-full sm:w-1/2 lg:w-1/5">
                        <input type="text" id='number' placeholder='0' value={number}
                        className="ts:pr-2 w-full text-right text-2xl text-white bg-black"/>
                        <input type="text" placeholder='0' value={result}
                        className='ts:pr-2 w-full text-right text-white text-1xl mb-24 bg-black'>
                        </input>
                        <div class="calculator-grid grid grid-cols-4 gap-4 text-1xl mb-12 font-sofia bg-neutral-900 rounded-lg py-8 px-4 overflow-hidden">
                            <button value='mc' onClick={handleClick} class="rounded-full py-4 bg-neutral-800 text-neutral-400  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl">MC</button>
                            <button value='m+' onClick={handleClick} class="rounded-full py-4 bg-neutral-800 text-neutral-400 outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl">M+</button>
                            <button value='m-' onClick={handleClick} class="rounded-full py-4 bg-neutral-800 text-neutral-400 outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl">M-</button>
                            <button value='mr' onClick={handleClick} class="rounded-full py-4 bg-neutral-800 text-neutral-400 outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl">MR</button>
                            <button onClick={() => {handleClear();handleClears();}} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl text-blue-700">C</button>
                            <button value='÷' onClick={handleClick} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl text-blue-700 text-2xl">÷</button>
                            <button value='*' onClick={handleClick} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl text-blue-700">X</button>
                            <button onClick={() => {handleSlice();handleSlices();}} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl text-blue-700"><FontAwesomeIcon icon={faArrowAltCircleLeft}/></button>
                            <button value='7' onClick={handleClick} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl">7</button>
                            <button value='8' onClick={handleClick} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl">8</button>
                            <button value='9' onClick={handleClick} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl">9</button>
                            <button value='-' onClick={handleClick} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl text-blue-700">-</button>
                            <button value='4' onClick={handleClick} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl">4</button>
                            <button value='5' onClick={handleClick} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl">5</button>
                            <button value='6' onClick={handleClick} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl">6</button>
                            <button value='+' onClick={handleClick} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl text-blue-700">+</button>
                            <button value='1' onClick={handleClick} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl">1</button>
                            <button value='2' onClick={handleClick} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl">2</button>
                            <button value='3' onClick={handleClick} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl">3</button>
                            <button onClick={handleAnswer} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl row-span-2 bg-blue-700">=</button>
                            <button value='%' onClick={handleClick} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl">%</button>
                            <button value='0' onClick={handleClick} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl">0</button>
                            <button value='.' onClick={handleClick} class="rounded-full py-4 bg-neutral-800  outline outline-1 outline-neutral-700 shadow-md shadow-black drop-shadow-2xl">.</button>
                        </div>
                    </div>
                </div>

            </body>

        </React.Fragment>
)
}

export default CalculatorApp