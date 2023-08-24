function buttonClicked(value){
    console.log(value);
  
    var label = document.getElementById("operation");
    var valLabel = label.innerHTML;

    if(value === "C"){
        valLabel = "";
        label.innerHTML = valLabel;
    }else{
        valLabel += value;
        if (value === "=") {
            try{
                console.log(typeof(valLabel));
                console.log(valLabel);
                console.log(valLabel.slice(0,-1));
                label.innerHTML = eval(valLabel.slice(0,-1));    
            }catch(err){
                label.innerHTML = "Syntax Error";
            }
        } else {
            label.innerHTML = valLabel;
        }
    }
}  