//Trapezoid calculator using functions\

//checking for the click 
document.getElementById("button").addEventListener("click", calcArea)

//global variable 
let resultSec = document.getElementById("results")

function calcArea () {
    //gettign the input
    let b1 = Number(document.getElementById("b1Val").value)
    let b2 = Number(document.getElementById("b2Val").value)
    let h = Number(document.getElementById("hVal").value)

    //displaying resutkls 
    resultSec.innerHTML = trapezoidFormula(b1, b2, h); 
}


//calculate the area of trapezoid and return values a b and c
function trapezoidFormula(a, b, c) {
    return 0.5 *(a + b) * c
}
