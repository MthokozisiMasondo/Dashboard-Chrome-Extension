// Getting the background image for the page from the unsplash API
fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
.then(response => response.json())
.then(data => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    document.getElementById('photographer').textContent = `by: ${data.user.name}`
})

// Getting dogecoin information from the coingecko API
fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
.then(response => {
    if (!response.ok) {
        throw Error("Something went wrong")
    }
    return response.json()
})
    .then(data => {
        // Displaying the dogecoin logo and name
        document.getElementById("crypto-top").innerHTML = `
        <img src= ${data.image.small}>
        <span>${data.name}</span>
        `
        // Displaying dogecoin prices
        document.getElementById("crypto").innerHTML += `
        <p>🎯: R${data.market_data.current_price.zar}</p>
        <p>⬆️: R${data.market_data.high_24h.zar}</p>
        <p>⬇️ R${data.market_data.low_24h.zar}</p>
        `
})
.catch(err => console.log(err))