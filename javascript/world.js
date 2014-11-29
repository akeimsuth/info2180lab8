function choice(str){
	if(document.getElementById("check").checked!=true){
		response(str);
	}else{
		all(str);
	}
}

function response(str)
{
if (str.length==0)
  { 
  document.getElementById("result").innerHTML="";
  return;
  }
var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("result").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","world.php?lookup="+str,true);
xmlhttp.send();
}

function all(str)
{
if (str.length==0)
  { 
  document.getElementById("result").innerHTML="";
  return;
  }
var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("result").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","world.php?all="+true,true);
xmlhttp.send();
}
