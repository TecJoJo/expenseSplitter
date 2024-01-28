const LiChenghao = {
    name:"LiChenghao",
    payed:19.89,
    balance:0
    
}
const LuYao = {
    name:"LuYao",
    payed:0,
    balance:0
    
}
const ZhangLiaorou = {
    name:"ZhangLiaorou",
    payed:4.89,
    balance:0
    
}
const LuoYizhe = {
    name:"LuoYizhe",
    payed:16.03,
    balance:0
    
}
const Yu = {
    name : "Yu",
    payed:10.77,
    balance:0
    
}

const participants = [LiChenghao,LuYao,ZhangLiaorou,LuoYizhe,Yu]
//calculate the total amount of the party 
const totalPayment = participants.reduce((accumulator,participant)=>{
   return  accumulator+=participant.payed
},0)

console.log("totalPayment",totalPayment);
const averagePayment = totalPayment/participants.length
console.log("averagePayment",averagePayment);

participants.forEach((participant)=>{
    participant.balance=participant.payed-averagePayment
})


const toGive = participants.filter((participant)=>participant.balance>0)
const toReceive = participants.filter((participant)=>!toGive.includes(participant))

//balance meaning: the t
console.log("toGiven and toReceive",toGive,toReceive);
toGive.forEach((toGive)=>{
    
    toReceive.forEach((toReceive)=>{
        if(toGive.balance>0){

            //if difference is plus meaning, given balance is consumed over, otherwize given balance is remained 
            const difference = toGive.balance + toReceive.balance
            console.log(`${toGive.name} is payed ${(difference<0)?toGive.balance:Math.abs(toReceive.balance)} for ${toReceive.name}`);
            toGive.balance = (difference>0)?difference:0
            toReceive.balance = (difference>0)?0:difference
        }
    })
    
    
})



