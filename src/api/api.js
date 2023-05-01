import axios from "axios";

export const api = axios.create({
    baseURL: `http://localhost:3001/`
})

/*
http://localhost:8010/proxy
https://api.vk.com/method/photos.get?album_id=${id}&access_token=${token}&v=${version}&owner_id=-106770370
*/
