console.log("hello");
var bekertAdatok =  new Array();
function MatrixGenerate() {
    var table = document.getElementById("table")
    for (let i = 0; i < bekertAdatok[0][0]; i++) {
        var tr = document.createElement("tr")
        for (let j = 0; j < bekertAdatok[0][1]; j++) {
            var td = document.createElement("td")
            td.style.width="20px"
            td.style.height="20px"
            if (bekertAdatok[i+1][j]==1) {
                td.style.backgroundColor="black";
            }
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}

function Beolvasas() {
   var szamok = document.getElementById("adatok").value;
   console.log(szamok); 
   let line = szamok.split('\n');
   // console.log(line); 
   for (let i = 0; i < line.length; i++) {
       bekertAdatok.push(line[i].split(' '));        
    }
    console.log(bekertAdatok);
    MatrixGenerate()
}