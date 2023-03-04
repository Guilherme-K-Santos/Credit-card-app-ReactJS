
// return true if form all boxes are filled
export const filledFormValidation = (name, number, datemonth, dateyear, cvc) => {
    if (name && number && datemonth && dateyear && cvc) {
        return true
    } else {
        alert('Fill Every Box, Please! <3')
        return false
    }
}

// return true if cardnumber box are rightly filled
export const cardNumberFilledCorrectly = (number) => {
    const regex = /^(\d{4}\s){3}\d{4}$/; // Regular expression to validate the card number
  
    if (regex.test(number)) {

      return true;

    } else {

      alert('Please, fill with your right card number.');
      return false;

    }
}

// return true if data boxes are rightly filled
export const dateFilledCorrectly = (datemonth, dateyear) => {

    // here i'm taking the real date and converting to string to use slice, after it i'm making a transform into integrer again
    const now = new Date();
    const currentYear = `${now.getFullYear()}`;

    if ((1 <= datemonth && datemonth <= 12) && (parseInt(currentYear.slice(-2)) <= dateyear && dateyear <= 30)) {
        return true
    } else {
        alert('Please, fill with a correct data.')
        return false
    }
}

export const cvcFilledCorrectly = (cvc) => {
    const regex = /^\d{3}$/

    if(regex.test(cvc)) {
        return true
    } else {
        alert('Please, fill with a correct cvc.')
        return false
    }
}
