submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    // console.log("Clicked!")
    resultCont.innerHTML = `<img src="./loading.gif" alt="" srcset="">`
    let key = "Enter Your Key"
    let email = document.getElementById("userEmail").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    if (result.state === 'deliverable' && result.smtp_check === true) {
        str = `<div class="result">Status- OK <br> It is Valid Email</div>`
    }
    else {
        str = `<div class="noResult">Status- Not Found <br> It is Not a Valid Email</div>`
    }

    // console.log(str)
    userEmail.value = ""
    resultCont.innerHTML = str
})

// state:
// smtp_check:
// deliverable