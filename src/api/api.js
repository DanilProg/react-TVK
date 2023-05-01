import axios from "axios";

export const api = axios.create({
    baseURL: `https://back-tvk.vercel.app/`
})

/*
http://localhost:8010/proxy
https://api.vk.com/method/photos.get?album_id=${id}&access_token=${token}&v=${version}&owner_id=-106770370
*/
