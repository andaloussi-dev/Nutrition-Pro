import axios from 'axios';

const url = 'https://api.calorieninjas.com/v1/nutrition?query=';

export const fetchData = async (query) =>{
    let newUrl=url;

    if(query){
        newUrl=`${url+query}`
    }

    try{
        const {data:{items}} = await axios.get(newUrl,{
            headers: {
                "X-Api-Key":'wwTYuPFjCPNJeJdj7JfWBA==JccQFmnxN7PdqIQG'
              }
        });
        return items;
    }catch (error){
        return error;
    }

}
