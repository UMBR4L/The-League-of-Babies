const apiKey = "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";
const header = {
    "Authorization": `Bearer ${apiKey}`,
    "content-type": "application/json",
  };

export default class DalleApi {
  constructor() {
    this.baseUrl = "https://api.openai.com/v1/images/generations";
  }

  async createImage(champ1, champ2, champ1Desc, champ2Desc) {
    const prompt = {
      model: "dall-e-2",
      prompt: `Combine ${champ1}, ${champ1Desc} from league of legends combined with ${champ2}, ${champ2Desc} from league of legends, as one being with a relevant background.`,
    };
   try {const resultUrl = await axios
        .post(this.baseUrl, prompt, { headers: header })
        console.log(resultUrl.data.data[0].url)
        return resultUrl.data.data[0].url;
    
   } catch (error) {
    
   }
}}
