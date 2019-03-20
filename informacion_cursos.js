//objeto array cursos
let cursos = {
	node:{
		id: '001',
		duracion: 32,
		valor: 100000
	},
	javascript:{
		id: '002',
		duracion: 32,
		valor: 200000
	},
	scrum:{
		id: '003',
		duracion: 32,
		valor: 300000
	}
};

let obtenerCurso = (var_id, var_duracion, var_valor, curso, segundos, callback)=>{
	if (curso == 'node'){
		setTimeout(function(){
		let resultado = ('id: ' + cursos.node.id + ' duracion: ' + cursos.node.duracion + ' valor: ' + cursos.node.valor);	
		callback(resultado);
		},segundos);
	}else if(curso == 'javascript'){
		setTimeout(function(){
		let resultado = ('id: ' + cursos.javascript.id + ' duracion: ' + cursos.javascript.duracion + ' valor: ' + cursos.javascript.valor);
		callback(resultado);
		},segundos);
	}else{
		setTimeout(function(){
		let resultado = ('id: ' + cursos.scrum.id + ' duracion: ' + cursos.scrum.duracion + ' valor: ' + cursos.scrum.valor);
		callback(resultado);
		},segundos);
	}		
};


/*obtenerCurso(cursos.node.id, cursos.node.duracion, cursos.node.valor, 'node', function(resultado){console.log('Curso node= ' + resultado);})

obtenerCurso(cursos.javascript.id, cursos.javascript.duracion, cursos.javascript.valor, 'javascript', function(resultado){
	console.log('Curso javascript= ' + resultado);	
})

obtenerCurso(cursos.scrum.id, cursos.scrum.duracion, cursos.scrum.valor, 'scrum', function(resultado){
	console.log('Curso scrum= ' + resultado);	
})*/


//console.log(obtenerCurso(cursos.node.id, cursos.node.duracion, cursos.node.valor,'node',function(resultado)));
//exporta el objeto cursos y la funcion obtenerCurso 
module.exports = {
	cursos,
	obtenerCurso
};