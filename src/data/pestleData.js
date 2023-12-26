import { jsonFullDetail } from "../data/jsonFullDetail";
import { getData } from "../store/json";

const json = await getData()

export const pestleData = ()=>{
    const data = jsonFullDetail(json);
    const seriesData =[]
    const nameData =[]
    
    for(let pestleItem in data.freq.pestle){
        const PIFreq =data.freq.pestle[pestleItem] ==="" ? "Undefine": data.freq.pestle[pestleItem]
        const PIItem = pestleItem ===""? "Udefine": pestleItem
        seriesData.push(PIFreq)
        nameData.push(PIItem)
    }
    // console.log(pestleItemArr);
    return {seriesData,nameData};
}