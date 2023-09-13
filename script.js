const url =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "299552ec75msh410f9285a56b747p1efe9ejsnaf79fa9c6763",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function getData() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
 getData()