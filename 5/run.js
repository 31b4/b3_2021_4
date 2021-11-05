var szamok = new Array();
function MinKivalasztas() {
  var minE =szamok[0]; 
  var minI = 0;
  for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] < minE ) {
      minE = szamok[i];
      minI = i;
    }    
  }
  console.log("MINERTEK: " + minE + " MININDEX:" + minI);
  return minI;
}

function Valami(valasztottE, li){
 
  console.log("as "+valasztottE)
  console.log("a "+MinKivalasztas())
  if (valasztottE == MinKivalasztas()) {
    szamok.splice(valasztottE,1)
    console.log(szamok);
    document.getElementById(valasztottE).parentNode.removeChild(document.getElementById(valasztottE),1);
    alert("Ügyes vagy")
  }
  else if(szamok.length == 1){
    alert("Nyertél")
  }
  else{
    alert("Vesztettél")
  }
   
}
function Generate(){
    szamok = new Array;
    var input = document.getElementById("szam").value;
    console.log(input);
    if (input < 2 || input > 10) {
        return;
    }
    var szinek=new Array();
    szinek.push("green","yellow", "red", "blue", "black");
    console.log(szinek);
    var random=0;
    var vezetekek = document.getElementById("vezetekek");
    var ul = document.createElement("ul");
    for (let i = 0; i < input; i++) {
        random = Math.floor(Math.random()*(4+1));
        var li = document.createElement("li");
        li.style.marker="none"
        li.style.backgroundColor=szinek[random];
        li.id=i;       
        li.onclick= function(){Valami(i, li)}        
        ul.appendChild(li);
        szamok.push(random);
    }   
    vezetekek.appendChild(ul);
    
}

//li.parentNode.removeChild(li);