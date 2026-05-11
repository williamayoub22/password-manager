//#############################################################
//############# Welcome / Instruction Alert ###################
//#############################################################
alert(
    "Welcome to the Password Manager Demo!\n\n" +
    "This is a portfolio project for demonstration purposes. It uses a dummy hashing algorithm and is NOT intended for secure password storage.\n\n" +
    "How to use:\n" +
    "1. Enter a Master Pass Key.\n" +
    "2. Enter the App or Website name.\n" +
    "3. Choose an algorithm from the dropdown.\n" +
    "4. Click 'Go!' to generate your hashed password."
);


//#############################################################
//############# load passowrd into password field ############# 
//#############################################################
if(localStorage.getItem('passKey')!=null){
    document.getElementById('input1').value= localStorage.getItem('passKey');
}

//##############################################
//#############  chrome custom css ############# 
//##############################################
var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

if(is_chrome)
{
    var listElements = document.querySelectorAll(".list");
    listElements.forEach(function(element) {
        element.style.textAlignLast = "center";
        element.style.paddingRight = "0px";
        element.style.direction = "rtl";
    });
}

//#################################################
//############# general sha functions ############# 
//#################################################
function md5(text){
    return CryptoJS.MD5(text).toString(CryptoJS.enc.Hex);
}

//###########################################
//############# go button logic #############
//###########################################

//make go button call go funciton
document.getElementById("go").addEventListener('click',go);

function EmptyFileds(){
    let empty1 = document.getElementById("input1").value==="";
    let empty2 = document.getElementById("input2").value==="";

    if(empty1){
        animateInput('input1');
    }

    if(empty2){
        animateInput('input2');
    }

    if(empty1 || empty2){
        return true;
    }
    
    return false;
}
    
function callChosenEncryption(){
    // Read from the restored select dropdown
    let ver = document.getElementById("version").value;
    let key = document.getElementById("input1").value;
    let word = document.getElementById("input2").value;

    if (ver === "dummy"){
        document.getElementById("result").innerHTML = dummyHash(key, word);
    }
    else if(ver === "md5"){
        document.getElementById("result").innerHTML = md5(word);
    }
    else if(ver === "dummy_md5"){
        let dHash = dummyHash(key, word);
        document.getElementById("result").innerHTML = md5(dHash);
    }
}

function updatePassword(){
    localStorage.setItem('passKey',document.getElementById("input1").value);
}

function go(){
    if(EmptyFileds() == false)
    {
        updatePassword();
        callChosenEncryption();
        animateLogo();
    }
}