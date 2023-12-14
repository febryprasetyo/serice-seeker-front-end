/* eslint-disable no-unused-vars */
import axios from "axios";
const BaseURLApi = import.meta.env.VITE_URL_API


export const searchCategory = async async => {
    try {
        const resp = await fetch(`${BaseURLApi}/data/user/list`, {
            method: "get",
            body: JSON.stringify(),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZlYl9icnkiLCJyb2xlIjoiam9iX3NlZWtlciIsImxvY2F0aW9uIjp7InR5cGUiOiJQb2ludCIsImNvb3JkaW5hdGVzIjpbMTA2Ljk4MzA4NjUsLTYuMjczMzc1Nzk5OTk5OTk5XX0sImlhdCI6MTcwMjU2OTU2MiwiZXhwIjoxNzAyNjU1OTYyfQ.F5TsuBV-hlPeUA3DhwX4s6YZKysyUpVLxChfbNOTiZ4"
            }
        })
        const respJson = await resp.json()
        return respJson
        
    } catch (error) {
          console.log(error);

  
    }
    
}