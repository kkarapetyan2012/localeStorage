const selected = document.getElementById('selected');
const resultImg = document.getElementById('resultImg');
const url = 'https://dog.ceo/api/breed/';
const endpoint = '/images/random';

selected.addEventListener('click', () => {
    fetch (
        `${url}${selected.value}${endpoint}`
    )
    .then(data => data.json())
    .then(data => {
        resultImg.src = data.message;
    })
})

showImages.addEventListener('click', () => {
    fetch (
        `${url}${selected.value}${endpoint}`
    )
    .then(data => data.json())
    .then(data => {
        resultImg.src = data.message;
    })
})