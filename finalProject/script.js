windows.onload=function(){
    //fetchUser('https://randomuser.me/api/')
 
 
 document.getElementById('refbtn').onclick=refreshUser
 refreshUser();
 }
 function refreshUser(){
 
     fetchUser('https://randomuser.me/api/')
 }
 
 async function fetchUser(URL){
   let response = await fetch(URL)
   let jsonObj=await response.json();
   let firstName=jsonObj.results[0].name.first
   let lastName=jsonObj.results[0].name.last
   let phoneNumber=jsonObj.results[0].phone;
   let Email=jsonObj.results[0].email;
   let profileImageURL=jsonObj.results[0].picture.large
  
   document.getElementById('demo').innerHTML=(firstName + " "+lastName);
   document.getElementById('pho').innerHTML=phoneNumber;
   document.getElementById('email').innerHTML=Email;
   document.getElementById('pic').src=profileImageURL;