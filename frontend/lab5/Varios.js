function Suma(a,b){
	this.a=a;
	this.b=b;
}

Suma.prototype={
	constructor:Suma,
	getResult:function(){
		console.log("Resultado es "+(this.a+this.b));
	},
	getA: function(){
		console.log("A es "+(this.a));
	},
	getB: function(){
		console.log("B es "+(this.b));
	}

}

function Multiplica(a){
	this.a=a;
}

Multiplica.prototype={
	constructor:Multiplica,
	getMultiplicacion:function(){
		var i=0;
		var res=1;
		for(i;i<this.a.length;i++){
			res*=this.a[i];
		}
		console.log("Resultado "+res);
	},
	getSuma:function(){
		var i=0;
		var res=0;
		for(i;i<this.a.length;i++){
			res+=this.a[i];
		}
		console.log("Resultado "+res);
	},	
	getConsonantes:function(){
		var abcdario=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		var vocales=["A","E","I","O","U"];
		var i = 0;
		var e =0;
		var array = [];
		var boolean = false;
		for(i;i<abcdario.length;i++){
			while(e<vocales.length){
				if(abcdario[i]===vocales[e]){
					boolean=true;
					e=vocales.length + 2;
				}
				e++;
			}
			e=0;
			if(!boolean){
				array.push(abcdario[i]);
			}
			boolean=false;
		}
		//debugger;
		console.log(array);
	},

	getFizz:function(){
		var a=1;
		for(a;a<101;a++){
			console.log("Numero es "+a);
			var res3 = parseInt(a/3);
			//console.log("Res3 "+res3);
			var res5 = parseInt(a/5);
			//console.log("Res5 "+res5);
			if(a===(res3*3) && a!==(res5*5)){
				console.log("Fizz");
			}else if(a===(res5*5) && a!==(res3*3)){
				console.log("Buzz");
			}else if(a===(res5*5) && a===(res3*3)){
				console.log("Buzz and Fizz");
			}
			else{
				console.log(a);
			}
		}
	}
}

