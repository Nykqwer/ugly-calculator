
const calInput = document.getElementById('cal-input');
const calResult = document.getElementById('cal-result');
const redoBtn = document.getElementById('redo-btn');
const undoBtn = document.getElementById('undo-btn');


function calculate(){
   const result = eval(calInput.value );
   
   calResult.value = ` ${result} = `;
}

function reset(){
    calInput.value = "";
    calResult.value = "";
}

let previousValue = ' ';
function undoLastNum(){
        previousValue = calInput.value;
        calInput.value = calInput.value.slice(0,-1);
  

  
}

function redoLast(){
   calInput.value = previousValue;
}