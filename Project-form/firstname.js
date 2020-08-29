function validateFirstName (){//checks if first name is valid
	var fn=document.getElementById("firstName").value;
	var r1= /^[a-zA-Z]\s\'\-]{2,15}$/;
	if (r1.test(fn))//if true
	{
		document.getElementById("firstout").style.color="green";
		document.getElementById("firstout").innerHTML="<strong>valid</strong>"
		return true;
	}
	else
	{
		document.getElementById("firstout").style.color="red";
		document.getElementById("firstout").innerHTML="<strong>enter between 2 and 15 characters</strong>"
		return false;
		
	}
}

document.getElementById("lastout").style.color="green";
		document.getElementById("lastout").innerHTML="<strong>valid</strong>"
		
		document.getElementById("lastout").style.color="red";
		document.getElementById("lastout").innerHTML="<strong>enter between 2 and 20 characters</strong>"