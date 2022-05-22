const CAT_URL = "https://thatcopy.pw/catapi/rest/";

const getCats = async () => {
  let data = await fetch(CAT_URL)
    .then((res) => res.json())
    .catch((e) => console.log(`Error: ${e}`));

  return data.webpurl;
};

const btn = document.querySelector(".btn-change");

const loadImg = async () => {
  let img = document.querySelector("img");
  img.src = await getCats();
};

btn.addEventListener("click", loadImg);
loadImg();
