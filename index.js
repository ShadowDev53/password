const input = document.getElementsByName("password")
const notice = document.getElementById("notice")
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

// Build Passwordlist from input
for (const i of input) {
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

        }
        else {
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

// Set password length
function setLength() {
    const charValue = document.getElementById("length")
    passwordLength = charValue.value
    createPassword(passwordLength)
    console.log(password)
}

//create password from elements in passwordList
function createPassword(length) {
    if (passwordList.length == 0) {
        notice.textContent = ("Please select if you want capital letters, lowercase letters,"
            + "numbers, and symbols, then click generate password again.")
    }
    else
        if (length < 12 && check == 0) {
            notice.textContent = ("A strong password is reccomended to have at least 12 characters."
                + "Are you sure you want to proceed? (Click generate password again if yes)")
            check += 1
        }
        else {
            password = ""
            for (let i = 0; i < length; i++) {
                index = passwordList[Math.floor(Math.random() * passwordList.length)]
                password += index[Math.floor(Math.random() * index.length)]
            }
            console.log(password)
            updatePassword.textContent = password
            notice.textContent = ("")
        }
} 