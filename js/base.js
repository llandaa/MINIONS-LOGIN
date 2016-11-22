init();
function init(){
	if(!document.addEventListener){
	    window.open('../浏览器/index.html','_self')
	    return
	}
var phoneNum=document.getElementById('phone-num');
var phoneTi=document.getElementById('phone-ti');
var authCode=document.getElementsByClassName('auth-code')[0];
var dongPasswordTi=document.getElementById('dong-password-ti');
var dengLu=document.getElementsByClassName('denglu')[0];
var open1 = false,open2=false;

phoneNum.onblur=function(){
	var req=/^1[3|5|7|8|][0-9]{9}$/;
	if(req.test(phoneNum.value)){
		phoneTi.innerHTML="";
		open1=true;
	}else{
		phoneTi.innerHTML="*请输入正确的手机号";
		open1=false;
	}
}
authCode.onblur=function(){
	var reg=/^\d{6}$/;
	if(reg.test(authCode.value)){
		dongPasswordTi.innerHTML="";
		open2=true;
	}else{
		dongPasswordTi.innerHTML="*请输入6位密码";
		open2=false;
	}
}
dengLu.onclick=function(){
	if(open1 && open2){
		setCookie('phonenum',phoneNum.value,0.1);
	}
	window.open('../MINIONS1/index.html')
}
/********普通登录***/
var dongTai=document.getElementById('dongtai');
var ziDong=document.getElementById('zidong');
var motionBox=document.getElementsByClassName('motion-box')[0];
var commonBox=document.getElementsByClassName('common-box')[0];
dongTai.onclick=function(){
	motionBox.style.display="block";
	commonBox.style.display="none";
}
ziDong.onclick=function(){
	motionBox.style.display="none";
	commonBox.style.display="block";
}


var phoneNum1=document.getElementById('phone-num1');
var phoneTi1=document.getElementById('phone-ti1');
var mimaNum=document.getElementById('mima-num');
var mimaTi=document.getElementById('mima-ti');
phoneNum1.onfocus=function(){
		phoneTi1.innerHTML="请输入登录名,登录名可能是您的手机号或者邮箱";
		open1=true;
}
phoneNum1.onblur=function(){
		phoneTi1.innerHTML="";
		open1=true;
}
mimaNum.onfocus=function(){
		mimaTi.innerHTML="请输入8位密码,可能是字母和数字的组合";
		open2=true;
}
mimaNum.onblur=function(){
		mimaTi.innerHTML="";
		open2=true;
}
}