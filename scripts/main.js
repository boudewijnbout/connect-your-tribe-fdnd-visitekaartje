// Fetch API Data
fetch('https://tribe.api.fdnd.nl/v1/member')
.then(res => res.json())
.then(data => console.log(data));