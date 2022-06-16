import axios from "axios";

export default axios.create({
    baseURL: "https://nagyrw-bug-tracker.herokuapp.com/",
    headers: {
        "Content-type": "application/json"
    }
})