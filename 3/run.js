function Decoding() {
    input = document.getElementById("input").value;
    for (let i = 0; i < input.length-5; i++) {
        for (let j = 6; j < input.length/2; j++) {
            var csomag = input.substring(i,i+j)
            if (i>=j) {
                var csomagElott=input.substring(0,i)
            }
            var csomagUtan=input.substring(i+1,input.length)
            console.log(csomagElott+"--"+csomag+"--"+csomagUtan)
            if (csomagUtan.includes(csomag)) {
                alert("nemjo")
                return;
            }
            else if(csomagElott!= undefined){
                if (csomagElott.includes(csomag)) {
                    
                }
            }
        }
    }
    alert("jo")
}