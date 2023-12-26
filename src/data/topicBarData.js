import { jsonFullDetail } from "../data/jsonFullDetail";
import { getData } from "../store/json";

const json = await getData()

export const topicBar = (topic)=>{
    const data = jsonFullDetail(json);
    const topicData =[]
    let chooseTopic = data.sect[topic];
    
    for(let topic in chooseTopic){
        topicData.push({value:chooseTopic[topic],name:`${topic}`})
    }
    return topicData;
}