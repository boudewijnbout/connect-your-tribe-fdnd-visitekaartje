// Fetch API data
const memberId = 18;
const apiUrl = "https://tribe.api.fdnd.nl/v1/member";

fetch(apiUrl)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const boudewijn = data.data.find((student) => student.memberId === 18);

    renderApiData(boudewijn);
  })
  .catch(function (error) {
    console.log("Api can't connect");
  });

// Render API Data
const renderApiData = (boudewijn) => {
  document.getElementById("name-title").innerHTML = `${boudewijn.name} ${boudewijn.surname}`;
};
