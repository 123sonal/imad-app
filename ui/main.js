//counter code
var button=document.getElementById('counter');
button.onclick=function (){ 
    
    // create the request object
    var request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some Action
            if(request.status ===200){
                var counter = request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
            //Not Done Yet
};
       // make the request
       request.open('GET' , 'http://u123sonalpimple.imad.hasura-app.io/counter', true);
       request.send(null);
};       

   // submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function (){
   // make a request to server and send the name
   //capture a list of names and render it as list.
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for(var i=0; i< names.length; i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML = list;
};
