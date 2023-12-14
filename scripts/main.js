import champions from "./champion.js";
import DalleApi from "./dalle-api.js";

const champSelector = document.querySelector(".champ-tiles__container");
let numCheckedBox = 0;

const dalleApi = new DalleApi();

const mergeChamp = async (champ1, champ2, champ1Desc, champ2Desc) =>{
  
  const mergedChamp = await dalleApi.createImage(champ1, champ2, champ1Desc, champ2Desc);
}

mergeChamp("Ahri","Aatrox", "nine-tailed fox", "The Dark Blade");

for (const champ in champions) {
  const champion = champions[champ];
  const champId = champion.id;

  const champPic = document.createElement("label");
  const champCheckBox = document.createElement("input");
  // champPic.for = champId;
  champPic.classList.add("champ-tiles__pic");
  champCheckBox.type = "checkbox";
  champCheckBox.name = "checkbox";
  champCheckBox.classList.add("champ-tiles__checkbox");
  champCheckBox.id = champId;
  champCheckBox.value = champId;

  champPic.appendChild(champCheckBox);

  champPic.style.backgroundImage = `url(../assets/tiles/${champId}.jpg)`;
  champSelector.appendChild(champPic);
  champPic.addEventListener("click", (e) => {
    // console.log(e.target.id);
    e.preventDefault();
    if (!champCheckBox.checked && numCheckedBox <= 2) {
      champCheckBox.setAttribute("checked", "");
      numCheckedBox++;
      // console.log("checked!");
    } else {
      champCheckBox.removeAttribute("checked");
      numCheckedBox--;
      // console.log("unchecked!");
    }
  });
}

// Object.entries(champions).forEach(([key, value]) => {
//         console.log('${value}');
// });

const keys = Object.keys(champions);
// console.log(keys); // array of champion names

keys.forEach((key, i) => {
  if (key == "id") {
    // console.log("${key}:${champions[key]}");
  }
});

async function submitHandler(e) {
  e.preventDefault();
  const response = await dalleApi.createImage({
    model: "dall-e-3",
    prompt: "a white siamese cat",
    n: 1,
    size: "1024x1024",
  });
  image_url = response.data.data[0].url;
  // console.log("Form submitted");
}

const form = document.getElementById("champForm");
form.addEventListener("submit", submitHandler);

//card container with img dropdown menu with list.
//clicking on list will have the event handler return the id(chamption name) as parameter
//the id will have the src of the img become `./assets/${chamption_name}.jpg` and set the innertext of heroTitle as the relevant champion name.
//once both parameters are set and the the form is submitted through a button,
// (prompt example : `${heroName_1} from league of legends combined with ${heroName_2} from league of legends, as one being with a relevant background.`)
//the prompt will be sent to dalle (async-await call)
//returning an arraylist of image objects (not promise obj), which has an url property, which will be stored in const imgURL
//set the src of the img element as the url value.
