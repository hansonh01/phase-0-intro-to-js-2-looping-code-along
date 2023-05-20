function writeCards(names,event="surprise"){
    let messages = [];
    for (let i = 0; i < names.length; i++){
        messages[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}
function countDown(){
    let countDown = 11;
    while (countDown > 0) {
        console.log((countDown--)-1);
}};
