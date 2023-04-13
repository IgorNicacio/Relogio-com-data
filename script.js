const date = new Date()
let text = document.querySelector("h1")
let text2 = document.querySelector("h2")
let mensage =` ${weekWhritter(date.getDay())}, ${completeNumbers(date.getDate())} de ${monthWhritter(date.getMonth())} de ${date.getFullYear()}`
let hour = `${completeNumbers(date.getHours())} : ${completeNumbers(date.getMinutes())}`
function weekWhritter(week){
    let weektext = "";
    switch(week){
        case 0: weektext = "Domingo";
        return weektext;
        case 1: weektext = "Segunda-Feira"
        return weektext;
        case 2: weektext = "Terça-Feira";
        return weektext;
        case 3: weektext = "Quarta-Feira";
        return weektext; 
        case 4: weektext = "Quinta-Feira";
        return weektext; 
        case 5: weektext = "Sexta-Feira";
        return weektext; 
        case 6: weektext = "Sabado";
        return weektext; }
    }
function monthWhritter(month){
    let monthtext = "";
    switch(month){
        case 0: monthtext = "Janeiro";
        return monthtext;
        case 1: monthtext = "Fevereiro"
        return monthtext;
        case 2: monthtext = "Março";
        return monthtext;
        case 3: monthtext = "Abril";
        return monthtext; 
        case 4: monthtext = "Maio";
        return monthtext; 
        case 5: monthtext = "Junho";
        return monthtext; 
        case 6: monthtext = "Julho";
        return monthtext; 
        case 7: monthtext = "Agosto";
        return monthtext; 
        case 8: monthtext = "Setembro";
        return monthtext; 
        case 9: monthtext = "Outubro";
        return monthtext; 
        case 10: monthtext = "Novembro"
        return monthtext; 
        case 11: monthtext = "Dezembro"
        return monthtext; 
    }
}
function completeNumbers(num){
    return num < 10 ? "0" + num : num
}
function teste(){
    text.innerHTML = mensage
    text2.innerHTML = hour
}
console.log (date)

teste()
