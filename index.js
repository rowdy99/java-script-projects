function checkloveper()
{
    var name=document.getElementById('name').value;
    var lname=document.getElementById('lname').value;
     
    
    
  
   
     if(name == ""){
   alert('Please enter your name');
  }else if (name.length <=2 ) {
   alert('Min lenght is 3')
  }else if(!isNaN(name)){
   alert('Numbers are not allowed');
  }

  else if(lname == ""){
   alert('Please enter your love name');
  }else if (lname.length <=2 ) {
   alert('Min lenght is 3')
  }else if(!isNaN(lname)){
   alert('Numbers are not allowed');
  }
  else{
 var lovdata = Math.random() * 100;
  lovdata = Math.floor(lovdata)+1;
  document.getElementById('lovevalue').value = lovdata + "%"; 

  if(lovdata >= 90 && lovdata <= 100)
  {
      document.querySelector("h5").innerHTML = "💏🏼 O Ma Go Turu Lab. 💏🏼";
  }

  else if(lovdata >= 70 && lovdata <= 89)
  {
      document.querySelector("h5").innerHTML = " 💑🏼 You made for each other  💑🏼";
  }

  else if(lovdata >= 10 && lovdata <=40 )
  {
     document.querySelector("h5").innerHTML = " 💔 you have to give him/her more time and affection. 💔";
  }

 else if(lovdata >= 41 && lovdata <= 69 )
  {
      document.querySelector("h5").innerHTML = " 💖 you love each other a lot.  💖";
  }
  else{
       document.querySelector("h5").innerHTML = " 🤭 vlobasa naki saradin ghapa-ghap er chinta?  🤭";

  }

  
  }
  
  
      
  
  
   
 
}

 