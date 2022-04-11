import axios from "axios"
console.log("Hello");

axios.get("api.openweathermap.org/data/2.5/weather?q={navsari}&appid={5a178202403a4fa39a4d194a27e08d9a}")
    .then(res => {
    console.log(res.data);
    })
    .catch(err => {
    console.log(err);
})