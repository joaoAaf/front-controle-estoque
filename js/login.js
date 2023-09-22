
const loginUrl = "https://parseapi.back4app.com/parse/login"
const loginForm = document.getElementById("register")

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault()
    const login = document.getElementById("inputUserName")
    console.log(login.value)
    const password = document.getElementById("inputPassword")
    console.log(password.value)

    const data = {
            "username": login.value,
            "password": password.value
    }
    
    const headers = {
        headers: {
            "X-Parse-Application-Id": "Fu6z18WOdbbOdQbRUKqZrXfNUfoSHzJak7uat4RE",
            "X-Parse-REST-API-Key": "1DKQFZevoYx4A2I02G13BRIO5U1C8vnWjWrUyflb",
            "X-Parse-Revocable-Session": "1",
            "Content-Type": "application/json"
        }
    }

    await axios.post(loginUrl, data, headers)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
            console.log(data)
        })

})