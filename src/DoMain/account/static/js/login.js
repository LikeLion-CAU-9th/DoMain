function changeBox1() {
  let wgi = document.getElementById("white-sign-in");
  let gsu = document.getElementById("green-sign-up");
  let whitebox = document.getElementById("white-box");
  let greenbox = document.getElementById("green-box");
  let wgu = document.getElementById("white-sign-up");
  let gsi = document.getElementById("green-sign-in");

  wgi.style.display = "none";
  gsu.style.display = "none";
  whitebox.style.float = "right";
  greenbox.style.marginLeft = "0%";

  wgu.style.display = "block";
  gsi.style.display = "block";

}

function changeBox2() {
  let wgi = document.getElementById("white-sign-in");
  let gsu = document.getElementById("green-sign-up");
  let whitebox = document.getElementById("white-box");
  let greenbox = document.getElementById("green-box");
  let wgu = document.getElementById("white-sign-up");
  let gsi = document.getElementById("green-sign-in");

  wgu.style.display = "none";
  gsi.style.display = "none";
  whitebox.style.float = "left";

  greenbox.style.marginLeft = "64.8%";

  wgi.style.display = "block";
  gsu.style.display = "block";

}