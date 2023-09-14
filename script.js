const url =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCa-Q0JeeX_38r7qkdSpElWw&part=snippet%2Cid&order=viewcount&maxResults=4";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "299552ec75msh410f9285a56b747p1efe9ejsnaf79fa9c6763",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
const content = null || document.getElementById("content");

async function getData(urlapi) {
  const response = await fetch(urlapi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await getData(url);
    console.log(videos);

    let template = `
     ${videos.items
       .map(
         (video) =>
           `
     <div class="group relative">
     <div
       class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
       <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
     </div>
     <div class="mt-4 flex justify-between">
       <h3 class="text-sm text-gray-300">
         <span aria-hidden="true" class="absolute inset-0"></span>
         ${video.snippet.title}
       </h3>
     </div>
   </div>
     `
       )
       .slice(0, 50  )
       .join("")}
`;
    console.log(content);
    content.innerHTML = template;
  } catch (err) {
    console.log(err);
  }
})();
