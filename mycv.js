function draw(j,n) {
	
	var i,uh,y,z,h,w, T, F,tt, c,de;
	uh = 1.1;
	var canvas = document.getElementById("canvas");
	var container = document.getElementById("container");
	var canvasC = document.getElementById("Cloud");
	var ctx = canvas.getContext("2d");
	var ctxC = canvasC.getContext("2d");
	// Width et height de l'Ã©cran
	Width = window.innerWidth;
	Height = window.innerHeight;
	
	
	ctx.font = "30px Arial";
	
	// Canvas dimension
	canvas.width = 1243;
	canvas.height = 591;
	
	// Canvas Cloud dimension
	canvasC.width = 1243;
	canvasC.height = 591;
	
	MyWidth = canvas.width;
	MyHeight = canvas.height;
	
	MyMargW = ((Width - MyWidth-2 )/2);
	MyMargH = ((Height - MyHeight-2)/2);
	console.log("Dim","marge "+MyMargW+" CWidth "+MyWidth+" Width :"+Width);
	if(MyMargW >= 0){
		container.style.margin = MyMargH+" "+MyMargW;
	}
	else{
		container.style.margin = 0;
	}
	
	//fond ciel
	if(n==0,j==1){
		var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
		gradient.addColorStop("0","rgb(164, 201, 255)");
		gradient.addColorStop("0.5","rgba(164, 201, 255,.9)");
		gradient.addColorStop("1.0","rgb(164, 201, 255)");
		ctx.fillStyle =gradient;
	}
	else{
		ctx.fillStyle ="rgba(15,15,15,.2)";
	}
	ctx.fillRect (0, 0, MyWidth, MyHeight);// x y width height
	
	// quai
	rotateRectangle(0, MyHeight-380, MyWidth, 29,  -.50, '#707675');
	
	
	
	immeuble3D(70, MyHeight-460,170,100,10,'#c1cbd4',.51);// im 1 
	
	immeuble3D(50, MyHeight-450,20,90,8,'#c1cbd4',.51);// im 0-1
	 
	immeuble3D(260, MyHeight-480, 100,120,10,'#e5e3dd',.51); //im2
	
	immeuble3D(240, MyHeight-450,20,90,8,'#c1cbd4',.51);// im 1-2
			
	immeuble3D(400, MyHeight-496, 100,135,8,'#fde4c2',.51); //im3
	
	immeuble3D(500, MyHeight-460, 170,100,10,'#e1ba6f',.51); //im4
	
	immeuble3D(750, MyHeight-440, 100,75,10,'#d6d5d3',.51); //im5 
	
	immeuble3D(950, MyHeight-610,100,240,30,'#e7e9ee',.51);// im Big
	
	// Piste cyclable
	y =0;
	rotateRectangle(0, MyHeight-95, MyWidth, 135, -.5, 'rgb(93, 91, 94)'); // Piste
	rotateRectangle(0,  MyHeight-95, MyWidth, 5, -.5, 'rgba(255, 255,255,1)'); // Bande blanche top
	rotateRectangle(0,  MyHeight-5, MyWidth, 5, -.5, 'rgba(255, 255,255,1)'); // Bande blanche footer
	while(y < MyWidth){
		rotateRectangle(y,  MyHeight-50, 200, 5, -.5, 'rgba(255, 255,255,.8)');
		y += 300;
	}

		
	//immeuble 0-1
	rectangle(50, MyHeight-450,20, 90,"#c1cbd4"); //
	for(i=0;i<7;i++){
		if(i==6){
			rectangle(52, MyHeight-449+i*12,16, 8,"#46494e");
		}else{
			rectangle(52, MyHeight-449+i*12.5,16, 8,"rgba(102, 88, 71,8)");
		}
	}
	// immeuble 1
	rectangle(70, MyHeight-460,170, 100,"#c1cbd4");
	y = 70;
	z = 5;
	h = 0;
	while(y < 240){
		ctx.fillStyle = "rgba(73, 81, 83,.8)";		
		ctx.fillRect (y, MyHeight-460+z, 16, 8);// x y width height
		y += 17;
		if(y >= 240 && h < 5){
			y = 70;
			z += 13;
			h+= 1;
		}
	}	
	
	//immeuble 1-2
	rectangle(240, MyHeight-450,20, 90,"#c1cbd4");
	for(i=0;i<7;i++){	
		if(i==6){
			rectangle(242, MyHeight-449+i*12,16, 8,"#46494e");
		}else{
			rectangle(242, MyHeight-449+i*12.5,16, 8,"rgba(102, 88, 71,8)");
		}
	}
	//face immeuble 1
	rectangle(50, MyHeight-377, 209, 17,"rgba(73, 81, 83,.8)"); // façade
	// rectangle(263, MyHeight-375, 10, 15,"#795548"); // porte
	// rectangle(278, MyHeight-380, 55, 5,"#fffeee");
	
	// rectangle(278, MyHeight-373, 15, 8,"#303133");
	// rectangle(298, MyHeight-373, 15, 8,"#303133");
	// rectangle(318, MyHeight-373, 15, 8,"#303133");
	
	// immeuble 2 
	rectangle(260, MyHeight-480, 100, 120,"#e5e3dd");
	x=0;y =0;
	while(x<=75 && y <=65){
		rectangle(270+x, MyHeight-470+y, 10, 10,"#6e6761");// fenetre
		x+=25;
		if(y <= 65 && x == 75){
			rectangle(270+x, MyHeight-470+y, 10, 10,"#6e6761");// fenetre
			x =0;
			y += 13;
		}
		
	}	
	//face immeuble 2
	rectangle(260, MyHeight-380, 100, 20,"#c4c6c3"); // façade
	rectangle(263, MyHeight-375, 10, 15,"#795548"); // porte
	rectangle(278, MyHeight-380, 55, 5,"#fffeee");
	
	rectangle(278, MyHeight-373, 15, 8,"#303133");
	rectangle(298, MyHeight-373, 15, 8,"#303133");
	rectangle(318, MyHeight-373, 15, 8,"#303133");
	
	
	rectangle(338, MyHeight-379, 20, 19,"#cfd0cb"); // garage
	
	// immeuble 3
	rectangle(400, MyHeight-496, 100, 135,"#fde4c2");
	x=0;
	for(i=0;i<3;i++){
		immeuble3D(404.5+x, MyHeight-503, 25,10,2,'#fde4c2',.12); //im3
		rectangle(404.5+x, MyHeight-503, 25, 10,"#fde4c2");// haut immeuble 3 
		x+=30;
	}
	x=0;
	for(i=0;i<3;i++){			
		ctx.fillStyle = "#929298";		
		ctx.fillRect (407.5+x, MyHeight-490.5,9, 9);// x y width height
		ctx.fillRect (417.5+x, MyHeight-490.5,9, 9);// x y width height
		x+=30;
		if(i==1){
			ctx.fillStyle = "#c9c8c6";		
			ctx.fillRect (407, MyHeight-375,13, 14);// x y width height
			ctx.fillRect (421, MyHeight-375,13, 14);// x y width height
			ctx.fillRect (435, MyHeight-375,13, 14);// x y width height
			ctx.fillRect (449, MyHeight-375,13, 14);// x y width height
		}
		if(i==2){
			ctx.fillStyle = "#6d6d6d";		
			ctx.fillRect (471, MyHeight-375,13, 14);// x y width height
			ctx.fillRect (485,MyHeight-375,13, 14);// x y width height
		}
	}
	y=0;
	x=0;
	z =0;
	de =1;
	c = 0;
	for(i=0;i<63;i++){	
		if(i == c){
			c = c + 9;
			x += 11;
		}
		else if(i == de){
			de = c+1;
			x += 11;
		}else{
			ctx.fillStyle = "#929298";		
			ctx.fillRect (404.5+x, MyHeight-475+y,9, 9);// x y width height
			x+=10.5;
		}
		if(x >= 94.5 && z <9){
			x = 0;
			y += 15;  
			z++;
		}
	}
	
	// immeuble 4
	rectangle(500, MyHeight-461, 170, 100,"#e1ba6f");
	x=0;
	for(i=0;i<6;i++){
		immeuble3D(510+x, MyHeight-472, 20,15,2,'#e1ba6f',.12); //im4
		rectangle(510+x, MyHeight-472, 20, 15,"#e1ba6f");// haut immeuble 4 
		x+=23;
		if(i==0){
			rectangle(505, MyHeight-371, 40, 10,"#1d5548");// fenetre gauche
			rectangle(555, MyHeight-371, 7, 10,"#9c98a2"); // gauche fenetre 
			rectangle(563, MyHeight-371, 7, 10,"#9c98a2");// droite fenetre
			rectangle(585, MyHeight-371, 15, 10,"#763c24"); // Porte
			rectangle(605, MyHeight-371, 65, 10,"#d14f4f"); // 
		}
	}
	y=0;
	x=0;
	z =0;
	for(i=0;i<36;i++){			
		ctx.fillStyle = "#fde7b7";		
		ctx.fillRect (514+x, MyHeight-465+y,6, 12);// x y width height
		ctx.fillRect (521+x, MyHeight-465+y,6, 12);// x y width height
		x+=23;
		if(x >= 138 && z <6){
			x = 0;
			y += 15;  
			z++;
		}
		if(i>0 && i<24){			
			ctx.fillStyle = "#fde7b7";		
			ctx.fillRect (602, MyHeight-450+y,3, 6);// x y width height
		}
	}
			
	// immeuble 5		
	rectangle(750, MyHeight-440, 100, 75,"#d6d5d3");
	var tabi5 = [19,8,10,8,10,8,10,8,19];
	var pos =0;var test=0;
	for(i=0;i<9;i++){
		if(tabi5[i] == 19 || tabi5[i] == 10){
			ctx.fillStyle = "#d2cdc7";
			ctx.fillRect (750+pos, MyHeight-440,tabi5[i], 60);
		}
		else{
			ctx.fillStyle = "#6c7979";
			ctx.fillRect (750+pos, MyHeight-440,tabi5[i], 60);
		}
		test += tabi5[i];
		pos += tabi5[i];
	}

	tt =0;
	for(i=0;i<5;i++){
			ctx.fillStyle = "#d2cdc7";
			ctx.beginPath();
			ctx.moveTo(750,MyHeight-440+tt);
			ctx.lineTo(850,MyHeight-440+tt);	
			ctx.fill();
			ctx.closePath();
			ctx.lineWidth = 3;
			ctx.strokeStyle = '#d2cdc7';
			ctx.stroke();
			tt+=12.5;
		if(i==1){
			ctx.fillStyle = "#5478b8";		
			ctx.fillRect (750, MyHeight-375,30, 10);// x y width height
			
			ctx.fillStyle = "#d14f4f";
			ctx.fillRect (785, MyHeight-375,7, 10);// x y width height
			
			ctx.fillStyle = "#b27155";
			ctx.fillRect (797, MyHeight-375,50, 10);// x y width height
		}
	}
	
	
	// immeuble big
	var tabiB = [14.625, 3.5, 1.75, 7, 5, 3.5, 1.75, 3.5, 5, 3.5, 1.75, 3.5, 5, 3.5, 1.75, 3.5, 5, 7, 1.75, 3.5, 14.625];
	var debile =0;var test=0;
	for(i=0;i<21;i++){
		if(tabiB[i] == 1.75){
			ctx.fillStyle = "#fff";
			ctx.fillRect (950+debile, MyHeight-610,tabiB[i], 240);
		}
		else if(tabiB[i] == 14.625){
			ctx.fillStyle = "#f0f0ee";
			ctx.fillRect (950+debile, MyHeight-610,tabiB[i], 240);
		}
		else if(tabiB[i] == 3.5){
			ctx.fillStyle = "#646a76";
			ctx.fillRect (950+debile, MyHeight-610,tabiB[i], 240);
		}
		else if(tabiB[i] == 5){
			ctx.fillStyle = "#f0f0ee";
			ctx.fillRect (950+debile, MyHeight-610,tabiB[i], 240);
		}
		else{
			ctx.fillStyle = "#646a76";
			ctx.fillRect (950+debile, MyHeight-610,tabiB[i], 240);
		}
		test += tabiB[i];
		debile += tabiB[i];
	}
	
	tt =0;
	for(i=0;i<20;i++){
			ctx.beginPath();
			ctx.moveTo(964.625,MyHeight-610+tt);
			ctx.lineTo(1041.25,MyHeight-610+tt);	
			ctx.fill();
			ctx.closePath();
			ctx.strokeStyle = '#f0f0ee';
			ctx.stroke();
			tt+=12;
	}	
	
	// Troittoire pavé
	z = 0;var dim=13;
	h = 105;w = -100.5;		
	rotateRectangle(0, MyHeight-195, MyWidth, 100, -.6, 'rgba(112, 118, 117,.8)');
	rotateRectangle(0, MyHeight-195, MyWidth, 5, -.6, 'rgb(112, 118, 117)');
	rotateRectangle(0, MyHeight-100, MyWidth, 5, -.6, 'rgb(112, 118, 117)');
	ctx.transform(1,-0.010,0,1,0,0);
	while(z <= MyWidth && h <= 209){
		rotateRectangle(z, MyHeight - h, dim, 13, -.5, 'rgba(255, 255,255,.1)');
		z += dim +.5;
		if(z >= MyWidth){
			dim -= 1;
			z = w;
			w += 12.5;
			h +=14;
		}
	}
	
	// bord de quai
	rotateRectangle(0, MyHeight-288, MyWidth, 100, -.05, '#c2b8ac');
	z=0;
	h=190;
	w=-65;
	while(z <= MyWidth && h <=288){
		ctx.fillStyle = "#b6aea3";		
		ctx.fillRect (z, MyHeight - h,1, 1);// x y width height
		z += 1.5;
		if(z >= MyWidth && h <=340){
			z = w;
			w += 3;
			h += 4;
		}
	}
	z = MyWidth-280;
	h = 202;
	var t=0;
	ctx.save();
	
	y =0;var test=0;
	ctx.rotate(-0.3);ctx.transform(1,0.2,0,1,0,0);

	while(t<=63 && y <=120){
		rotateRectangle(1012-t ,520-y, 7, 9,0, '#959999');		
		t+=7;
		if(y <= 120 && t == 63){
			test+=.05;
			rotateRectangle(1012-t ,520-y, 7, 9,0, '#959999');		
			t =0;
			y += 10-test;
		}
		
	}
	ctx.restore();
	ctx.save();
	ctx.fillStyle = '#707675';
	ctx.beginPath();
	ctx.moveTo(1080,300);
	ctx.lineTo(1075,300);			
	ctx.lineTo(1115,405);			
	ctx.lineTo(1125,405);			
	ctx.lineTo(1200,402);				
	ctx.lineTo(1195,400);				
	ctx.lineTo(1125,400);
	ctx.lineTo(1085,300);
	ctx.lineTo(1080,300);
	ctx.fill();
	ctx.closePath();
	ctx.lineWidth = 0.001;
	ctx.strokeStyle = 'rgba(15,15,15,.001)';
	ctx.stroke();
	
	
	ctx.beginPath();
	ctx.moveTo(1140,300);
	ctx.lineTo(1147,300);			
	ctx.lineTo(1195,405);			
	ctx.lineTo(1210,405);			
	ctx.lineTo(1157,300);	
	ctx.lineTo(1140,300);	
	ctx.fill();
	ctx.closePath();
	ctx.lineWidth = 0.001;
	ctx.strokeStyle = 'rgba(15,15,15,.001)';
	ctx.stroke();
	ctx.restore();

	
	// quai
	rotateRectangle(0, MyHeight-298, MyWidth, 10,  0, '#707675');		
	z = 0;var dim=5;
	h = 298;w = -62;	
	while(z <= MyWidth && h <= 305){
		rotateRectangle(z, MyHeight - h, dim, 7, -5, 'rgba(255, 255,255,.1)');
		z += dim +.7;
		if(z >= MyWidth){
			dim -= .5;
			z = w;
			w += 12.5;
			h +=7;
		}
	}
	// fleuve
	rotateRectangle(0, MyHeight-348, MyWidth, 50, -.05, '#223634');
	// quai
	rotateRectangle(0, MyHeight-352, MyWidth, 5,  -.05, '#707675');
	
	
		//route	
	ctx.fillStyle = '#3c3a3f';
	ctx.beginPath();
	ctx.moveTo(0,MyHeight-347);
	ctx.lineTo(MyWidth,MyHeight-347);
	ctx.lineTo(MyWidth,MyHeight-352);
	ctx.lineTo(0,MyHeight-352);
	ctx.fill();
	ctx.closePath();
	ctx.lineWidth = 0.4;
	ctx.strokeStyle = '#fff';
	ctx.stroke();
	y=0;
	while(y < MyWidth){
		rotateRectangle(y,  MyHeight-349.5, 3, .5, 0, 'rgba(255, 255,255,.8)');
		y += 10;
	}
	ctx.fillStyle = '#3c3a3f';
	ctx.beginPath();
	ctx.moveTo(730,MyHeight-352);
	ctx.lineTo(700,MyHeight-352);
	ctx.lineTo(670,MyHeight-375);
	ctx.lineTo(690,MyHeight-375);
	ctx.fill();
	ctx.closePath();
	ctx.lineWidth = 0.4;
	ctx.strokeStyle = '#fff';
	ctx.stroke();
	

	// immeuble right
	ctx.fillStyle = "rgba(147, 139, 114,1)";
	ctx.fillRect (1110, MyHeight-402,240, 80);// x y width height
	ctx.save();
	ctx.fillStyle = 'rgba(147, 139, 114,1)';
	ctx.beginPath();
	ctx.moveTo(1110+240,MyHeight-402);
	ctx.lineTo(1110+240-15,MyHeight-402-5);
	ctx.lineTo(1110-15,MyHeight-402-5);
	ctx.lineTo(1110-15,MyHeight-402-10);
	ctx.lineTo(1110-15,MyHeight-402+50);
	ctx.lineTo(1110,MyHeight-402+80);
	ctx.lineTo(1110,MyHeight-402);
	ctx.lineTo(1110+240,MyHeight-402);			
	ctx.fill();
	ctx.closePath();
	ctx.lineWidth = .51;
	ctx.strokeStyle = 'rgba(15,15,15,.3)';
	ctx.stroke();

	ctx.fillStyle = '#d6cab7';
	ctx.beginPath();
	ctx.moveTo(1097-5,MyHeight-344);//1097
	ctx.lineTo(1110-5,MyHeight-315);
	ctx.lineTo(1300,MyHeight-315);
	ctx.lineTo(1300,MyHeight-322);
	ctx.lineTo(1110,MyHeight-322);
	ctx.lineTo(1097,MyHeight-347);
	ctx.lineTo(0,MyHeight-347);
	ctx.lineTo(0,MyHeight-344);
	ctx.lineTo(1092,MyHeight-344);
	ctx.fill();
	ctx.closePath();
	ctx.lineWidth = .51;
	ctx.strokeStyle = '#707675';
	ctx.stroke();
	
	ctx.fillStyle = '#888582';
	ctx.beginPath();
	ctx.moveTo(0,MyHeight-344);
	ctx.lineTo(1092,MyHeight-344);
	ctx.lineTo(1105,MyHeight-315);
	ctx.lineTo(1300,MyHeight-315);
	ctx.lineTo(1300,MyHeight-313);
	ctx.lineTo(1103,MyHeight-313);
	ctx.lineTo(1092,MyHeight-338);
	ctx.lineTo(1080,MyHeight-341);
	ctx.lineTo(0,MyHeight-341);
	ctx.lineTo(0,MyHeight-344);
	ctx.fill();
	ctx.closePath();
	ctx.lineWidth = 0;
	ctx.strokeStyle = '#888582';
	ctx.stroke();
	ctx.restore();

	T =10;
	F = 900;
	for(i=0;i<8;i++){					
		arbuste(F-70, MyHeight-420,.1);	
		flittleTree(F*10, MyHeight+120*10.5,.1);
		Tree(F*10,MyHeight+120*10.5,.1);
		F+=20;			
	}
	F=0;
	for(i=0;i<30;i++){
			flittleTree(F, MyHeight+120*4.5,.15);
			flittleTree(F, MyHeight+135*4.5,.15);
			if(i <15){
				flittleTree(F*2, MyHeight+105*4.5,.15);
			}
			Tree(F,MyHeight+120*4.6,.15);	
			F+=200;
	}		
	T=0;
	for(i=0;i<6;i++){
		boue((650+T)*2,  (MyHeight-355)*2.23);
		T+=75;
	}
	
	//panneau
	rectangle(920,MyHeight-245,4, 40,"#000");
	rectangle(921,MyHeight-345,2, 100,"#000");
	panneau(907,MyHeight-355,30,2, 20,"#0f0f31","#23601b",0,0);
	demiCercle(922,MyHeight-355,10,Math.PI, Math.PI*2,"#0f0f31","#23601b");
	//text panneau
	text(922,MyHeight-358,"19° Arr",25,"3px Arial","white","center");	
	text(922,MyHeight-348,"PROMENADE",25,"5px Arial","white","center");
	text(922,MyHeight-340,"ÉRIC TABERLY",25,"5px Arial","white","center");

	

	//Lampadaire premier plan 
	lampadaire(551.5,220,27,13,25,12.5,55,1);
	//Lampadaire deuxième plan
	lampadaire(200,220*-3.8,27,13,25,12.5,55,.2);
	
	lampadaire(200*10,220*-3.8,27,13,25,12.5,55,.2);
	lampadaire(200*20,220*-3.8,27,13,25,12.5,55,.2);
	lampadaire(200*30,220*-3.8,27,13,25,12.5,55,.2);
	
	//Lampadaire lumière 
	if(n == 1 && j == 0){
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(540,55);
		ctx.lineTo(400,490);
		ctx.lineTo(740,495);
		ctx.lineTo(590,55);
		ctx.fillStyle = "rgba(161, 140, 16,.5)";			
		ctx.fill();  
		ctx.lineWidth="1"; 
		ctx.strokeStyle = "rgba(161, 140, 16,.5)";
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
		var light = 0;
		for(i=0;i<4;i++){			
			ctx.beginPath();
			ctx.moveTo(37+light,225);
			ctx.lineTo(0+light,310);
			ctx.lineTo(90+light,310);
			ctx.lineTo(47+light,225);
			ctx.fillStyle = "rgba(161, 140, 16,.5)";			
			ctx.fill();  
			ctx.lineWidth="1"; 
			ctx.strokeStyle = "rgba(161, 140, 16,.5)";
			ctx.stroke();
			ctx.closePath();
			if(i == 1 || i == 2){
				light += 400;
			}
			else{
				light += 360;
			}
		}
	}
	panneau(552,MyHeight-350,24,2, 30,"#0000ff","#fff",0.05,-.03); // panneau 
	setTimeout(start(552,MyHeight-328,18,"\uf206",0.03,0.05),1000); // texte panneau
	
	setTimeout(start(555,MyHeight-610,25,"\uf206",-(90*Math.PI/180),0),1000);//velo droite
	setTimeout(start(50,MyHeight-12,30,"\uf178",0,0),1000);//flèche droite
	
	setTimeout(start(-540,MyHeight-515,22,"\uf206",(90*Math.PI/180),0),1000);//velo gauche
	setTimeout(start(20,MyHeight-58,30,"\uf177",0,0),1000);//flèche gauche

	
	text(MyWidth/2,50,"Décoder la réalité",200,"900 50px Arial","#eee","left");
	//sun / moon,
	var testttt =0;
	if(n==0,j==1){
		demiCercle(0,0,40,Math.PI*-1, Math.PI*2,"#f4d264","#f4d264");
		for(i=0;i<7;i++){
			//cloud( 50+testttt, 10);
			testttt += 150;
		}
	}
	else{
		demiCercle(0,0,40,Math.PI*-1, Math.PI*2,"#d8d6d7","#d8d6d7");
	}

/*     var posX = 250;
	var Maxpos = 250;
    var vitesseX =2;
    
	if(n==0 && j==1){
		$("#Cloud").addClass("true").removeClass("false");
		var myInterval = setInterval(animate, 1000/30);
	}else{
		$("#Cloud").addClass("false").removeClass("true");
	} */	 
	function animate(){
		ctxC.clearRect(0, 0, MyWidth, MyHeight);
		drawShape(posX-250, -150);
/* 		cloud(posX-1200, 30);
		cloud(posX-900, 30);
		cloud(posX-600, 30);
		cloud(posX-250, 30);
		cloud(posX, 30);
		cloud(posX+300, 10);
		cloud(posX+800, 10);
		cloud(posX+1200, 10); */
		// console.log("test",Maxpos+" "+MyWidth);
		if(posX >= MyWidth || posX <= 0){
			vitesseX *= -1;
		}   
		posX += vitesseX;
	}
	function cloud( x, y) {
		ctxC.save();
		ctxC.beginPath();
		ctxC.moveTo(45 + x, 18 + y);
		ctxC.bezierCurveTo(43 + x, 9 + y, 120 + x, 24 + y, 125 + x, 11 + y);
		ctxC.bezierCurveTo(130 + x, -3 + y, 259 + x, -1 + y, 274 + x, 10 + y);
		ctxC.bezierCurveTo(289 + x, 21 + y, 248 + x, 32 + y, 239 + x, 35 + y);
		ctxC.bezierCurveTo(219 + x, 41 + y, 170 + x, 18 + y, 135 + x, 39 + y);
		ctxC.bezierCurveTo(123 + x, 46 + y, 25 + x, 40 + y, 45 + x, 19 + y);
		ctxC.fillStyle = "rgba(238, 238, 238,.1)";			
		ctxC.fill();  
		ctxC.lineWidth=".2"; 
		ctxC.closePath();
		ctxC.restore();
	}
	function drawShape( xoff, yoff) {
		ctxC.save();
		ctxC.beginPath();
		ctxC.scale(.5,.5);
		  ctxC.moveTo(70 + xoff, 218 + yoff);
		  ctxC.bezierCurveTo(42 + xoff, 224 + yoff, 34 + xoff, 158 + yoff, 63 + xoff, 158 + yoff);
		  ctxC.bezierCurveTo(65 + xoff, 158 + yoff, 64 + xoff, 158 + yoff, 63 + xoff, 157 + yoff);
		  ctxC.bezierCurveTo(46 + xoff, 140 + yoff, 75 + xoff, 105 + yoff, 87 + xoff, 117 + yoff);
		  ctxC.bezierCurveTo(88 + xoff, 118 + yoff, 90 + xoff, 119 + yoff, 89 + xoff, 117 + yoff);
		  ctxC.bezierCurveTo(67 + xoff, 72 + yoff, 143 + xoff, 44 + yoff, 165 + xoff, 77 + yoff);
		  ctxC.bezierCurveTo(167 + xoff, 80 + yoff, 165 + xoff, 79 + yoff, 165 + xoff, 79 + yoff);
		  ctxC.bezierCurveTo(169 + xoff, 59 + yoff, 215 + xoff, 65 + yoff, 215 + xoff, 90 + yoff);
		  ctxC.bezierCurveTo(215 + xoff, 98 + yoff, 206 + xoff, 94 + yoff, 216 + xoff, 92 + yoff);
		  ctxC.bezierCurveTo(261 + xoff, 84 + yoff, 290 + xoff, 164 + yoff, 234 + xoff, 183 + yoff);
		  ctxC.bezierCurveTo(231 + xoff, 184 + yoff, 229 + xoff, 181 + yoff, 231 + xoff, 187 + yoff);
		  ctxC.bezierCurveTo(238 + xoff, 209 + yoff, 229 + xoff, 185 + yoff, 232 + xoff, 187 + yoff);
		  ctxC.bezierCurveTo(237 + xoff, 190 + yoff, 221 + xoff, 197 + yoff, 225 + xoff, 200 + yoff);
		  ctxC.bezierCurveTo(229 + xoff, 203 + yoff, 262 + xoff, 266 + yoff, 183 + xoff, 253 + yoff);
		  ctxC.bezierCurveTo(174 + xoff, 252 + yoff, 180 + xoff, 248 + yoff, 180 + xoff, 252 + yoff);
		  ctxC.bezierCurveTo(180 + xoff, 267 + yoff, 150 + xoff, 288 + yoff, 120 + xoff, 270 + yoff);
		  ctxC.bezierCurveTo(107 + xoff, 262 + yoff, 101 + xoff, 233 + yoff, 111 + xoff, 231 + yoff);
		  ctxC.bezierCurveTo(115 + xoff, 230 + yoff, 109 + xoff, 233 + yoff, 110 + xoff, 232 + yoff);
		  ctxC.bezierCurveTo(121 + xoff, 221 + yoff, 97 + xoff, 248 + yoff, 80 + xoff, 241 + yoff);
		  ctxC.bezierCurveTo(70 + xoff, 237 + yoff, 60 + xoff, 227 + yoff, 71 + xoff, 220 + yoff);
		ctxC.fillStyle = "rgba(238, 238, 238,.2)";			
		ctxC.fill();  
		ctxC.lineWidth=".2"; 
		ctxC.closePath();
		ctxC.restore();
}
	function lampadaire(x,y,w,w2,w3,w4,w5,sc){
		ctx.save();
		ctx.scale(sc,sc);
		rectangle(x-4,MyHeight-y+97.5,w+8, 15,"#1d1b1e");
		rectangle(x,MyHeight-y+1,w, 110,"#1d1b1e");
		rectangle(x+7,MyHeight-y-290,w2, 290,"#1d1b1e");
		if(n == 0 && j == 1){
			demiCercle(x+13.5,MyHeight-y-314,w3,Math.PI*0, Math.PI*1,"rgba(235,235,235,.5)","#1d1b1e");
			demiCercle(x+13.5,MyHeight-y-315,w4,Math.PI*0, Math.PI*2,"#fffbdb","rgba(235,235,235,.4)");
		}else{
			demiCercle(x+13.5,MyHeight-y-314,w3,Math.PI*0, Math.PI*1,"#f4d264","#1d1b1e");
			demiCercle(x+13.5,MyHeight-y-315,w4,Math.PI*0, Math.PI*2,"#F4D210","#F4D210");
		}
		
		rectangle(x-13.5,MyHeight-y-324,w5, 10,"#1d1b1e");
		rectangle(x,MyHeight-y-333,w, 10,"#1d1b1e");
		rectangle(x+7,MyHeight-y-353,w2, 20,"#1d1b1e");
		ctx.restore();
	}
	

	
	function text(x,y,txt,width,size,color,align){
		ctx.save();	
		ctx.fillStyle = "#fff";	
		ctx.beginPath();
		ctx.font = size;
		ctx.textAlign = align;
		ctx.fillText(txt, x, y,width);	
		ctx.closePath();
		ctx.restore();	
	}
	function demiCercle(x,y,width,deb,fin,color,col){		
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle=col;   
		ctx.lineWidth="2";   
		ctx.arc(x, y, width, deb,fin);
		ctx.fillStyle=color;
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	}
	function rotateRectangle(x, y, width, height, degrees,color) {
		ctx.save();
		ctx.beginPath();
		ctx.translate(x + width / 2, y + height / 2);
		ctx.rotate(degrees * Math.PI / 180);
		ctx.rect(-width / 2, -height / 2, width, height);
		ctx.fillStyle = color;
		ctx.fill();
		ctx.closePath();
		ctx.restore();
	}
	
	function immeuble3D(x,y,w,h,di, color,lw){
		ctx.save();
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.moveTo(x+w,y);
		ctx.lineTo(x+w-di-5,y-di);
		ctx.lineTo(x-di,y-di);
		ctx.lineTo(x-di,y+h-10);
		ctx.lineTo(x,y+h);
		ctx.lineTo(x,y);
		ctx.lineTo(x+w,y);			
		ctx.fill();
		ctx.closePath();
		ctx.lineWidth = lw;
		ctx.strokeStyle = 'rgba(15,15,15,.3)';
		ctx.stroke();
		ctx.restore();	
	}
	
	function Tree(x, y,sc) {
		ctx.save();
		ctx.beginPath();
		ctx.scale(sc,sc);
		ctx.fillStyle = "rgba(96, 56, 19,.8)";
		ctx.moveTo(145 + x, 496 + y);
		ctx.bezierCurveTo(131 + x, 502 + y, 182 + x, 485 + y, 187 + x, 466 + y);
		ctx.bezierCurveTo(191 + x, 451 + y, 191 + x, 255 + y, 176 + x, 251 + y);
		ctx.bezierCurveTo(161 + x, 247 + y, 158 + x, 254 + y, 139 + x, 255 + y);
		ctx.bezierCurveTo(124 + x, 256 + y, 72 + x, 267 + y, 57 + x, 267 + y);
		ctx.bezierCurveTo(42 + x, 267 + y, 30 + x, 272 + y, 19 + x, 267 + y);
		ctx.bezierCurveTo(13 + x, 264 + y, 52 + x, 259 + y, 60 + x, 258 + y);
		ctx.bezierCurveTo(79 + x, 255 + y, 29 + x, 246 + y, 35 + x, 241 + y);
		ctx.bezierCurveTo(41 + x, 236 + y, 71 + x, 255 + y, 83 + x, 255 + y);
		ctx.bezierCurveTo(98 + x, 255 + y, 67 + x, 237 + y, 70 + x, 233 + y);
		ctx.bezierCurveTo(72 + x, 230 + y, 90 + x, 254 + y, 101 + x, 248 + y);
		ctx.bezierCurveTo(114 + x, 241 + y, 163 + x, 250 + y, 177 + x, 241 + y);
		ctx.bezierCurveTo(183 + x, 237 + y, 191 + x, 233 + y, 175 + x, 228 + y);
		ctx.bezierCurveTo(167 + x, 226 + y, 163 + x, 219 + y, 150 + x, 219 + y);
		ctx.bezierCurveTo(137 + x, 219 + y, 90 + x, 200 + y, 75 + x, 199 + y);
		ctx.bezierCurveTo(57 + x, 198 + y, 30 + x, 195 + y, 12 + x, 182 + y);
		ctx.bezierCurveTo(0 + x, 173 + y, 59 + x, 201 + y, 57 + x, 187 + y);
		ctx.bezierCurveTo(56 + x, 181 + y, 53 + x, 188 + y, 43 + x, 171 + y);
		ctx.bezierCurveTo(39 + x, 164 + y, 55 + x, 169 + y, 63 + x, 186 + y);
		ctx.bezierCurveTo(69 + x, 198 + y, 165 + x, 214 + y, 150 + x, 211 + y);
		ctx.bezierCurveTo(135 + x, 208 + y, 193 + x, 233 + y, 199 + x, 219 + y);
		ctx.bezierCurveTo(202 + x, 212 + y, 184 + x, 204 + y, 172 + x, 202 + y);
		ctx.bezierCurveTo(157 + x, 200 + y, 151 + x, 184 + y, 136 + x, 188 + y);
		ctx.bezierCurveTo(121 + x, 192 + y, 71 + x, 159 + y, 58 + x, 152 + y);
		ctx.bezierCurveTo(46 + x, 146 + y, 33 + x, 144 + y, 24 + x, 132 + y);
		ctx.bezierCurveTo(5 + x, 108 + y, 39 + x, 145 + y, 45 + x, 131 + y);
		ctx.bezierCurveTo(51 + x, 118 + y, 61 + x, 89 + y, 62 + x, 78 + y);
		ctx.bezierCurveTo(65 + x, 55 + y, 61 + x, 123 + y, 52 + x, 135 + y);
		ctx.bezierCurveTo(46 + x, 143 + y, 82 + x, 166 + y, 85 + x, 153 + y);
		ctx.bezierCurveTo(88 + x, 138 + y, 89 + x, 129 + y, 84 + x, 104 + y);
		ctx.bezierCurveTo(81 + x, 89 + y, 99 + x, 137 + y, 91 + x, 153 + y);
		ctx.bezierCurveTo(84 + x, 166 + y, 180 + x, 188 + y, 201 + x, 203 + y);
		ctx.bezierCurveTo(212 + x, 211 + y, 170 + x, 161 + y, 157 + x, 154 + y);
		ctx.bezierCurveTo(148 + x, 149 + y, 146 + x, 167 + y, 137 + x, 171 + y);
		ctx.bezierCurveTo(123 + x, 177 + y, 154 + x, 155 + y, 145 + x, 143 + y);
		ctx.bezierCurveTo(139 + x, 135 + y, 110 + x, 105 + y, 108 + x, 90 + y);
		ctx.bezierCurveTo(107 + x, 82 + y, 114 + x, 63 + y, 113 + x, 79 + y);
		ctx.bezierCurveTo(112 + x, 94 + y, 114 + x, 110 + y, 129 + x, 107 + y);
		ctx.bezierCurveTo(144 + x, 104 + y, 133 + x, 51 + y, 135 + x, 42 + y);
		ctx.bezierCurveTo(138 + x, 27 + y, 148 + x, 116 + y, 136 + x, 114 + y);
		ctx.bezierCurveTo(121 + x, 112 + y, 149 + x, 133 + y, 155 + x, 140 + y);
		ctx.bezierCurveTo(165 + x, 151 + y, 169 + x, 83 + y, 171 + x, 68 + y);
		ctx.bezierCurveTo(174 + x, 48 + y, 173 + x, 124 + y, 168 + x, 142 + y);
		ctx.bezierCurveTo(162 + x, 165 + y, 211 + x, 195 + y, 214 + x, 201 + y);
		ctx.bezierCurveTo(221 + x, 214 + y, 164 + x, -2 + y, 190 + x, 30 + y);
		ctx.bezierCurveTo(199 + x, 42 + y, 200 + x, 99 + y, 204 + x, 113 + y);
		ctx.bezierCurveTo(212 + x, 141 + y, 220 + x, 33 + y, 217 + x, 18 + y);
		ctx.bezierCurveTo(214 + x, 3 + y, 230 + x, 24 + y, 226 + x, 41 + y);
		ctx.bezierCurveTo(223 + x, 56 + y, 217 + x, 97 + y, 224 + x, 85 + y);
		ctx.bezierCurveTo(232 + x, 72 + y, 263 + x, 22 + y, 282 + x, 10 + y);
		ctx.bezierCurveTo(294 + x, 2 + y, 212 + x, 109 + y, 214 + x, 124 + y);
		ctx.bezierCurveTo(220 + x, 168 + y, 221 + x, 184 + y, 225 + x, 199 + y);
		ctx.bezierCurveTo(229 + x, 215 + y, 248 + x, 192 + y, 247 + x, 161 + y);
		ctx.bezierCurveTo(247 + x, 146 + y, 235 + x, 93 + y, 246 + x, 82 + y);
		ctx.bezierCurveTo(257 + x, 71 + y, 270 + x, 58 + y, 283 + x, 76 + y);
		ctx.bezierCurveTo(292 + x, 88 + y, 306 + x, 78 + y, 316 + x, 67 + y);
		ctx.bezierCurveTo(334 + x, 48 + y, 373 + x, 12 + y, 337 + x, 53 + y);
		ctx.bezierCurveTo(321 + x, 71 + y, 306 + x, 92 + y, 292 + x, 86 + y);
		ctx.bezierCurveTo(278 + x, 80 + y, 261 + x, 57 + y, 263 + x, 89 + y);
		ctx.bezierCurveTo(264 + x, 103 + y, 341 + x, 96 + y, 326 + x, 100 + y);
		ctx.bezierCurveTo(314 + x, 103 + y, 277 + x, 106 + y, 264 + x, 99 + y);
		ctx.bezierCurveTo(251 + x, 92 + y, 265 + x, 98 + y, 250 + x, 97 + y);
		ctx.bezierCurveTo(235 + x, 96 + y, 261 + x, 159 + y, 251 + x, 182 + y);
		ctx.bezierCurveTo(245 + x, 196 + y, 274 + x, 166 + y, 274 + x, 145 + y);
		ctx.bezierCurveTo(274 + x, 138 + y, 272 + x, 146 + y, 268 + x, 131 + y);
		ctx.bezierCurveTo(264 + x, 115 + y, 144 + x, 28 + y, 161 + x, 32 + y);
		ctx.bezierCurveTo(176 + x, 35 + y, 275 + x, 111 + y, 284 + x, 141 + y);
		ctx.bezierCurveTo(291 + x, 166 + y, 220 + x, 220 + y, 230 + x, 231 + y);
		ctx.bezierCurveTo(247 + x, 250 + y, 369 + x, 134 + y, 365 + x, 97 + y);
		ctx.bezierCurveTo(363 + x, 79 + y, 369 + x, 113 + y, 351 + x, 122 + y);
		ctx.bezierCurveTo(334 + x, 131 + y, 421 + x, 122 + y, 407 + x, 132 + y);
		ctx.bezierCurveTo(395 + x, 141 + y, 349 + x, 123 + y, 339 + x, 134 + y);
		ctx.bezierCurveTo(327 + x, 148 + y, 311 + x, 160 + y, 299 + x, 180 + y);
		ctx.bezierCurveTo(290 + x, 194 + y, 281 + x, 200 + y, 268 + x, 214 + y);
		ctx.bezierCurveTo(258 + x, 225 + y, 248 + x, 233 + y, 260 + x, 241 + y);
		ctx.bezierCurveTo(296 + x, 265 + y, 202 + x, 223 + y, 214 + x, 236 + y);
		ctx.bezierCurveTo(224 + x, 247 + y, 236 + x, 248 + y, 215 + x, 251 + y);
		ctx.bezierCurveTo(202 + x, 253 + y, 261 + x, 246 + y, 255 + x, 258 + y);
		ctx.bezierCurveTo(253 + x, 262 + y, 274 + x, 262 + y, 293 + x, 261 + y);
		ctx.bezierCurveTo(308 + x, 260 + y, 336 + x, 214 + y, 337 + x, 231 + y);
		ctx.bezierCurveTo(338 + x, 247 + y, 318 + x, 254 + y, 307 + x, 264 + y);
		ctx.bezierCurveTo(296 + x, 274 + y, 353 + x, 261 + y, 340 + x, 268 + y);
		ctx.bezierCurveTo(327 + x, 275 + y, 204 + x, 269 + y, 204 + x, 254 + y);
		ctx.bezierCurveTo(204 + x, 239 + y, 203 + x, 455 + y, 212 + x, 467 + y);
		ctx.bezierCurveTo(221 + x, 478 + y, 275 + x, 503 + y, 261 + x, 497 + y);
		ctx.fill();
		ctx.closePath();
		ctx.lineWidth = 1;
		ctx.strokeStyle = '#603813';
		ctx.stroke();	
		ctx.restore();	
	}

	function flittleTree(x, y,sc) {
		ctx.save();
		ctx.fillStyle = "rgba(81, 134, 68,.6)";
		ctx.scale(sc,sc);
		ctx.beginPath();
		ctx.moveTo(165 + x, 277 + y);
		ctx.bezierCurveTo(151 + x, 272 + y, 120 + x, 279 + y, 105 + x, 283 + y);
		ctx.bezierCurveTo(90 + x, 287 + y, 53 + x, 255 + y, 46 + x, 268 + y);
		ctx.bezierCurveTo(39 + x, 281 + y, 30 + x, 219 + y, 26 + x, 233 + y);
		ctx.bezierCurveTo(22 + x, 247 + y, 16 + x, 178 + y, 14 + x, 193 + y);
		ctx.bezierCurveTo(12 + x, 208 + y, 29 + x, 116 + y, 11 + x, 127 + y);
		ctx.bezierCurveTo(-2 + x, 135 + y, 37 + x, 82 + y, 37 + x, 67 + y);
		ctx.bezierCurveTo(37 + x, 52 + y, 91 + x, 18 + y, 101 + x, 9 + y);
		ctx.bezierCurveTo(112 + x, -1 + y, 226 + x, 1 + y, 256 + x, 1 + y);
		ctx.bezierCurveTo(271 + x, 1 + y, 364 + x, 16 + y, 349 + x, 14 + y);
		ctx.bezierCurveTo(334 + x, 12 + y, 382 + x, 35 + y, 371 + x, 45 + y);
		ctx.bezierCurveTo(352 + x, 63 + y, 382 + x, 126 + y, 373 + x, 114 + y);
		ctx.bezierCurveTo(364 + x, 101 + y, 379 + x, 227 + y, 356 + x, 168 + y);
		ctx.bezierCurveTo(351 + x, 154 + y, 362 + x, 237 + y, 354 + x, 224 + y);
		ctx.bezierCurveTo(340 + x, 202 + y, 333 + x, 227 + y, 336 + x, 240 + y);
		ctx.bezierCurveTo(339 + x, 255 + y, 307 + x, 235 + y, 307 + x, 250 + y);
		ctx.bezierCurveTo(307 + x, 264 + y, 293 + x, 255 + y, 296 + x, 270 + y);
		ctx.bezierCurveTo(300 + x, 290 + y, 215 + x, 272 + y, 201 + x, 276 + y);
		ctx.fill();
		ctx.closePath();
		ctx.lineWidth = 1;
		ctx.strokeStyle = '#000';
		ctx.stroke();
		ctx.restore();	
	}
	function arbuste(x, y) {
		ctx.save();
		ctx.fillStyle = "rgba(81, 134, 68,.7)";
		ctx.beginPath();
		ctx.moveTo(43 + x, 70 + y);
		ctx.bezierCurveTo(43 + x, 52 + y, 31 + x, 41 + y, 20 + x, 58 + y);
		ctx.bezierCurveTo(16 + x, 64 + y, 7 + x, 46 + y, 10 + x, 40 + y);
		ctx.bezierCurveTo(17 + x, 28 + y, 0 + x, 24 + y, 5 + x, 6 + y);
		ctx.bezierCurveTo(9 + x, -8 + y, 18 + x, 7 + y, 19 + x, 11 + y);
		ctx.bezierCurveTo(21 + x, 22 + y, 31 + x, 21 + y, 38 + x, 6 + y);
		ctx.bezierCurveTo(44 + x, -6 + y, 44 + x, 23 + y, 55 + x, 17 + y);
		ctx.bezierCurveTo(56 + x, 16 + y, 45 + x, 3 + y, 56 + x, 2 + y);
		ctx.bezierCurveTo(74 + x, 0 + y, 48 + x, 52 + y, 60 + x, 36 + y);
		ctx.bezierCurveTo(86 + x, 2 + y, 73 + x, 66 + y, 58 + x, 69 + y);
		ctx.fill();
		ctx.closePath();
		ctx.lineWidth = .1;
		ctx.strokeStyle = '#000';
		ctx.stroke();
		ctx.restore();
	}
	function boue(x, y) {
		ctx.save();
		ctx.fillStyle = "#ffeb3b";
		ctx.scale(.5,.5);
		ctx.beginPath();
		ctx.moveTo(10 + x, 31 + y);
		ctx.bezierCurveTo(9 + x, 20 + y, 8 + x, 12 + y, 18 + x, 12 + y);
		ctx.bezierCurveTo(24 + x, 12 + y, 25 + x, 18 + y, 25 + x, 30 + y);
		ctx.fill();
		ctx.closePath();
		ctx.lineWidth = .11;
		ctx.strokeStyle = '#ffeb3b';
		ctx.stroke();
		ctx.restore();	
	}
	
	function rectangle(x,y,width,height,color){
		ctx.fillStyle = color;
		ctx.fillRect (x,y, width, height);
	}
	function panneau(x,y,width,lw,height,color,col,trans,rot){
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle=col;   
		ctx.lineWidth=lw;   
		ctx.transform(1,trans,0,1,0,0);
		ctx.rotate(rot);
		ctx.rect(x,y,width,height);
		ctx.fillStyle=color;
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
		ctx.restore();	
	}
	
	window.addEventListener( 'resize', onWindowResize, false );
	window.addEventListener( 'keydown', function(event){NianNian(MyWidth,Width,MyHeight,Height,event)}, false );
	window.addEventListener( 'keydown',  function(event){noNianNian(event)}, false );
	
	// NianNian(MyWidth,Width,MyHeight,Height);
	function start(x,y,w,ico,rot,trans){
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle="white";
		ctx.lineWidth=1; 
		ctx.transform(1,trans,0,1,0,0);
		ctx.rotate(-rot); 
		ctx.font="100 "+w+"px FontAwesome";
		ctx.fillText(ico,x,y);
		ctx.closePath();
		ctx.restore();
	}
}

