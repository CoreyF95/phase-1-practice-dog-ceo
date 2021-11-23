console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    getDogImages();
    getDogBreeds();
    filter();
})

function getDogImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(results => {
            results.message.forEach(image => addImage(image));
        })
}

function addImage(image) {
    const container = document.getElementById("dog-image-container");
    const imageElement = document.createElement("img");
    imageElement.src = image;
    container.appendChild(imageElement);
}

function getDogBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(results => {
            const breeds = results.message;
            const container = document.getElementById("dog-breeds");
            for (const prop in breeds) {
                const breed = document.createElement("li")
                breed.textContent = (`${prop}` + ` ${breeds[prop]}`);
                breed.class = breed.textContent.charAt(0)
                container.appendChild(breed)
                breed.addEventListener("click", () => {
                    breed.style.color = "red"
                })
            };
    })
}

const breedList = document.getElementsByTagName("li");



function filter() {
    const dropdown = document.getElementById("breed-dropdown");
    dropdown.addEventListener("select",() => {
        if (dropdown.value === "a") {
            aBreeds = document.getElementsByClassName("a")
            document.getElementById("dog-breeds").removeChild(document.getElementsByTagName("li"));
            document.getElementById("dog-breeds").appendChild(aBreeds)
        }
    })
}




