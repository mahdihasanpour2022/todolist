export const shorten_seentenses =(text , number)=>{
    return `${text.split(" ").slice(0,number).join(" ")} ...`
  }