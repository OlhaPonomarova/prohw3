var phone = prompt("");
"use strict";


    if(phone === ""){
        alert("empty line example +380638256826");
    }
    else if(phone.length !=13){
        alert("only thirteen numbers example +380638256826");
    }
    
    else if(phone[0] !="+"){
        alert("format + example +380638256826");
    }
    else
    var newphone = phone.slice(1);
    for(var number of newphone){
        var code = number.charCodeAt();
        
        if(code < 48 || code > 57){
            alert("only numbers example +380638256826");
            break;
        }
    }

   

