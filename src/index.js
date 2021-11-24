console.log('%c HI', 'color: firebrick')

let breedArray = []

document.addEventListener("DOMContentLoaded", () => {
    getDogImages();
    getDogBreeds();

    const dropdown = document.getElementById("breed-dropdown");

    dropdown.addEventListener("change", (e) => {
        if (e.target.value === "a") {
            let aList = breedArray.filter(dog => {
                return dog.charAt(0) === "a"
            })
            renderList(aList);
        } else if (e.target.value === "b") {
            let bList = breedArray.filter(dog => {
                return dog.charAt(0) === "b"
            })
            renderList(bList);
        } else if (e.target.value === "c") {
            let cList = breedArray.filter(dog => {
                return dog.charAt(0) === "c"
            })
            renderList(cList);
        } else if (e.target.value === "d") {
            let dList = breedArray.filter(dog => {
                return dog.charAt(0) === "d"
            })
            renderList(dList);
        }
    })
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
            renderList(Object.keys(results.message))
            breedArray = Object.keys(results.message)
        })
}

const breedList = document.getElementsByTagName("li");

function renderList(breeds) {
    const container = document.getElementById("dog-breeds");
    container.innerHTML = ""
    breeds.forEach(dog => {
        const breed = document.createElement("li")
        breed.textContent = dog;
        breed.className = dog.charAt(0)
        breed.addEventListener("click", () => {
            breed.style.color = "red"
        })
        container.appendChild(breed)
    })
}
