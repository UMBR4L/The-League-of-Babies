const header = {
  "Content-Type": "application/json",
  "Authorization": "Bearer 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",
};

export default class DalleApi {
  constructor() {
    this.header = header;
    this.apikey = header.Authorization;
    this.baseUrl = "https://api.openai.com/v1/images/generations";
  }

  async createImage(champ1, champ2, champ1Desc, champ2Desc) {
    const prompt = {
      prompt: `${champ1}, ${champ1Desc} from league of legends combined with ${champ2}, ${champ2Desc} from league of legends, as one being with a relevant background.`
    };
    try {
      const createdObject = await axios.post(this.baseUrl, prompt, {header});
      console.log(createdObject);
      return createdObject.data[0].url;
    } catch (error) {
      console.error(error);
    }
  }
}
