import { useState } from "react";


export function useCreateDate() {
    const [date,setDate] = useState("");
    var now = new Date();
    var year = now.getFullYear();
    var month = ('0' + (now.getMonth() + 1)).slice(-2); // Adding leading zero if needed
    var day = ('0' + now.getDate()).slice(-2); // Adding leading zero if needed
    var hours = ('0' + now.getHours()).slice(-2); // Adding leading zero if needed
    var minutes = ('0' + now.getMinutes()).slice(-2); // Adding leading zero if needed
    var seconds = ('0' + now.getSeconds()).slice(-2); // Adding leading zero if needed
    var myDate =  year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    setDate(myDate)


    return date;
}

