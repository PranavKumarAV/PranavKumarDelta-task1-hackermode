var nos=document.querySelectorAll(".numbers");
var container=document.querySelector(".container");
var play=document.querySelector(".ln1");
var bsc=document.querySelectorAll(".val");
var show=document.querySelector(".showscore");
var time=document.querySelector(".time");
var total=document.querySelector(".new");
var diff=document.querySelectorAll(".diff");
var tot=document.querySelector(".total");
var sound=new Audio();
sound.src="shotgun-mossberg590-RA_The_Sun_God-451502290-[AudioTrimmer.com].mp3";
var m=36;
var prevar=0;
var beste=[];
var bestm=[];
var besth=[];
var stop=0;
var temp=0;
if((localStorage.getItem("easy"))!=null){beste=JSON.parse(localStorage.getItem("easy"));}
if((localStorage.getItem("medium"))!=null){bestm=JSON.parse(localStorage.getItem("medium"));}
if((localStorage.getItem("hard"))!=null){besth=JSON.parse(localStorage.getItem("hard"));}
function prodsound(){
	sound.play();
}
for(var k=0;k<3;k++){
	diff[k].addEventListener("click",function(){
		prevar=0;
		clearInterval(stop);
		time.textContent=0;
		show.textContent="";
	    total.classList.remove("hide");
		nos=document.querySelectorAll(".numbers");
		if(this.textContent=="Easy"){
		m=16;
		tot.style.maxHeight="300px";
	    tot.style.maxWidth="300px";
		container.classList.add("rowstyle1");
		container.classList.remove("container");
		container.classList.remove("rowstyle2");
	}else if(this.textContent=="Medium"){
		m=36;
		tot.style.maxHeight="400px";
	    tot.style.maxWidth="460px";
		container.classList.remove("rowstyle1");
		container.classList.add("container");
		container.classList.remove("rowstyle2");
	}else{
		m=64;
		tot.style.maxHeight="400px";
	    tot.style.maxWidth="460px";
		container.classList.remove("rowstyle1");
		container.classList.remove("container");
		container.classList.add("rowstyle2");
	}
	eraseall();
	allocatenos();
	});
 }
