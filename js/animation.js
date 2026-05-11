function toggleClassWithTime(id,className,seconds){
    //add a class name "className" for the elemnt of an id "id" for "seconds" time then remove the class



    let oldClasses = document.getElementById(id).className;
    let newClasses = oldClasses + ' ' + className;

    if(oldClasses.includes(className)){
        return;
    }

    document.getElementById(id).className = newClasses;


    setTimeout(function(){
        document.getElementById(id).className = oldClasses;

        
    },seconds * 1000)
        

}

function  animateLogo(){
    toggleClassWithTime('logo','animateLogo',1);
}

function animateInput(inputId){
    toggleClassWithTime(inputId,'invalidInput',2);

}



