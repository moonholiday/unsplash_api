import axios from "axios";

function getImages() {
  return axios
    .get(
      "https://api.unsplash.com/search/photos?query=dog&client_id=G7alFg4s_Rx4pY1FFPsje98B40ZYtA0zYQ79zmbQlO8"
    )
    .then((res) => res.data);
}
