import '../styles/Card-images.scss'

function Images(props) {
    return (
        <div className="images-layout">
            <div id='frontcard'>
                <img src={process.env.PUBLIC_URL + '/images/card-logo.svg'} alt='card logo' />
                <p id='number'>{props.number}</p>
                <p id='name'>{props.name}</p>
                <p id='date'>{props.date}</p>
            </div>

            <div id='backcard'>
                <p id='security-number'>{props.cvc}</p>
            </div>
        </div>
    )
}

Images.defaultProps = {
    "number": "9467 4564 4851 4534",
    "name": "Guilherme Focassio",
    "date": "13/28",
    "cvc": "000"
}

export default Images;