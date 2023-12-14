const BaseURLApi = import.meta.env.ADDRESS_URL_API


export const getOptionProvincies = async()=>{
    try {
        const response = await fetch(`${BaseURLApi}/api/provinces.json`, {
           
        })
        const respJson = response.json()
        
        return respJson
    } catch (error) {
        if (error instanceof Error) {
            return error.message;
        }
    }
}

export const getOptionCities = async(id)=>{
    try {
        const response = await fetch(`${BaseURLApi}/api/regencies/${id}.json`, {
            
        })
        const respJson = response.json()
        return respJson
    } catch (error) {
        if (error instanceof Error) {
            return error.message;
        }
    }
}