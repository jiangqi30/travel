let defaultCity = '北京';
try{
    if (localStorage.city){
        defaultCity = localStorage.city;
    }
} catch(e){
    // empty
}

export default {
    city: defaultCity
}