import axios from "axios";

const client_id = import.meta.env.VITE_ACCESS_KEY;
axios.defaults.baseURL = "https://api.unsplash.com";

export async function getImages(query: any) {
  return axios({
    url: "/search/photos",
    params: { ...query, client_id },
  }).then((res) => res?.data);
}
