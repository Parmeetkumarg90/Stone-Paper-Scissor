let i = 0, j = 0;
let user = document.getElementById("yresult");
let computer = document.getElementById("cresult");
let result = document.getElementById("overall");
let arr = ["Stone", "Paper", "Scissor"];
function calculate(num) {
    let c_choice = arr[Math.floor((Math.random()) * 3)];
    let u_choice = arr[num];
    result.style.backgroundColor = "yellow";
    result.style.color = "green";
    if ((c_choice == "Stone") && (u_choice == "Paper")) {
        i = i + 1;
        user.innerText = i;
        result.innerText = "You Wins";
    }
    else if ((c_choice == "Paper") && (u_choice == "Scissor")) {
        i = i + 1;
        user.innerText = i;
        result.innerText = "You Wins";
    }
    else if ((c_choice == "Scissor") && (u_choice == "Stone")) {
        i = i + 1;
        user.innerText = i;
        result.innerText = "You Wins";
    }
    else if (u_choice == c_choice) {
        alert("It's a draw");
    }
    else {
        j = j + 1;
        computer.innerText = j;
        result.innerText = "Computer Wins";
    }
}
let final = () => {
    if (i > j) {
        result.innerText = "User Wins Overally";
    }
    else if (i < j) {
        result.innerText = "Computer Wins Overally";
    }
    else if ((i == 0) && (j == 0)) {
        result.innerText = "Start the game first";
    }
    else {
        result.innerText = "It's a draw match";
    }
}