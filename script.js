let homeCards = document.querySelectorAll(".card-left-person-container");
let homeCardBtns = document.querySelectorAll(".card-down-icon");
homeCards.forEach((ele) => {
  let letfCardPerson = ele.querySelectorAll(".card-left-person");
  let arr = Array.from(letfCardPerson);
  let lastThree = arr.slice(3);
  lastThree.forEach((e) => {
    e.style.display = "none";
  });
});

homeCardBtns.forEach((e) => {
  e.addEventListener("click", (event) => {
    let icon = event.target.closest(".card-down-icon svg");
    let parent = event.target.closest(".card-left-person-container");
    // console.log(event.target.closest(".card-down-icon svg"));
    // homeCards.forEach((ele) => {
    //   ele.querySelector(".card-down-icon svg").style.transform = "rotate(0deg)";
    //   let letfCardPerson = ele.querySelectorAll(".card-left-person");
    //   let arr = Array.from(letfCardPerson);
    //   let lastThree = arr.slice(3);
    //   lastThree.forEach((e) => {
    //     e.style.display = "none";
    //   });
    // });

    if (icon.style.transform == "rotate(180deg)") {
      icon.style.transform = "rotate(0deg)";
      homeCards.forEach((ele) => {
        let letfCardPerson = ele.querySelectorAll(".card-left-person");
        let arr = Array.from(letfCardPerson);
        let lastThree = arr.slice(3);
        lastThree.forEach((e) => {
          e.style.display = "none";
        });
      });
    } else {
      icon.style.transform = "rotate(180deg)";
      parent.querySelectorAll(".card-left-person").forEach((e) => {
        e.style.display = "flex";
      });
    }
  });
});
