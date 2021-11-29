//Question1: 5 Random 3 Digit values and then outputs the minimum and the maximum value.

//code to find Maximum number.
{
    var a = Math.floor(Math.random()*900)+100;
    var b = Math.floor(Math.random()*900)+100;
    var c = Math.floor(Math.random()*900)+100;
    var d = Math.floor(Math.random()*900)+100;
    var e = Math.floor(Math.random()*900)+100;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    if(a>b && a>c && a>d && a>e){
        console.log(a+" is Maximum");
    }
    if(b>a && b>c && b>d && b>e){
        console.log(b+" is Maximum");
    }
    if(c>b && c>a && c>d && c>e){
        console.log(c+" is Maximum");
    }
    if(d>b && d>c && d>a && d>e){
        console.log(d+" is Maximum");
    }
    if(e>b && e>c && e>d && e>a){
        console.log(e+" is Maximum");
    }
    
    //code to find minimum number.

    if(a<b && a<c && a<d && a<e){
        console.log(a+" is Minimum");
    }
    if(b<a && b<c && b<d && b<e){
        console.log(b+" is Minimum");
    }
    if(c<b && c<a && c<d && c<e){
        console.log(c+" is Minimum");
    }
    if(d<b && d<c && d<a && d<e){
        console.log(d+" is Minimum");
    }
    if(e<b && e<c && e<d && e<a){
        console.log(e+" is Minimum");
    }
}