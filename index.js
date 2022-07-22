// 2.1
(function () {
  let firstBlockToggle = document.querySelector(".btn-warning");
  let firstBlockSection = document.querySelector(".first-block");

  firstBlockToggle.addEventListener("click", function () {
    if (firstBlockSection.classList.contains("container--open")) {
      firstBlockSection.classList.remove("container--open");
      firstBlockSection.classList.add("container--closed");
    } else {
      firstBlockSection.classList.remove("container--closed");
      firstBlockSection.classList.add("container--open");
    }
  });
}());

// 2.2
(function () {
  let secondBlockToggle = document.querySelector(".btn-success");
  let secondContainer = document.querySelector(".container__second");
  let thirdContainer = document.querySelector(".container__third");

  secondBlockToggle.addEventListener("click", function () {
    if (window.matchMedia("(max-width: 576px)").matches) {
      if (secondContainer.classList.contains("order")) {
        secondContainer.classList.remove("order");
        thirdContainer.style.borderTop = 'none';
        thirdContainer.style.borderBottom = '1px solid black';
        thirdContainer.style.borderRight = '1px solid black';
      } else {
        secondContainer.classList.add("order");
        thirdContainer.style.borderBottom = 'none';
        thirdContainer.style.borderTop = '1px solid black';
        thirdContainer.style.borderLeft = '1px solid black';
      }
    } else {
      if (secondContainer.classList.contains("order")) {
        secondContainer.classList.remove("order");
        thirdContainer.style.borderLeft = 'none';
        thirdContainer.style.borderRight = '1px solid black';
        thirdContainer.style.borderTop = '1px solid black';
      } else {
        secondContainer.classList.add("order");
        thirdContainer.style.borderRight = 'none';
        thirdContainer.style.borderLeft = '1px solid black';
        thirdContainer.style.borderBottom = '1px solid black';
      }
    }
  });

}());

// 2.3
(function () {
  window.addEventListener('load', function () {
    const elemModal = document.querySelector('#modal');
    const modal = new bootstrap.Modal(elemModal);
    modal.show();
  });
}());


