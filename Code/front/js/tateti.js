let tatetiArray = [
    ["","",""],
    ["","",""],
    ["","",""]
];

function insertData(id,position1,position2) {
    let inputTaTeTi = document.getElementById(id).value;
    tatetiArray[position1][position2] = inputTaTeTi;
}

function winCondition() {
    let winCondition1 = tatetiArray[0][0] == "x" && tatetiArray[0][1] == "x" && tatetiArray[0][2] == "x";
    let winCondition2 = tatetiArray[1][0] == "x" && tatetiArray[1][1] == "x" && tatetiArray[1][2] == "x";
    let winCondition3 = tatetiArray[2][0] == "x" && tatetiArray[2][1] == "x" && tatetiArray[2][2] == "x";
    let winCondition4 = tatetiArray[0][0] == "x" && tatetiArray[1][0] == "x" && tatetiArray[2][0] == "x";
    let winCondition5 = tatetiArray[0][1] == "x" && tatetiArray[1][1] == "x" && tatetiArray[2][1] == "x";
    let winCondition6 = tatetiArray[0][2] == "x" && tatetiArray[1][2] == "x" && tatetiArray[2][2] == "x";
    let winCondition7 = tatetiArray[0][0] == "x" && tatetiArray[1][1] == "x" && tatetiArray[2][2] == "x";
    let winCondition8 = tatetiArray[0][2] == "x" && tatetiArray[1][1] == "x" && tatetiArray[2][0] == "x";

    let winCondition9 = tatetiArray[0][0] == "o" && tatetiArray[0][1] == "o" && tatetiArray[0][2] == "o";
    let winCondition10 = tatetiArray[1][0] == "o" && tatetiArray[1][1] == "o" && tatetiArray[1][2] == "o";
    let winCondition11 = tatetiArray[2][0] == "o" && tatetiArray[2][1] == "o" && tatetiArray[2][2] == "o";
    let winCondition12 = tatetiArray[0][0] == "o" && tatetiArray[1][0] == "o" && tatetiArray[2][0] == "o";
    let winCondition13 = tatetiArray[0][1] == "o" && tatetiArray[1][1] == "o" && tatetiArray[2][1] == "o";
    let winCondition14 = tatetiArray[0][2] == "o" && tatetiArray[1][2] == "o" && tatetiArray[2][2] == "o";
    let winCondition15 = tatetiArray[0][0] == "o" && tatetiArray[1][1] == "o" && tatetiArray[2][2] == "o";
    let winCondition16 = tatetiArray[0][2] == "o" && tatetiArray[1][1] == "o" && tatetiArray[2][0] == "o";


    if(winCondition1 || winCondition2 || winCondition3 || winCondition4 || winCondition5 || winCondition6 || winCondition7 || winCondition8) {
        alert("Gano el jugador X");
    } else if(winCondition9 || winCondition10 || winCondition11 || winCondition12 || winCondition13 || winCondition14 || winCondition15 || winCondition16){
        alert("Gano el jugador O")
    } else {
        alert("Test");
    }
}