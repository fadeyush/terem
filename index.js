// 2.1
(function () {
  const firstBlockToggle = document.querySelector(".btn-warning");
  const firstBlockSection = document.querySelector(".first-block");

  firstBlockToggle.addEventListener("click", function () {
      firstBlockSection.classList.toggle("container--closed");
  });
}());

// 2.2
(function () {
  const secondBlockToggle = document.querySelector(".btn-success");
  const thirdContainer = document.querySelector(".container__third");

  secondBlockToggle.addEventListener("click", function () {
    thirdContainer.classList.toggle("order");
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


