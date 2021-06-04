windows.onload=function(){
    //fetchUser('https://randomuser.me/api/')
 
 
 document.getElementById('btn1').onclick=displayhUser
 refreshUser();
 }
 function displayUser(){
 
     fetchUser('http://jsonplaceholder.typicode.com/posts')
   
 }

 window.onload = function(){
    const url = 'http://www.mapquestapi.com/geocoding/v1/reverse?key=tWbaBBw92lD6YInMlGnx6xwwj8GpGZVO&location=30.333472,-81.470448';
    fetch(url).then(response => response.json())
        .then(console.log);
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