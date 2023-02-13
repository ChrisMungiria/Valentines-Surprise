const link = document.getElementById("no");

link.addEventListener('click', function() {
  const x = Math.floor(Math.random() * 50);
  const y = Math.floor(Math.random() * 300);

  console.log(x, y);

  link.style.marginTop = x + "px";
  link.style.marginLeft = y + "px";
});

const yesButton =document.getElementById("yes");

yesButton.addEventListener('click', function (){
    alert("Thank You!You are the best!🥺")
});