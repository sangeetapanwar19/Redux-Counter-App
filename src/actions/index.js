export const incNumber = (num) =>{
    return {
        type: "INCREMENT",
        payload: num
    }
}
 
export const decNumber = (denum) =>{
    return {
        type: "DECREMENT",
        payload: denum
    }
}
 