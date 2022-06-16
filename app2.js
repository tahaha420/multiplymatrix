function dothis() {
    var first =Number(document.querySelector("#first").value)
    var second =Number(document.querySelector("#second").value)
    var mat1=document.querySelector("#first-matrix");
    var mat2=document.querySelector("#second-matrix");
    if (first==second){
        for(var i=0;i<first;i++){
            for(var j=0;j<second;j++){
                mat1.innerHTML+=`<input size="1" placeholder="0" type="number" class=input1 id="Mat1${i}${j}"">`;
            }
            mat1.innerHTML+="<br>";
        }
        for(var i=0;i<first;i++){
            for(var j=0;j<second;j++){
                mat2.innerHTML+=`<input size="1" type="number" placeholder="0" class=input1 id="Mat2${i}${j}">`;
            }
            mat2.innerHTML+="<br>";
        }
    } else{
    alert ("Row and column must be same")
    }
}


function multiply(){
    var first =Number(document.querySelector("#first").value)
    var w = new Array(first);
    var x = new Array(first);
    var m = new Array(first);

    for (var i = 0; i < first; i++) {  //loop to make arrays
        w[i] = new Array(first);
        x[i] = new Array(first);
        m[i] = new Array(first);

    }


    for (var i = 0; i < first; i++) {   //input values in boxes
        for (var j = 0; j < first; j++) {
            w[i][j] =  Number(document.querySelector(`#Mat1${i}${j}`).value);
            x[i][j] =  Number(document.querySelector(`#Mat2${i}${j}`).value);
            
        }
    }
    //loop for making all elements of ans matrix 0

    for (var i = 0; i < first; i++) {
        for (var j = 0; j < first; j++) {
            m[i][j] = 0;
        }
    }

    //multiplying the 2 matrices
    let mat3 = document.querySelector("#third-matrix");
    for (var i = 0; i < first; i++) {
        for (var j = 0; j < first; j++) {
            for (var k = 0; k < first; k++) {
                m[i][j] = m[i][j] + (w[i][k] * x[k][j]);
            }
        }
    }
    for (var i = 0; i < first; i++) {
        for (var j = 0; j < first; j++) {
          mat3.innerHTML+= `<input size="1" type="number" value=${m[i][j]} class=input1 readonly>`;
        }
        mat3.innerHTML += "<br>";
    }
    
}
