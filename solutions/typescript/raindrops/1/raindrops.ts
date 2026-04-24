export function convert(parameter:number) {
  let raindrop = ""
  if(parameter % 3 === 0 && parameter % 5 === 0 && parameter % 7 === 0){
    raindrop  +="PlingPlangPlong"
  }else if(parameter % 5 === 0 && parameter % 7 === 0){
     raindrop  += "PlangPlong"
  }else if(parameter % 3 === 0 && parameter % 7 === 0){
    raindrop  += "PlingPlong"
  } else if(parameter % 3 === 0 && parameter % 5 === 0){
    raindrop  += "PlingPlang"
  }else if(parameter % 7 === 0 ){
    raindrop  += "Plong"
  }else if(parameter % 5 === 0 ){
    raindrop  += "Plang"
  }else if(parameter % 3 === 0 ){
    raindrop  += "Pling"
  }else{
    return parameter.toString()
  }
  return raindrop
}
