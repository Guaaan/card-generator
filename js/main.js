
window.onload = () => {
    
    
    let generateRandomNumber = () => {    
        let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        let indexNumbers = Math.floor(Math.random() * numbers.length);
        return numbers[indexNumbers];
    }    
    
    let generateRandomSuite =  () => {
        var suit = ["spades", "clubs", "hearts", "diamonds"];
        let indexsuit = Math.floor(Math.random() * suit.length);
        return suit[indexsuit];
    }    
    
    document.querySelector('.num').classList.add(generateRandomSuite());
    document.querySelector('.num').innerHTML = generateRandomNumber();
};