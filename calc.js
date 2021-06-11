var screen = document.getElementById('screen');
var buttons = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e)=>{
       
        buttonText=e.target.innerText;
        if(buttonText=="C") screen.value="";
        else if(buttonText=="<") screen.value=screen.value.substring(0,screen.value.length-1);
        else if(buttonText=="X") screen.value+='*';
        else if(buttonText=="=") screen.value=eval(screen.value);
        else screen.value+=buttonText;
       
    })
}