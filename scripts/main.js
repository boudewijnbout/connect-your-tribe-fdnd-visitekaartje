const memberId = 18;
const apiUrl = "https://tribe.api.fdnd.nl/v1/member";

// Personal Card
const nameTitle = document.querySelector("h1");
const bio = document.querySelector("article");
const bioText = document.querySelector("article p");
const waveIcon = document.querySelector("article p span");

// Preloader
const preLoaderWrapper = document.querySelector(".preloader-wrapper");

// Fetch API data
fetch(apiUrl)
  .then((res) => {
    if (res.status >= 200 && res.status <= 299) {
      preLoaderWrapper.classList.add("hide");    
      return res.json();
    } else {
      preLoaderWrapper.classList.add("hide");
    }
  })

  // Filter data to specific person
  .then((res) => {
    const boudewijnData = res.data.find((student) => student.memberId === 18);

    // Put data into HTML

    // Title
    nameTitle.textContent = `${boudewijnData.name} ${boudewijnData.surname}`;

    // Bio
    bioText.textContent = boudewijnData.bio;
  })