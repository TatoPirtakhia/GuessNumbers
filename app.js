
const generateRandomNumber = () =>{
    return Math.floor(Math.random()*8+1)
}

const whoIsWiner = (target, humanNumber, computerNumber) =>{
    if (Math.abs(target-humanNumber)<=Math.abs(target-computerNumber)) {
        return true;
    }
    return false;
}

let humanScore = 0;
let computerScore = 0;

const updateScore = (winer) =>{
    if (winer === 'human') humanScore+=1;
    else computerScore+=1; 
}
let roundnumber = 1;
const incrise = () =>{
        roundnumber+=1;
}
