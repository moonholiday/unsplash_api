import axios from "axios";

const client_id = "G7alFg4s_Rx4pY1FFPsje98B40ZYtA0zYQ79zmbQlO8";

export async function getImages(query: string) {
  return axios({
    url: "https://api.unsplash.com/search/photos",
    params: { query, client_id },
  }).then((res) => res?.data);
}
