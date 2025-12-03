const hi = document.getElementsByName("password")
let check = 0
const capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?"]
const passwordList = []
let passwordFilter = []
let index = []
let password = ""
let passwordLength = 0
const updatePassword = document.getElementById("password")
for (const i of hi) {
    i.addEventListener("change", function () {

        if (this.checked) {
            if (this.value == "1") {
                passwordList.push(capLetters)
                console.log(passwordList)
            }
            
            else if (this.value == "2") {
                passwordList.push(lowLetters)
                console.log(passwordList)
            }

            else if (this.value == "3") {
                passwordList.push(numbers)
                console.log(numbers)
            }

            else {
                passwordList.push(symbols)
                console.log(passwordList)
            }

        } else {
            if (this.value == "1") {
                passwordFilter = passwordList.indexOf(capLetters)
                passwordList.splice(passwordFilter, 1)
                console.log(passwordFilter)
                console.log(passwordList)
            }
            
            else if (this.value == "2") {
                passwordFilter = passwordList.indexOf(lowLetters)
                passwordList.splice(passwordFilter, 1)
                console.log(passwordFilter)
                console.log(passwordList)
            }

            else if (this.value == "3") {
                passwordFilter = passwordList.indexOf(numbers)
                passwordList.splice(passwordFilter, 1)
                console.log(passwordFilter)
                console.log(passwordList)
            }

            else {
                passwordFilter = passwordList.indexOf(symbols)
                passwordList.splice(passwordFilter, 1)
                console.log(passwordFilter)
                console.log(passwordList)
            }
        }
        console.log(this.checked)


    })

}

function setLength () {
    const charValue = document.getElementById("length")
    passwordLength = charValue.value
    createPassword(passwordLength)
    console.log(password)
}

function createPassword(length) {
    password = ""
    for(let i = 0; i < length; i++) {
        index = passwordList[Math.floor(Math.random() * passwordList.length)]
        password += index[Math.floor(Math.random() * index.length)]
    }
    console.log(password)
    updatePassword.textContent = password
}