function onWindowResize(){
	setTimeout(function(){draw(1,0)},100); 		
}
function noNianNian(event){
	if ( event.which == 13) {
		setTimeout(function(){draw(1,0)},2000); 
		$("#night").removeAttr( "style" );
		$("#imgJ1").offset({left: 60});
		$("#jouet").find('img').removeClass("true").addClass("false");
		$("#night").removeClass("true").addClass("false");
		$("#jouet").removeClass("true").addClass("false");
	}
}
function NianNian(mw,w,mh,h,event){
	if ( event.which == 27 ) {
	setTimeout(function(){draw(0,1)},2000); 
	var h,m;
	h = (h - mh)/2;
	m = (w - mw)/2;
	if(w < mw){
		$("#night").offset({ top: 0, left: 0 });
	}else{
		$("#night").offset({ top: h, left: m });
	}
	
	$("#night").css({"width": MyWidth, "height": MyHeight});
	
	// $("#jouet").offset({left: 0,top:255});
	// $("#jouet").find("#imgJ1").animate({left:mw}, 1500);
	// var offsetI = $("#imgJ1").offset();
	// $("#jouet").find("#imgJ1").animate({left:mw-15}, 1500);
	
	//$("#jouet").find("#imgJ1").hide;
	
	// $("#jouet").find('img').removeClass("false").addClass("true");
	$("#night").removeClass("false").addClass("true");
	// $("#jouet").removeClass("false").addClass("true");
	// setTimeout(function(){hid(m)},1500); 
	// function hid(mwidth){
		// $("#jouet").find("#imgJ1").hide();
		// $("#imgJ1").offset({left: mwidth});
	// }
	}
	// window.requestAnimationFrame(draw);
}
// window.requestAnimationFrame(draw);
jQuery(document).ready(function($){
	$(function () {
		$("#canvas").on("dblclick" ,function() {
			$("#canvas").addClass("scale");
		});
		$("#canvas").on("click" ,function() {
			$("#canvas").removeClass("scale");
		});
	});
});
$(window).on('load', function(){
	setTimeout(function(){draw(1,0);},50);
});