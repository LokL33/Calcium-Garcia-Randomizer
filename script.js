var num1 = Math.round(Math.random()*21);
var num2 = Math.round(Math.random()*21);
var num3 = Math.round(Math.random()*21);


document.getElementById("first").innerHTML=num1;
document.getElementById("secn").innerHTML=num2;
document.getElementById("third").innerHTML=num3;

if(num1>=num2 && num1>=num3){
	document.getElementById('most').innerHTML="Bubbles saved "+num1+" animals<333";
}else if(num2>=num1 && num2>=num3){
	document.getElementById('most').innerHTML="The amount of buildings Mojo Jojo destroyed were "+num2+"!";
}else if(num3>=num1 && num3>=num2){
	document.getElementById('most').innerHTML="There were "+num3+" bad guys that Buttercup beat up!";
}


switch(num1){
	case 1:
		document.getElementById('guy').innerHTML="The name of the person they saved started with the letter A :OO";
		break;
	case 2:
		document.getElementById('guy').innerHTML="The name of the person they saved started with the letter B :OO";
		break;
	case 3:
		document.getElementById('guy').innerHTML="The name of the person they saved started with the letter C :OO";
		break;
	case 4:
		document.getElementById('guy').innerHTML="The name of the person they saved started with the letter D:OO";
		break;
	case 5:
		document.getElementById('guy').innerHTML="The name of the person they saved started with the letter E :OO";
		break;
	case 6:
	document.getElementById('guy').innerHTML="The name of the person they saved started with the letter F :OO";
		break;
	case 7:
	document.getElementById('guy').innerHTML="The name of the person they saved started with the letter G :OO";
		break;
	case 8:
	document.getElementById('guy').innerHTML="The name of the person they saved started with the letter H :OO";
		break;
	case 9:
	document.getElementById('guy').innerHTML="The name of the person they saved started with the letter I :OO";
		break;
	case 10:
	document.getElementById('guy').innerHTML="The name of the person they saved started with the letter J :OO";
		break;
	case 11:
	document.getElementById('guy').innerHTML="The name of the person they saved started with the letter K :OO";
		break;
	case 12:
	document.getElementById('guy').innerHTML="The name of the person they saved started with the letter L :OO";
		break;
	case 13:
	document.getElementById('guy').innerHTML="The name of the person they saved started with the letter M :OO";
		break;
	case 14:
	document.getElementById('guy').innerHTML="The name of the person they saved started with the letter N :OO";
		break;
	case 15:
	document.getElementById('guy').innerHTML="The name of the person they saved started with the letter O :OO";
		break;
	case 16:
	document.getElementById('guy').innerHTML="The name of the person they saved started with the letter P :OO";
		break;
	case 17:
	document.getElementById('guy').innerHTML="The name of the person they saved started with the letter Q :OO";
		break;
	case 18:
	document.getElementById('guy').innerHTML="The name of the person they saved started with the letter R :OO";
		break;
	case 19:
	document.getElementById('guy').innerHTML="The name of the person they saved started with the letter S :OO";	
		break;
	case 20:
	document.getElementById('guy').innerHTML="The name of the person they saved started with the letter T :OO";
		break;

}


var tick = num2*num3;
var hour = Math.floor(tick/60);
var min = (tick%60);

if(hour>0 && min>0){
	document.getElementById('time').innerHTML="And it only took them "+"("+tick+" mins) "+hour+" hour/s and "
+min+" minutes to save the day B)";
}else if (hour=0){
	document.getElementById('time').innerHTML="And it only took them "+"("+tick+" mins) "+min+" minute/s to save the day B)";
}else if(tick=0){
	document.getElementById('time').innerHTML="And it only took them "+"("+tick+" mins) "+hour+" hour/s to save the day B)";
}else{
	document.getElementById('time').innerHTML="And they saved the day in the speed of light B) "+"("+tick+" mins) ";
}