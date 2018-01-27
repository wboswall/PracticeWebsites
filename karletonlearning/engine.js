var numRegistrants=0;
var totalCost=0;
if(i=0;i<=0;)
{
	document.getElementById('receipt').innerHTML="Error! Sorry, can't compute, need at least 1 person to make this worth it!";
}
else if(i=0; i<=1||i>=4;)
{
	total=numRegistrants*100;
	document.getElementById('receipt').innerHTML="Total Registrants and cost is: "+numRegistrants+" "+total;
}
else if(i=0; i<=5||i>=10;)
{
	total=numRegistrants*80;
	document.getElementById('receipt').innerHTML="Total Registrants and cost is: "+numRegistrants+" "+total;
}
else if(i=0; i>=11;)
{
	total=numRegistrants*60;
	document.getElementById('receipt').innerHTML="Total Registrants and cost is: "+numRegistrants+" "+total;
}
