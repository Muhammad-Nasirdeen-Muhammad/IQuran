const Logo = document.querySelector(".Logo")
const reciterSelect = document.querySelector(".reciter-select")
const buttonsNodeList = document.querySelectorAll("#reciter")

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        Logo.classList.add("hide")
        reciterSelect.classList.remove("hide")
    }, 4000)
    buttonsArray = Array.from(buttonsNodeList)

    buttonsArray.forEach((el) => {
        el.addEventListener("click", () => {
            if(el.textContent == "Al-Mishawy"){
                console.log("Al-Mishawy Audio")
            }
            else{
                console.log("Al-Sudais Audio")
            }
        })
    })
})