for(i=0;i<nos.length;i++){
	nos[i].addEventListener("click",function(){
		this.style.background="black";
		var check=this.textContent;
		if(prevar==(Number(check)-1)){
			prevar+=1;
			if(check==1){
			stop=setInterval(runtime,100);
		    }else if(check==m){
			    clearInterval(stop);
			    this.textContent="";
			    if(Number(time.textContent)<60){show.textContent="Your Score is "+time.textContent+" sec";}else{show.textContent="Your Score is "+(Math.floor(Number(time.textContent)/60))+" min "+(Math.round((Number(time.textContent)%60)*10)/10)+" sec"}
			    for(var j=0;j<m;j++){
            	nos[j].style.width=0;
            	nos[j].style.padding=0;
            	nos[j].style.margin=0;
            }
			    temp=time.textContent;
			    if(m==16){
			    	show.style.transform="translate(0px,250px)";
			    	dobestscorese(temp);
			    }else if(m==36){dobestscoresm(temp);
			    	show.style.transform="translate(0px,290px)";
			    }else if(m==64){dobestscoresh(temp);
			    	show.style.transform="translate(0px,290px)";
			    }
			    
			    total.classList.add("hide");
		    }
		}else if(check==""){}
			else{
			eraseall();
			show.textContent="GAME OVER!!!";
			if(m==16){
			    	show.style.transform="translate(0px,250px)";
			    }else{
			    	show.style.transform="translate(0px,290px)";
			    }
			total.classList.add("hide");
			for(var j=0;j<m;j++){
            	nos[j].style.width=0;
            	nos[j].style.padding=0;
            	nos[j].style.margin=0;
            }

		}
		this.textContent="";
});
}
function runtime(){
	time.textContent=((Number(time.textContent)*10)+1)/10;
}
function allocatenos(){
	for(var j=0;j<64;j++){
    	nos[j].style.width="20px";
	    nos[j].style.padding="10px 10px";
	    nos[j].style.margin="1px";
    }
	var t;
	for(t=0;t<m;t++){
	while(nos[t].textContent==""){
		var k=0;
		var randint=getRandomInt(m);
		for(var j=0;j<t;j++){
			if(nos[j].textContent==randint){
				k++;
				break;
			}
		}
		if(k==0){
			nos[t].style.background="rgb(255, 230, 0)";
			nos[t].textContent=randint;
			if(m==16){if(randint==1){nos[t].style.opacity="0.23";}else if(randint==2){nos[t].style.opacity="0.25";}else if(randint==3){nos[t].style.opacity="0.27";}else if(randint==4){nos[t].style.opacity="0.3";}else{nos[t].style.opacity=0.0625*randint;}}
			else if(m==36){if(randint==1){nos[t].style.opacity="0.21";}else if(randint==2){nos[t].style.opacity="0.22";}else if(randint==3){nos[t].style.opacity="0.23";}else if(randint==4){nos[t].style.opacity="0.24";}else if(randint==5){nos[t].style.opacity="0.25";}else if(randint==6){nos[t].style.opacity="0.26";}else if(randint==7){nos[t].style.opacity="0.27";}else if(randint==8){nos[t].style.opacity="0.28";}else if(randint==9){nos[t].style.opacity="0.29";}else if(randint==10){nos[t].style.opacity="0.3";}else{nos[t].style.opacity=0.0277*randint;}}
			else{if(randint==1){nos[t].style.opacity="0.287";}else if(randint==2){nos[t].style.opacity="0.289";}else if(randint==3){nos[t].style.opacity="0.291";}else if(randint==4){nos[t].style.opacity="0.293";}else if(randint==5){nos[t].style.opacity="0.295";}else if(randint==6){nos[t].style.opacity="0.297";}else if(randint==7){nos[t].style.opacity="0.299";}else if(randint==8){nos[t].style.opacity="0.301";}else if(randint==9){nos[t].style.opacity="0.303";}else if(randint==10){nos[t].style.opacity="0.305";}else if(randint==11){nos[t].style.opacity="0.307";}else if(randint==12){nos[t].style.opacity="0.309";}else if(randint==13){nos[t].style.opacity="0.311";}else if(randint==14){nos[t].style.opacity="0.313";}else if(randint==15){nos[t].style.opacity="0.315";}else if(randint==16){nos[t].style.opacity="0.317";}else if(randint==17){nos[t].style.opacity="0.319";}else if(randint==18){nos[t].style.opacity="0.321";}else if(randint==19){nos[t].style.opacity="0.323";}else if(randint==20){nos[t].style.opacity="0.325";}else{nos[t].style.opacity=0.0156*randint;}}
			nos[t].style.width="20px";
	        nos[t].style.padding="10px 10px";
	        nos[t].style.margin="1px";
		}
	}
}
for(var j=63;j>=t;j--){
	nos[j].style.width=0;
	nos[j].style.padding=0;
	nos[j].style.margin=0;
}
if(m==16){finalbsc(beste);}
else if(m==36){finalbsc(bestm);}
else{finalbsc(besth);}
}
function finalbsc(b){
	var tmp=[];
	for(var i=0;i<b.length;i++){var str;
		if(b[i]<60){str=(i+1)+". "+b[i]+" sec";}else{
			str=(i+1)+". "+(Math.floor(b[i]/60))+" min "+(Math.round((b[i]%60)*10)/10)+" sec";
		}
		tmp.push(str);
	}
	var j=0;
	for(;j<tmp.length;j++){
		bsc[j].textContent=tmp[j];
	}
	for(;j<5;j++){
		bsc[j].textContent=j+1+". NIL";
	}
}
allocatenos();
function sortarr(b){
	for(var i=0;i<b.length;i++){
		for(var j=i+1;j<b.length;j++){
			if(b[i]>b[j]){
				var tem=b[i];
				b[i]=b[j];
				b[j]=tem;
			}
		}
	}
	return b;
}
function allcomplete(){
	var complete=true;
	for(var i=0;i<nos.length;i++){
		if(nos[i].textContent!=""){
			complete=false;
		}
	}
	return complete;
}
function dobestscorese(temp){
	if(beste.length<5){
		beste.push(Number(temp));
		if(beste.length>1){
		beste=sortarr(beste);	
		}		
	}else{
		if(Number(temp)<beste[4]){
			beste[4]=temp;
			beste=sortarr(beste);}
	}
	localStorage.setItem("easy",JSON.stringify(beste));
	finalbsc(beste);

}
function dobestscoresm(temp){
	if(bestm.length<5){
		bestm.push(Number(temp));
		if(bestm.length>1){
		bestm=sortarr(bestm);	
		}		
	}else{
		if(Number(temp)<bestm[4])
			bestm[4]=temp;
			bestm=sortarr(bestm);
	}
	localStorage.setItem("medium",JSON.stringify(bestm));
	finalbsc(bestm);
}
function dobestscoresh(temp){
	if(besth.length<5){
		besth.push(Number(temp));
		if(besth.length>1){
		besth=sortarr(besth);	
		}		
	}else{
		if(Number(temp)<besth[4])
			besth[4]=temp;
			besth=sortarr(besth);
	}
	localStorage.setItem("hard",JSON.stringify(besth));
	finalbsc(besth);
}
function eraseall(){
	for(var i=0;i<nos.length;i++){
	nos[i].style.background="black";
	nos[i].textContent="";
}
}
function getRandomInt(max) {
  return Math.floor(Math.random() * (max)) + 1;  
}
play.addEventListener("click",function(){
prevar=0;
clearInterval(stop);
show.textContent="";
total.classList.remove("hide");
for(var i=0;i<nos.length;i++){
	nos[i].style.background="grey";
	nos[i].textContent="";
}
time.textContent=0;
allocatenos();
});
//hide the nos box when score is shown
//time in mins and sec
//colour
//sound 1st try for one box and implement for all