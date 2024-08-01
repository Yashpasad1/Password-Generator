const uppercaseset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseset = "abcdefghijklmnopqrstuvwxyz"
const numberset = "1234567890"
const symbolsset = "!@#$^&*()_+/"

let showOutput = document.querySelector(".showOutput")
let passwordLength = document.getElementById('passwordlength');
let number = document.getElementById('number')
let uppercase = document.getElementById('uppercase')
let lowercase = document.getElementById('lowercase')
let symbol = document.getElementById('symbol')
let submitbtn = document.getElementById('submitBtn')
let error = document.getElementById('error')

// console.log(passwordLength);

const getRandomData = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)]
}

const generatePassword = (password="") => {
    error.style.display = "none"
    if (!number.checked && !uppercase.checked && !lowercase.checked && !symbol.checked) {
        error.style.display = "block"
    }else{
        error.style.display = "hidden"
    }
    if(number.checked){
        password += getRandomData(numberset)
    }

    if(uppercase.checked){
        password += getRandomData(uppercaseset)
    }
    if(lowercase.checked){
        password += getRandomData(lowercaseset)
    }
    if(symbol.checked){
        password += getRandomData(symbolsset)
    }

    if (password.length <= passwordLength.value) {
        return generatePassword(password)
    }

    showOutput.innerHTML = truncateString(password ,passwordLength.value )
//    console.log(password);
  
}

submitbtn.addEventListener("click", function(){
    if (passwordLength < 4) {
        alert("length should be more then 3")
        return
    }
    generatePassword()
}
 )



 function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
//  function truncate(str , num) {
//     if (str.length > num) {
//         let substr =  str.slice(0,passwordLength)
//         return substr
//     }else{
//         return str
//     }

    
//  }

