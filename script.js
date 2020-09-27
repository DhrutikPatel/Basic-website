function signUp()
{
    let x,y,z;
    x=document.forms["join"]["yname"].value;
    y=document.forms["join"]["yphone"].value;
    z=document.forms["join"]["yemail"].value;
    w=document.forms["join"]["ypassword"].value;

    if ( x==null || x=="" || !isNaN(x) )
    {
        alert("Please enter the Name");
        return false;
    }
    if ( z==null || z=="" )
    {
        alert("Please enter your email address");
        return false;
    }
    if ( y==null || y=="" || isNaN(y) || y.length<10 || y.length>10 )
    {
        alert("Please 10 digit enter the phone number");
        return false;
    }
    if( w ==null  || w=="" || w.length<8 )
    {
        alert("Your password should be of 8 digit or more");
        return false;
    }
    return true;
}

function fb(){
    let x = document.forms["feed"]["feedback"].value;
    if(x==""|| x==null){
        alert("Please give your feedback");
        return false;
    }
    else{
        alert("Thank you for your feedback : "+ x);
        return true;
    }
}

function signIn(){
    let x,y;
    x = document.forms["joined"]["remail"].value;
    y = document.forms["joined"]["rpassword"].value;
    if ( x==null || x=="" )
    {
        alert("Please enter your email address");
        return false;
    }
    if( y==null  || y=="")
    {
        alert("Enter your correct password");
        return false;
    }
    return true;
}