import axios from "axios";


const api =axios.create(
    {
        baseURL : 'http://localhost:8080'
    }
)

export const getMembers = () => api.get("/members")


export const doAttendance = (param) => {
    api.post("/attendances",param);
}