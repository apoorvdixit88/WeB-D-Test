

function validateLastName (){//checks if last name is valid

	var ln=document.getElementById("lastname").value;
	var r2= /^[a-zA-Z]\s\'\-']{2,25}$/;
	if (ln != "")   //if true
	{
		alert("last name entered");
		
		return true;
	}
	else
	{     
	alert("please enter something")	;
		
		return false();
	}
}

	
	function validateNum()
	{
		var n=document.getElementById("phn").value;
		if (n == ""){
			document.getElementById("numout").style.color="red";
			document.getElementById("numout").innerHTML="plss enter something";
		}
		else
		{
			document.getElementById("numout").style.color="blue";
			document.getElementById("numout").innerHTML="you entered number:"+n+ " for contact";
		}
	}
	function validateTxt()
	{
		var n=document.getElementById("txt").value;
		if (n == ""){
			document.getElementById("txtout").style.color="red";
			document.getElementById("txtout").innerHTML="plss enter something";
		}
		else
		{
			document.getElementById("txtout").style.color="blue";
			document.getElementById("txtout").innerHTML="VALID";
		}
	}