var expression="";
var flag=0;
var flag1=0;
document.getElementById("one").addEventListener("click", function (){
	if(flag==0)
	expression+="1";
	else{expression="1";
	flag1=0;
	flag=0;}
	document.getElementById("inputTag").value=expression;
});
document.getElementById("two").addEventListener("click", function (){
	if(flag==0){
	expression+="2";}
	else{expression="2";
	flag1=0;
	flag=0;}
	document.getElementById("inputTag").value=expression;
});
document.getElementById("three").addEventListener("click", function (){
	if(flag==0)
	expression+="3";
	else{expression="3";
	flag1=0;
	flag=0;}
	document.getElementById("inputTag").value=expression;
});
document.getElementById("four").addEventListener("click", function (){
	if(flag==0)
	expression+="4";
	else{expression="4";
	flag1=0;
	flag=0;}
	document.getElementById("inputTag").value=expression;
});
document.getElementById("five").addEventListener("click", function (){
	if(flag==0)
	expression+="5";
	else{expression="5";
	flag1=0;
	flag=0;}	
	document.getElementById("inputTag").value=expression;
});

document.getElementById("six").addEventListener("click", function (){
	if(flag==0)
	expression+="6";
	else{expression="6";
		flag1=0;
		flag=0;}
	document.getElementById("inputTag").value=expression;
});
document.getElementById("seven").addEventListener("click", function (){
	if(flag==0)
	expression+="7";
	else{expression="7";
	flag1=0;
	flag=0;}
	document.getElementById("inputTag").value=expression;
});
document.getElementById("eight").addEventListener("click", function (){
	if(flag==0)
	expression+="8";
	else{expression="8";
		flag1=0;
		flag=0;}
	document.getElementById("inputTag").value=expression;
});
document.getElementById("nine").addEventListener("click", function (){
	if(flag==0)
	expression+="9";
	else{expression="9";
	flag1=0;
	flag=0;}
	document.getElementById("inputTag").value=expression;
});
document.getElementById("zero").addEventListener("click", function (){
	if(flag==0)
	expression+="0";
	else{expression="0";
	flag1=0;
	flag=0;}
	document.getElementById("inputTag").value=expression;
});
document.getElementById("delete").addEventListener("click", function (){
	if(!expression==""){
		expression = expression.substring(0, expression.length - 1);}
	document.getElementById("inputTag").value=expression;
});
document.getElementById("add").addEventListener("click", function (){
	if(!expression==""&&flag1==0)
		expression+="+";
		flag=0;flag1=1
	document.getElementById("inputTag").value=expression;
});
document.getElementById("minus").addEventListener("click", function (){
	if(!expression==""&&flag1==0)
		expression+="-";
		flag=0;flag1=1
	document.getElementById("inputTag").value=expression;
});
document.getElementById("divide").addEventListener("click", function (){
	if(!expression==""&& flag1==0)
		expression+="/";flag=0;flag1=1
	document.getElementById("inputTag").value=expression;
});
document.getElementById("modulo").addEventListener("click", function (){
	if(!expression==""&&flag1==0)
		expression+="%";flag=0;flag1=1
	document.getElementById("inputTag").value=expression;
});
document.getElementById("multiply").addEventListener("click", function (){
	if(!expression==""&&flag1==0)
		expression+="*";
		flag=0;flag1=1
	document.getElementById("inputTag").value=expression;
});
document.getElementById("clear").addEventListener("click", function (){
	expression="";
	flag1=0;
	flag=0;
	document.getElementById("inputTag").value=expression;
});
document.getElementById("dot").addEventListener("click", function (){
		if(flag==0)
		expression+=".";
	else{expression="0.";
		flag1=0;
		flag=0;}
		document.getElementById("inputTag").value=expression;
});
document.getElementById("Enter").addEventListener("click",function(){
	value=eval(expression);
	if(eval(expression.length)>4){
		value=value.toFixed(3)
	}
	document.getElementById("inputTag").value=value;
	expression=value;
	flag=1;flag1=0;
})