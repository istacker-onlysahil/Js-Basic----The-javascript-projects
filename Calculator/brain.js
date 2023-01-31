

function flip(){
  let dis= document.getElementById("scientific")
  let rot=document.getElementById("rotate")
  let view=document.getElementById("displayscreen")
  if(dis.style.display=="none"){
  dis.style.display="grid";
  view.style.width="173.4%";
  rot.style.transform=" rotate(55deg)";
  }
    else{
      dis.style.display="none";
      view.style.width="100.7%";
      rot.style.transform=" rotate(0deg)";
    }
}

  

function back() {
    let value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
 }

function dot() {
  let d = document.getElementById("result");
  let lastChar = d.value[d.value.length-1];
  let number = d.value.split(/[\+\-\*\/]/).pop();
  
  if (d.value === "") {
    d.value += "0.";
  } 
  else if (isNaN(lastChar) || number.indexOf(".") !== -1) {
    alert("Invalid Move");
  } 
  else {
    d.value += ".";
  }
}



 // functions for repeating letters 
    function attach(a){
      if(document.getElementById("result").value ==""){
        document.getElementById("result").value=a
              }
              else{document.getElementById("result").value+=a}
            }  
            
    function zero(){
      let a=document.getElementById("result").value;
        if( a=="0" || a=="" ){
        document.getElementById("result").value="0";
              }
              // the smartest logic of my code
          else if(a[a.length-1]==0){a[a.length-1]=0;} //<<<<< smartest logic

              else{document.getElementById("result").value+=0}
    }  

    function clearall(){
  document.getElementById("result").value=""
  document.getElementById("res").value=""
 }
 function twoplus(){
  let a=document.getElementById("result").value;
  if(document.getElementById("result").value==""){
    alert("Invalid move")
  }
  else if(a[a.length-1]=="."||a[a.length-1]=="/"||a[a.length-1]=="*"||a[a.length-1]=="+"||a[a.length-1]=="-"||a[a.length-1]=="%"){a[a.length-1]="+";}
 else{ document.getElementById("result").value+="+"}
 } 

function oneminus(){
  let a=document.getElementById("result").value;
  if(document.getElementById("result").value==""){
     document.getElementById("result").value+="-"
  }
  else if(a[a.length-1]=="."||a[a.length-1]=="/"||a[a.length-1]=="*"||a[a.length-1]=="+"||a[a.length-1]=="-"||a[a.length-1]=="%"){a[a.length-1]="-";}
 else{ document.getElementById("result").value+="-"}
 }

function onemulti(){
  let a=document.getElementById("result").value;
  if(document.getElementById("result").value==""){
    alert("Invalid move")
  }
  else if(a[a.length-1]=="."||a[a.length-1]=="/"||a[a.length-1]=="*"||a[a.length-1]=="+"||a[a.length-1]=="-"||a[a.length-1]=="%"){a[a.length-1]="*";}
 else{ document.getElementById("result").value+="*"}
 }

function onediv(){
  let a=document.getElementById("result").value;
  if(document.getElementById("result").value==""){
    alert("Invalid move")
  }
  else if(a[a.length-1]=="."||a[a.length-1]=="/"||a[a.length-1]=="*"||a[a.length-1]=="+"||a[a.length-1]=="-"||a[a.length-1]=="%"){a[a.length-1]="/";}
 else{ document.getElementById("result").value+="/"}
 }
 function onemod(){
  let a=document.getElementById("result").value;
  if(document.getElementById("result").value==""){
    alert("Invalid move")
  }
  else if(a[a.length-1]=="."||a[a.length-1]=="/"||a[a.length-1]=="*"||a[a.length-1]=="+"||a[a.length-1]=="-"||a[a.length-1]=="%"){a[a.length-1]="%";}
 else{ document.getElementById("result").value+="%"}
 }


 function fin(){
  let r=document.getElementById("result");
  let v=document.getElementById("res");
  if(r.value==""){
    v.value="Empty"
  }
  else if(r.value[r.value.length-1]=="."||r.value[r.value.length-1]=="/"||r.value[r.value.length-1]=="*"||r.value[r.value.length-1]=="+"||r.value[r.value.length-1]=="-"||r.value[r.value.length-1]=="%"){v.value="Error"}
  else{
    let a=document.getElementById("result").value;
    a=eval(a);
    document.getElementById("res").value=a;
  }
 }

// on and off of  calculator
   function calcOn(){
  document.getElementById("calc").style.display="block";
    let disp =document.getElementById("displayscreen");
    let rota=document.getElementById("rotate");
      let sinc= document.getElementById("scientific")
  if(disp.style.width!="100%"&&sinc.style.display=="grid"){disp.style.width="173.4%";
sinc.style.display="grid"}{

  }
  document.getElementById("displayscreen").style.width="100.7%";
  document.getElementById("rotate").style.transform=" rotate(0deg)";
 }

 function calcOff(){
  document.getElementById("calc").style.display="none";
  document.getElementById("scientific").style.display="none"
  clearall()
 }
