/*Programación orientada a objetos*/

function Person(firstName,lastName,profession,genre,age,city){
	this.firstName=firstName;
	this.lastName=lastName;
	this.profession=profession;
	this.genre=genre;
	this.age=age;
	this.ciy=city;
	this.studies = [];
}

function Animal(name,genre,age,species,numberZoo,zooName,person){
	this.name=name;
	this.genre=genre;
	this.age=age;
	this.species=species;
	this.numberZoo=numberZoo;
	this.zooName=zooName;
}

Animal.prototype={
	constructor:Animal,
	getname: function(){
		console.log("El nombre del animal es"+this.name);
	},
	getgenre: function(){
		console.log("El _ del animal es"+this.genre);
	},
	getage: function(){
		console.log("El _ del animal es"+this.age);
	},
	getspecies: function(){
		console.log("El _ del animal es"+this.species);
	},
	getnumberZoo: function(){
		console.log("El _ del animal es"+this.zoo);
	},
	getzooName: function(){
		console.log("El _ del animal es"+this.zooName);
	}

}

Person.prototype = {
	constructor:Person,
	getFirstName: function(){
		console.log("El nombre de la persona es: "+this.firstName);
	},
	getLastName: function(){
		console.log("El apellido de la persona es: "+this.lastName);
	},
	getProfession: function(){
		console.log("La profesión de la persona es: "+this.profession);
	},
	getGenre: function(){
		console.log("El género de la persona es: "+this.genre);
	},
	getAge: function(){
		console.log("La edad de la persona es: "+this.age);
	},
	getStudies: function(){
		var i =0;
		/*for(i;this.studies){
			console.log("Un estudio de la persona es "+i);
		}*/
		this.studies.forEach(function(data){
			console.log("La profesión es "+data);
		});
	}
}