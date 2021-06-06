windows.onload=function(){
    //fetchUser('https://randomuser.me/api/')
 
 
 document.getElementById('btn1').onclick=displayhUser
 refreshUser();
 }
 function displayUser(){
 
     fetchUser('http://jsonplaceholder.typicode.com/posts')
   
 }

 function map(){
    const url = 'http://www.mapquestapi.com/geocoding/v1/reverse?key=tWbaBBw92lD6YInMlGnx6xwwj8GpGZVO&location=30.333472,-81.470448';
    fetch(url).then(response => response.json())
        .then(console.log);
}
 
 async function fetchUser(URL){
   let response = await fetch(URL)
   let jsonObj=await response.json();
   let userName=jsonObj.users.name;
  
   let Email=jsonObj.users.email;
   let address=jsonObj.users.address;
  
   document.getElementById('demo').innerHTML=name
   document.getElementById('pho').innerHTML=phoneNumber;
   document.getElementById('email').innerHTML=Email;
   document.getElementById('address').src=address;

//map
   function map(){
    const url = 'http://www.mapquestapi.com/geocoding/v1/reverse?key=tWbaBBw92lD6YInMlGnx6xwwj8GpGZVO&location=30.333472,-81.470448';
    fetch(url).then(response => response.json())
        .then(console.log);
}
   // will fetch every obj with userID=1
   let use=fetch('http://jsonplaceholder.typicode.com/posts?userId=1')
   .then(r=>r.json())
   .then(d.console.log(d));


// gives postId?=1
   let ret=fetch('http://jsonplaceholder.typicode.com/comments?postId=1') 
   .then(res=>res.json())
   .then(out=>console.log(out))