export const jsonFullDetail=(data)=>{
    let freq={};
    let sect={};
    for(let obj of data){
        for(let prop in obj ){
            if(prop==="sector"){
                if(Object.hasOwn(sect,obj[prop])){
                    if(Object.hasOwn(sect[obj[prop]],obj['topic'])){
                        sect[obj[prop]][obj['topic']]++
                    }else{
                        sect[obj[prop]][obj['topic']]=1
                    }
                }else{
                    sect[obj[prop]] ={}
                }
                
            }
            if(Object.hasOwn(freq, prop)){
                if(Object.hasOwn(freq[prop],obj[prop])){
                    freq[prop][obj[prop]]++
                }else{
                    freq[prop][obj[prop]]=1;
                }
            }else{
                freq[prop] ={};
                freq[prop][obj[prop]]=1
            }
               
        }
    }
    // console.log(freq);
    // console.log(sect);
    return {freq,sect};
}