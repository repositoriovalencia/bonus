// se declara una constante pera diferenciar la variable que importa
//mediante "./" se identifica que se esta importando un script de un archivo propio y no externo
const {cursos, obtenerCurso} = require('./informacion_cursos');
//significa que todo lo que esta en el script informacion_cursos, se va a guardar  en las variables constantes
//console.log(cursos1.cursos);
//console.log(cursos);

obtenerCurso(cursos.node.id, cursos.node.duracion, cursos.node.valor, 'node', 2000,function(resultado){
	console.log('Curso node= ' + resultado);	
})

obtenerCurso(cursos.javascript.id, cursos.javascript.duracion, cursos.javascript.valor, 'javascript', 4000,function(resultado){
	console.log('Curso javascript= ' + resultado);	
})

obtenerCurso(cursos.scrum.id, cursos.scrum.duracion, cursos.scrum.valor, 'scrum', 6000,function(resultado){
	console.log('Curso scrum= ' + resultado);	
})
