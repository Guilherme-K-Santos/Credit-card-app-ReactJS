import React, { useState } from 'react'
import '../styles/Form.scss'
import CompletedForm from './CompletedForm'
import { filledFormValidation, cardNumberFilledCorrectly, dateFilledCorrectly, cvcFilledCorrectly }  from './validateFormBoxes/Validate'

function Form({ onFormSubmit }) {
    // hooks
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [datemonth, setDateMonth] = useState('')
    const [dateyear, setDateYear] = useState('')
    const [cvc, setCvc] = useState('')

    // hook to change the form component to 'thank you'
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(event) {
        event.preventDefault();

        // if everything is fine, submit.
        if (filledFormValidation(name, number, datemonth, dateyear, cvc) && cardNumberFilledCorrectly(number) && dateFilledCorrectly(datemonth, dateyear) && cvcFilledCorrectly(cvc)) {
            setSubmitted(true);

            const formData = {
                holdername: name,
                cardnumber: number,
                date: `${datemonth}/${dateyear}`,
                cvc: cvc
            }

            // sends to app.js the formData (to update Images)
            onFormSubmit(formData)
        }
    }

    // if everything goes ok, change the form to an cute message
    if (submitted) {
        return <CompletedForm />;
    }

    return (
        <div className="formulary">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
                    <input 
                        type="text" 
                        id="cardholder-name" 
                        name="name" 
                        placeholder='e.g. Jane Appleseed' 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="card-number">CARD NUMBER</label>
                    <input 
                        type="text" 
                        id="card-number" 
                        name="number" 
                        placeholder='e.g. 1234 5678 9123 0000' 
                        value={number} 
                        onChange={e => setNumber(e.target.value)}
                    />
                </div>

                <div className='same-line'>
                    <div id='dates'>
                        <label htmlFor="date">EXP. DATE (MM/YY)</label>
                        <input 
                            type="number" 
                            id="date" 
                            name="date-month" 
                            placeholder='MM' 
                            value={datemonth} 
                            onChange={e => setDateMonth(e.target.value)}
                        />
                        <input 
                            type="number" 
                            name="date-year" 
                            placeholder='YY' 
                            value={dateyear} 
                            onChange={e => setDateYear(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="cvc">C V C</label>
                        <input 
                            type="number" 
                            id="cvc" 
                            name="cvc" 
                            placeholder='e.g. 123' 
                            value={cvc} 
                            onChange={e => setCvc(e.target.value)}
                        />
                    </div>
                </div>

                <button type='submit'>Confirm</button>
            </form>
        </div>
    )
}

export default Form;
