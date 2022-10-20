function clickme() {
    const sub = document.querySelector("button");

if (document.getElementById('five').checked){
    var a = document.getElementById('five').value;
    console.log(a)
}
else if (document.getElementById('four').checked){
    var a = document.getElementById('four').value;
    console.log(a)
}
else if (document.getElementById('three').checked){
    var a = document.getElementById('three').value;
    console.log(a)
}
else if (document.getElementById('two').checked){
    var a = document.getElementById('two').value;
    console.log(a)
}
else{
    var a = document.getElementById('one').value;
    console.log(a)
}
    sub.onclick = ()=>{
        sub-inner.style.display; "none";
    }
document.getElementById("cr").innerHTML = a


    var x = document.getElementById("sub-one");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    var y = document.getElementById("sub-two");
    if (y.style.display === "none") {
      y.style.display = "flex";
    } else {
      y.style.display = "flex";
    }
  }