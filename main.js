function Pokemon(nombre,color){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0

	this.vida = 100
	this.poderDeAtaque = poderDeAtaque

	this.mostrarPokemon = function(){
		return("hola,soy: "+this.nombre + " y soy de color: " + this.color)
	}

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
	}

	this.atacar = function(pokemon){
	 pokemon.vida = pokemon.vida - this.poderDeAtaque
	}
}

const Pikachu = new Pokemon("pikachu","amarillo",100)
const Charmander = new Pokemon("Charmander","rojo",20)

Pikachu.atacar(Charmander)

console.log(Charmander.vida)
