// Background video + animated toggle layer
const toggleBtn = document.querySelector('button');

const backgroundVideo = document.querySelector('video');

const left = document.querySelector('.left-page-column'),
    right = document.querySelector('.right-page-column')

toggleBtn.addEventListener('click', function () {

    left.classList.add('hide');
    right.classList.add('hide');

    backgroundVideo.play();
});


// Fetch the API data
const memberId = 18;
const apiUrl = 'https://tribe.api.fdnd.nl/v1/member';

fetch(apiUrl)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const boudewijn = data.data.find(student => student.memberId === 18);

        renderApiData(boudewijn);
    })
    .catch(function (error) {
        console.log("Api can't connect");
    });

const renderApiData = (boudewijn) => {
    document.getElementById('first-name').innerHTML = boudewijn.name;
}