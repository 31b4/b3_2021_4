var map = [
    [0,1,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,2,1,1,0,0,1,0,1],
    [0,0,0,0,1,0,0,1,0,0],
    [0,0,1,1,1,1,0,1,1,1],
    [0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,1,0],
    [1,1,0,0,0,0,0,0,0,0]
];
var pos;

function validStep(newPos) {
    console.log(newPos)
    if (newPos[0]>9 || newPos[1]>9 || newPos[0]<0 || newPos[1]<0) {
        return false
    }
    if (map[newPos[0]][newPos[1]]!=1) {
        console.log(newPos)
        return true
    }
    return false
}
function LepesDontes(validok){
    var minI = 0;
    var newPos;
    for (let i = 0; i < validok.length-1; i++) {
        if (document.getElementById(validok[i][0]+","+validok[i][1]).value>document.getElementById(validok[i+1][0]+","+validok[i+1][1]).value) {
            minI=i+1
        }
    }
    newPos=validok[minI]


    document.getElementById(pos[0]+","+pos[1]).style.backgroundColor="red"
    document.getElementById(pos[0]+","+pos[1]).value+=1;
    var count = document.getElementById(pos[0]+","+pos[1]).value;
    document.getElementById(pos[0]+","+pos[1]).innerHTML=count;
    document.getElementById(pos[0]+","+pos[1]).style.color="white"
    // console.log(pos[0]+","+pos[1])
    pos = newPos
    document.getElementById(pos[0]+","+pos[1]).style.backgroundColor="blue"
    console.log("done")
}
function Mehet(){
    var validok = new Array();
    if (validStep([pos[0]+1,pos[1]])) {
        validok.push([pos[0]+1,pos[1]])
    }
    if (validStep([pos[0]-1,pos[1]])) {
        validok.push([pos[0]-1,pos[1]])
    }
    if (validStep([pos[0],pos[1]-1])) {
        validok.push([pos[0],pos[1]-1])
    }
    if (validStep([pos[0],pos[1]+1])) {
        validok.push([pos[0],pos[1]+1])   
    }
    LepesDontes(validok)

}

function Mozgas(){
    var ms = document.getElementById("ms").value
    setInterval(Mehet,ms);
}
function MapGenerate() {
    var table = document.getElementById("table")
    for (let i = 0; i < map[0].length; i++) {
        var tr= document.createElement("tr")
        for (let j = 0; j < map.length; j++) {
            var td = document.createElement("td")
            td.style.width="30px"
            td.style.height="30px"
            td.id=i+","+j;
            td.value=0;
            if (map[i][j]==0) {
                td.style.backgroundColor="red"
            }else if(map[i][j]==1){
                td.style.backgroundColor="black"
            }
            else if(map[i][j]==2){
                td.style.backgroundColor="blue"
                pos = [i,j]
            }
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}