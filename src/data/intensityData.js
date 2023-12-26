import { jsonFullDetail } from "../data/jsonFullDetail";
import { getData } from "../store/json";

const json = await getData()

export const intensityData = ()=>{
    const data = jsonFullDetail(json);
    const seriesData =[]
    const nameData =[]
    
    for(let intensityLevel in data.freq.intensity){
        const intensityFreq =data.freq.intensity[intensityLevel] ==="" ? 99: data.freq.intensity[intensityLevel]
        const intens = parseInt(intensityLevel ===""? "99": intensityLevel)
        seriesData.push(intensityFreq)
        nameData.push(intens)
    }
    return {seriesData,nameData};
}