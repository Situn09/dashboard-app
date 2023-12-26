export const calculateWorldArray = (data) => {
    let newWorldData =[["Country", "Popularity"],];
    let countryFreq={};
    for(let obj of data){
        for(let prop in obj ){
            if (prop === "country"){
                if(obj["country"]==="United States of America"){
                    if(Object.hasOwn(countryFreq, "United States")){
                        countryFreq["United States"]++;
                    }else{
                        countryFreq["United States"]=1;
                    }
                }else{
                    if(Object.hasOwn(countryFreq, obj["country"])){
                        countryFreq[obj["country"]]++;
                    }else{
                        countryFreq[obj["country"]]=1;
                    }
                }   
            }
        }
    }

    for(let country in countryFreq){
        newWorldData.push([country,countryFreq[country]]);
    }
    return newWorldData;
}
