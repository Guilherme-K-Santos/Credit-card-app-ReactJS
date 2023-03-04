import '../styles/CompletedForm.scss'

function CompletedForm() {
    function handleClicker() {
        alert('Thank you for test my application! <3')
    }
    return (
        <div className="completed-form">
            <img src={process.env.PUBLIC_URL + '/images/icon-complete.svg'} alt="check completed" />
            <h1>THANK YOU!</h1>
            <p>We've added your card details</p>

            <button type='submit' onClick={handleClicker}>Confirm</button>
        </div>
    )
}

export default CompletedForm;