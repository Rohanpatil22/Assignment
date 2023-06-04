let counter=0;
function getData()
{
    console.log("Fetching Data",counter++);
}

let Debounce=function(func,d){
    let timer;
    return function(){
        let context=this;
        args=arguments;
    clearTimeout(timer);

       timer=setTimeout(()=>{
            getData.apply(context,arguments);
        },d);
    }
}



let Demo= Debounce(getData,500);