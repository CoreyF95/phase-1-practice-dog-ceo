console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    
fetch(imgUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json)
    })

const config =  {
    method: "POST",
    headers: {'Content-Type': 'application/json',
        Accept: "application/json",
    },
    body: JSON.stringify({
        imgUrl
    })
}

console.log(fetch("file:///Users/corey/Development/Code/1Module/phase-1-practice-dog-ceo/index.html", config)
)