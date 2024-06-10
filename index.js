let game = document.querySelector("#game")
let add = document.querySelector("#add")
let arryNum = 1
let selectOne = document.querySelector("#select_one")
let selectTwo = document.querySelector("#select_two")
let selectThr = document.querySelector("#select_three")
let randomNums = []
let passwd = []
let win = false
let exist = []
let circilColor1 = "rgb(31, 30, 30)"
let circilColor2 = "rgb(31, 30, 30)"
let circilColor3 = "rgb(31, 30, 30)"
let red = 0
let blue = 0
let newArr = []
let levelELA = document.getElementById("level")
let levelEl = document.getElementById("level_done")
let level = 1

if(localStorage.getItem("level")){
    level =  parseInt(localStorage.getItem("level"))
    console.log(level);
    levelELA.textContent = level 
}else{ 
    localStorage.setItem("level","1")
    level =  parseInt(localStorage.getItem("level"))
    levelELA.textContent = level
}

function random () {
    for (let i = 0; i < 5; i++) {
        randomNums.push(Math.floor(Math.random() * 10))
    }
}
random()
for (let i = 0; i < 3; i++) {
    passwd.push(randomNums[Math.floor(Math.random() * 5)])
}
console.log(passwd);
console.log(randomNums)
function hardcode(name){
    for (let i = 0; i < 5; i++) {
        document.getElementById(`${name}${i+1}`).textContent = randomNums[i]   
        document.getElementById(`${name}${i+1}`).value = randomNums[i]   
    }
}
for (let i = 0; i < 5; i++) {
    document.getElementById(`nums_${i+1}`).textContent = randomNums[i]   
}
// hardcode("nums_")
hardcode("num_")
hardcode("nu_")
hardcode("n_")
add.addEventListener("click",()=>{
    
    if (arryNum < 11 && !win) {

// if ( passwd.includes(parseInt(selectOne.value))){
//     console.log("it include");
//     circilColor1 = "red"
// if (parseInt(selectOne.value) == passwd[0]) {
//         circilColor1 = "blue"
//     }
// }

// if ( passwd.includes(parseInt(selectTwo.value))){
//     console.log("it include");
//     circilColor2 = "red"
// if (parseInt(selectTwo.value) == passwd[1]) {
//         circilColor2 = "blue"
//     }
// }
// if ( passwd.includes(parseInt(selectThr.value))){
//     console.log("it include");
//     circilColor3 = "red"
// if (parseInt(selectThr.value) == passwd[2]) {
//         circilColor3 = "blue"
//     }
// }
       
        if (newArr.includes(parseInt(selectOne.value))){
        }else{
            newArr.push(parseInt(selectOne.value))

        }
        if (newArr.includes(parseInt(selectThr.value))){
        }else{
            newArr.push(parseInt(selectThr.value))

        }
        if (newArr.includes(parseInt(selectTwo.value))){
        }else{
            newArr.push(parseInt(selectTwo.value))

        }
    console.log(newArr);
    for (let i = 0; i < newArr.length; i++) {
        if (passwd.includes(newArr[i])){
            exist.push(newArr[i])
        }
    }

  red = exist.length
  console.log(red);
   if (red == 1){
       circilColor1 = "red"
   }
   if (red == 2){
       circilColor1 = "red"
       circilColor2 = "red"
   }
   if (red == 3) {
       circilColor1 = "red"
       circilColor2 = "red"
       circilColor3 = "red"
   }
   if ( parseInt(selectOne.value) == passwd[0]){
       blue ++
   }
   if ( parseInt(selectTwo.value) == passwd[1]){
       blue ++
   }
   if ( parseInt(selectThr.value) == passwd[2]){
       blue ++
   }

   if (blue == 1){
    circilColor1 = "blue"
}
if (blue == 2){
    circilColor1 = "blue"
    circilColor2 = "blue"
}
if (blue == 3) {
    circilColor1 = "blue"
    circilColor2 = "blue"
    circilColor3 = "blue"
}
   
        game.innerHTML += `
        <div id="demo_one">
    <div id="game_num">${arryNum}</div>
    <div id="game_hint">
    
   <div id="circil_1" style=" background-color : ${circilColor1};"></div>
    <div id="circil_2" style=" background-color : ${circilColor2};"></div>
    <div id="circil_3" style=" background-color : ${circilColor3};"></div>

    </div>
    <div id="game_spans">
    <span id="one" >${selectOne.value}</span>
    <span id="two" ">${selectTwo.value} </span>
    <span id="three" ">${selectThr.value}</span>
    </div>
    </div>
    `
    
    // console.log(parseInt(selectOne.value) + 1);


    if(circilColor1 == "blue" && circilColor2 == "blue" && circilColor3 == "blue"){
        console.log("you win");
        win = true
    }
    if (win) {
        level++
        localStorage.setItem("level", level)
        console.log("you win" + level);
        console.log(localStorage.getItem("level"))
        levelEl.textContent = level - 1
        document.getElementById("hide").style.display = "flex"
        document.getElementById("you_win").style.color = "blue"
        document.getElementById("you_win").textContent = "YOU WIN"

    }
      circilColor1 = "rgb(31, 30, 30)"  
      circilColor2 = "rgb(31, 30, 30)"  
      circilColor3 = "rgb(31, 30, 30)"  
      red = 0
      blue = 0
      newArr = []
      exist = []
    arryNum ++
}else{
    // location.reload()
        document.getElementById("hide").style.display = "flex"
        document.getElementById("you_win").style.color = "red"
        document.getElementById("you_win").textContent = "GAME OVER"
        document.getElementById("replay").textContent = "replay!"
        document.getElementById("h2").textContent = "hard luck"
}
})
function reload (){
        location.reload()

}