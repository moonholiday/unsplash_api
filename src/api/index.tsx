import axios from "axios";

const client_id = "G7alFg4s_Rx4pY1FFPsje98B40ZYtA0zYQ79zmbQlO8";
// const client_id = "os6OI_mnQuUVi9v1mLdtPHZw0AZERetWpG3p2IT8ZWs";
axios.defaults.baseURL = "https://api.unsplash.com";

export async function getImages(query: any) {
  return axios({
    url: "/search/photos",
    params: { ...query, client_id },
  }).then((res) => res?.data);
}
