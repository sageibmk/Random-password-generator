var showPass = document.querySelector("#input");
var btn = document.querySelector(".btn");
var copyBtn = document.querySelector(".fa-copy");

const length = 12;
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const sign = "!@#$%^&*()_+?\|/=-";

const allCharacter = UpperCase + lowerCase + numbers +sign;

function createPassword(){
    let password = "";
    password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += sign[Math.floor(Math.random() * sign.length)];

    while(length > password.length){
       password += allCharacter[Math.floor(Math.random() * allCharacter.length)];
    }
    showPass.value = password;
}

function copyPass(){
    showPass.select();
    document.execCommand("copy")
}