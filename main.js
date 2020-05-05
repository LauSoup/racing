// si touche p 
document.addEventListener("keyup", (event) => {
  console.log(event);
  if (event.key === "t") {
    const position = document.querySelector("#player1-race .active");
    //   remove class active sur element  
    position.classList.remove("active");
    //   selectionne element d'aprés et ajoute class active
    const newPosition = position.nextElementSibling;
    console.log(position);
    newPosition.classList.add("active");
//   arrête la course si dernier carré
    if (newPosition.cellIndex === 11) {
      // affiche un Message
      const winMessage = document.querySelector(".player1-win"); 
      winMessage.style.display = "block";
      // recommence le jeu
      const button = document.querySelector('#clickme');
      button.style.display = "block";
      reboot();
    }
  } 
})

// Player2
document.addEventListener("keyup", (event) => {
  console.log(event);
  if (event.key === "a") {
    const position = document.querySelector("#player2-race .active");
    //   remove class active sur element  
    position.classList.remove("active");
    //   selectionne element d'aprés et ajoute class active
    const newPosition = position.nextElementSibling;
    console.log(position);
    newPosition.classList.add("active");
//   arrête la course si dernier carré
    if (newPosition.cellIndex === 11) {
      // affiche un Message
      const winMessage = document.querySelector(".player2-win"); 
      winMessage.style.display = "block";
      // recommence le jeu
      const button = document.querySelector('#clickme');
      button.style.display = "block";
      reboot();
    }
  } 
})

const reboot = () => {
  const button = document.querySelector('#clickme');

  button.addEventListener("click", (event) => {
    const allTd = document.querySelectorAll("td")
    allTd.forEach ((element) => {
      element.classList.remove("active");
    });
    const begin1 = document.querySelector("#player1-race td")
    begin1.classList.add("active");
    const begin2 = document.querySelector("#player2-race td")
    begin2.classList.add("active");
    const winMessage1 = document.querySelector(".player1-win"); 
    winMessage1.style.display = "none";
    const winMessage2 = document.querySelector(".player2-win"); 
    winMessage2.style.display = "none";
    button.style.display = "none";
  })
}