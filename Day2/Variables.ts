//et age:number = 30;
//console.log(age);
/*
exempel 1
function varScope()
{
    if(true)
    {
        var msg = "hello world";
        
    }
     console.log(msg)
}
varScope();
*/


//exempel 2

function blockScope()
{
    if(true)
    {
        let msg = "Hello World";
        const greet ="Hello const";
       
        //console.log(msg);
        //console.log(greet);
    }
    //console.log(msg);
    //console.log(greet);
}
blockScope();