const hi = document.getElementsByName("test")
let check = 0
const capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?"]
const passwordList = []

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
            console.log("no")
        }
        console.log(this.checked)


    })

}