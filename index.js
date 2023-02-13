const yesButton = document.querySelector('#yes');
const noButton = document.querySelector('#no');

yesButton.addEventListener('click', function() {
  alert("You made my day! Thank you for being my Valentine :)");
});

noButton.addEventListener('click', function() {
  const x = Math.floor(Math.random() * 390);
  const y = Math.floor(Math.random() * 844);
  noButton.style.marginTop = x/2 + "px";
  noButton.style.marginLeft = y/2 + "px";
});
