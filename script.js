function calculate() {
    let x = document.getElementById('height').value;
    let y = document.getElementById('radius').value;
  
    let z = Math.PI * y * y * x;
  
    alert("Answer = " + z);

}
