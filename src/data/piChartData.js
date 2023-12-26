import { jsonFullDetail } from "../data/jsonFullDetail";
import { getData } from "../store/json";

const json = await getData()

export const pieChartData = ()=>{
    const data = jsonFullDetail(json);
    const piData =[]
    
    for(let sectors in data.freq.sector){
        piData.push({id:Math.floor(Math.random() * 1000000), value:data.freq.sector[sectors],label:`${sectors}`})
    }
    return piData;
}

