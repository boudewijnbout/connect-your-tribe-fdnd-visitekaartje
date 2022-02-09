const toggleBtn = document.querySelector('button');

const backgroundVideo = document.querySelector('video');

const left = document.querySelector('.left'),
      right = document.querySelector('.right')

toggleBtn.addEventListener('click', function() {

    left.classList.add('hide');
    right.classList.add('hide');


    backgroundVideo.play();
});

fetch('https://tribe.api.fdnd.nl/v1/member')
    .then(response => response.json())
    .then(data => console.log(data));