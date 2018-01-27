var sales=0;
var totalCommission=0;
var commissionRate=0;
if(i=0;i<=0)
{
	document.getElementById('receipt').innerHTML="Error! Sorry, can't compute, need to make more to make it worth it.";
}
else if(i=0; i>=0||i>=19999.99)
{
	totalCommission=sales*commissionRate;
	document.getElementById('receipt').innerHTML="Total commission is: "+totalCommission;
}
else if(i=0; i<=20000.00||i>=29999.99)
{
	totalCommission=sales*commissionRate;
	document.getElementById('receipt').innerHTML="Total commission is: "+totalCommission;
}
else if(i=0; i<=30000.00||i>=39999.99)
{
	totalCommission=sales*commissionRate;
	document.getElementById('receipt').innerHTML="Total commission is: "+totalCommission;
}
else if(i=0; i<=40000.00||i>=49999.99)
{
	totalCommission=sales*commissionRate;
	document.getElementById('receipt').innerHTML="Total commission is: "+totalCommission;
}
else if(i=0; i>=50000.00)
{
	totalCommission=sales*commissionRate;
	document.getElementById('receipt').innerHTML="Total commission is: "+totalCommission;
}