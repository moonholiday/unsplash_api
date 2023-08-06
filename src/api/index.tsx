import axios from "axios";

export function getImages(query: string) {
  return axios
    .get("https://api.unsplash.com/search/photos", {
      params: {
        query: query,
        client_id: "G7alFg4s_Rx4pY1FFPsje98B40ZYtA0zYQ79zmbQlO8",
      },
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
