console.log("Test");
var data = new Array();
function SameValue(inputOsztoi, iOsztoi) {
    for (let i = 1; i < inputOsztoi.length; i++) {
        for (let j = 1; j < iOsztoi.length; j++) {
           if (inputOsztoi[i]==iOsztoi[j]) {
               return false
           }   
        }
    }
    return true
}

function Calculate() {
    var input = document.getElementById("szam").value;
    console.log(input);
    if (input < 2 || input > 100) {
        return;
    }
    var inputOsztoi = new Array()
    for (let i = 1; i <= input; i++) {
        if (input%i==0) {
            inputOsztoi.push(i)
        }
    }
    console.log("Input osztoi: "+inputOsztoi)
    for (let i = 2; i <= 100; i++) {
        var iOsztoi = new Array()
        for (let j = 1; j <= i; j++) {
            if (i%j==0) {
                iOsztoi.push(j)
            }
        }
        if (SameValue(inputOsztoi,iOsztoi)) {
            data.push(i)
        }
    }
    console.log(data)
}