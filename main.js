//랜덤으로 숫자가 지정되면 입력버튼을 눌러서 1~100 사이의 숫자 맞추기
//도전 버튼 누르면 기회 차감
//재도전 버튼 누르면 입력창 리셋
//같은 숫자 입력 시, '이미 입력한 숫자입니다' - 배열
//번호 맞추면 도전 버튼 disable
//기회 소진되면 도전 버튼 disable
 
let computerNum = 0; //랜덤숫자
let resultArea = document.getElementById("resultArea");
let userInput = document.getElementById("user-input"); //입력값
let playBtn = document.getElementById("tryBtn");
let resetBtn = document.getElementById("resetBtn");
let chanceArea = document.getElementById("chanceArea");
let chances = 10;
let userInputList = [];
let gameOver = false;
let mainImage = document.querySelector(".main-image");
let fireWork = document.getElementsByClassName(".fireworks");

chanceArea.textContent = `남은 기회 : ${chances}번`;
playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput)

function pickRandomNum(){
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답: " + computerNum);
}

function focusInput(){
   userInput.value = "";
}

function play(){
  let userValue = userInput.value;

  if(userValue < 1 || userValue > 100){
    resultArea.textContent = "1에서 100 사이의 숫자를 입력하세요."
    return;
  }
  
  if(userInputList.includes(userValue)){
    resultArea.textContent = "이미 입력한 값입니다."
    mainImage.src = "https://media2.giphy.com/media/IedrY2VP5IO5ivDQAD/giphy.gif?cid=ecf05e47zpkvf56xmetpn72hpm51z8w5ml7h6tfigcbomgiq&ep=v1_gifs_related&rid=giphy.gif&ct=g";
    return;
  }

  chances--;
  chanceArea.textContent = `남은 기회 : ${chances}번`;
  userInputList.push(userValue);
  
  if(userValue > computerNum){
    mainImage.src = "https://media0.giphy.com/media/Js7cqIkpxFy0bILFFA/giphy.gif?cid=ecf05e47ra8zimrt0do4f15vskwdbuk0gfv2r6e2cm2asn9n&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    resultArea.textContent = "Down!!"
  }else if(userValue < computerNum){
    mainImage.src = "https://media3.giphy.com/media/KBJTi1lxDGrfPsl8Hf/giphy.gif?cid=ecf05e47hd8h96n4r20kmqitlytc8sb5ffv05ub7158a37ld&ep=v1_gifs_related&rid=giphy.gif&ct=g";
    resultArea.textContent = "Up!!"
  }else if(userValue == computerNum){
    mainImage.src = "https://media1.giphy.com/media/YP258EkezKv5RSPGRI/giphy.gif?cid=ecf05e47amk2qco7srq9daz8p66jccj1c09kkk86ikorg4v3&ep=v1_gifs_related&rid=giphy.gif&ct=g";
    resultArea.textContent = "정답입니다~!"
    gameOver = true;
    fireWork.hidden = false;
  };


  if(gameOver == true){
    playBtn.disabled = true;
  }

  if(chances == 0){
    playBtn.disabled = true;
  }

}

function reset(){
  pickRandomNum();
  focusInput();
  userInputList = [];
  chances = 10;
  gameOver = false;
  playBtn.disabled = false;
  resultArea.textContent = "1~100 사이의 숫자를 입력하세요!";
  chanceArea.textContent = "남은 기회 : 10번";
  mainImage.src = "https://media1.giphy.com/media/S99cgkURVO62qemEKM/giphy.gif?cid=ecf05e47jsf78g5p6wyxbf2yxsb0ymagr0ardr3k8tzekd63&ep=v1_gifs_search&rid=giphy.gif&ct=g";
}

pickRandomNum();
