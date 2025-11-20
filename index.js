const hi = document.getElementById("test")
let check = 0
check.addEventListener("change", function (event) {
    for (let i in hi) {
        if (this.checked) {
            this.checked = false
            
        }
        console.log(this.checked)
    }
})