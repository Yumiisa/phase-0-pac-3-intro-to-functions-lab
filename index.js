function shout(string){
   return string.toUpperCase()
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase())
}
function logWhisper(string){
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(string){
    let message="I can't hear you!";
    let listening="YES INDEED!"
    let dinner="I would love to!"
    if(string.toLowerCase(string)===string){
        return message
    }
    else if(string.toUpperCase(string)===string){
    return listening
    }
    else if("Let's have dinner together!"===string){
    return dinner
    }
}
console.log(sayHiToHeadphonedRoommate(string.toLowerCase))