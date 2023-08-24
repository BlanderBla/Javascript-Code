/*  FUNCTION: verifyText()
    Verifica que haya texto en el input 
    verifyText() -->  verifyCheck() | addNewCheck(text)
*/
function verifyText(){
    text = document.getElementById("textNewToDo").value;
    if(text !== ""){
        if(verifyCheck() == null){
            generateCheck(text);
            cleanText();
        }else{
            addNewCheck(text);
            cleanText();
        }
    }
}

/*  FUNCTION: generateCheck()
    Genera un nuevo checkbox si es que esta vacio
*/
function generateCheck(text){
    code = "<input type=checkbox>"+text+"<br>";
    todoTask.innerHTML = code;
}

/*  FUNCTION addNewCheck()
*/
function addNewCheck(text) {
    var todoTask = document.getElementById('todoTask');
    todoTask.innerHTML += `<label><input type="checkbox">${text}</label><br>`;
}


/*  FUNCTION verifyCheck()
    Verífica si es que hay más de un checkbox
*/
function verifyCheck(){
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    return checkboxes.length > 0 ? checkboxes : null;
}

/*  FUNCTION cleanText()
    Limpia el input para que se ingresen nuevos datos
*/
function cleanText(){
    document.getElementById('textNewToDo').value = "";
}

/*  FUNCTION cleanChecks()
    Limpia el div de los check para que no haya datos
*/
function cleanChecks(){
    var todoList = document.getElementById('todoTask');
    todoList.innerHTML = "";
}