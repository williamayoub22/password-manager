    /// this is important for android (otherwise it will open keyboard when clicking go)
    function clearSelection()
    {
    if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
    }
    ///


    function copy2Clipboard() {
    /* Get the text field */
    let copyText = document.getElementById("result").innerHTML;

    let input=document.getElementById('resultInput');
    input.value=copyText; 
    /* Select the text field */
    input.select();
    input.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");
    clearSelection(); //important for android

    } 


// copy when text clicked
document.getElementById("result").addEventListener('click',copy2Clipboard);
//copy when go button clicked (needs delay)
document.getElementById("go").addEventListener('click',function(){setTimeout(copy2Clipboard,0.5*1000)});