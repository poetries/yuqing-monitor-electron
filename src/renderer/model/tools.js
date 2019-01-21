var app={

    config:{
        apiUrl:"http://www.apiying.com/yuqing/"
    },
    storage:{

        set(key,value){

            localStorage.setItem(key,JSON.stringify(value));
        },
        get(key){

            var result=localStorage.getItem(key);

            if(result){

                return JSON.parse(result);
            }else{
                return '';
            }
        },
        remove(key){
            localStorage.removeItem(key)
        }
    }
}

export default app;