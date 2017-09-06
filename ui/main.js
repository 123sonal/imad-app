//counter code
var button=document.getElementById('counter');
button.onclick=function ()
{   
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