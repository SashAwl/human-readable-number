module.exports = function toReadable(number) {
    singleDigits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] // однозначные
    doubleTeenDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'] // если в рязр десятков "1"
    doubleDigit = ['', 'one', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'] // в разр десятков ">1"

    function doubleDigitReadable(doubleNum) {
        if (doubleNum < 10) {
            return singleDigits[doubleNum];
        } else if (doubleNum < 20) {
            return doubleTeenDigits[doubleNum % 10];
        } else {
            return `${doubleDigit[Math.trunc(doubleNum / 10)]} ${singleDigits[doubleNum % 10]}`.trim();
        }
    }

    if (number === 0) return 'zero';
    if (number < 100) return doubleDigitReadable(number);
    if (number < 1000) return `${singleDigits[Math.trunc(number / 100)]} hundred ${doubleDigitReadable(number % 100)}`.trim()
}
