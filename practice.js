function gpassword(){
    const password=Number(document.getElementById("password").value);
    const lower=document.getElementById("lower");
    const higher=document.getElementById("higher");
    const number=document.getElementById("number");
    const symbols=document.getElementById("symbols");
    const thepassword=document.getElementById("thepassword");
    let actualpassword="";
    let realpassword="";
    if(password==""||password<0){
        thepassword.textContent="Enter the length of ur password(must be positive number)";
    }
    else{
        if(lower.checked||higher.checked||number.checked||symbols.checked){
            if(lower.checked){
                actualpassword+="abcdefghijklmnopqrstuvwxyz";
            }
            if(higher.checked){
                actualpassword+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            }
            if(number.checked){
                actualpassword+="0123456789";
            }
            if(symbols.checked){
                actualpassword+="!@#$%^&*()-_+=~`<>?/";
            }
            for(let i=0;i<password;i++){
                let randomindex=Math.floor(Math.random()*actualpassword.length);
                realpassword+=actualpassword[randomindex];
            }
            thepassword.textContent="Password: "+realpassword;
        }
        else{
            thepassword.textContent="Enter what to include Bozo";
        }
    }
    
    

}