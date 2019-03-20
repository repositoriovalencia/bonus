let cursos = [{
	id: "001",
	curso: "node",
	duracion: 32,
	valor: 100000
}, {
	id: "002",
	curso: "javascript",
	duracion: 32,
	valor: 200000
}, {
	id: "003",
	curso: "scrum",
	duracion: 32,
	valor: 300000
} ];

let interesado = {
	idCurso:{alias: 'i', demand: true},
	idInteresado:{alias: 'x', demand: true},
	nombreInteresado:{alias: 'n', demand: true}
}
//-----------------------------------------------------------------------------
const argv = require('yargs')
			 .command('inscribir','inscribir interesado',interesado)
			 .argv
//console.log(argv);
const express = require('express')
const app = express()
//-------------------------------------------buscar curso segun el id ingresado
id_buscar = argv.i;
 let mostrarCurso = cursos.find(function(cursoInteresado) {
 if (cursoInteresado == undefined){
 	//no encontrado
 	return cursoInteresado.id = 'nada'
 }else{
 	return cursoInteresado.id == id_buscar
 } 	
 })

if (mostrarCurso==undefined){
	if (argv._[0] != "inscribir") {
   		console.log(" ");
		
	}else{
	console.log('El id del Curso ' + id_buscar + ' no corresponde a un curso ofertado.');
	
	console.log(' ');

	}
	const {cursos, obtenerCurso} = require('./informacion_cursos');
	
	obtenerCurso(cursos.node.id, cursos.node.duracion, cursos.node.valor, 'node', 0,function(resultado){
		console.log('Curso node= ' + resultado);	
	})
	obtenerCurso(cursos.javascript.id, cursos.javascript.duracion, cursos.javascript.valor, 'javascript', 0,function(resultado){
		console.log('Curso javascript= ' + resultado);	
	})
	obtenerCurso(cursos.scrum.id, cursos.scrum.duracion, cursos.scrum.valor, 'scrum', 0,function(resultado){
		console.log('Curso scrum= ' + resultado);	
	})
}else{
		//----------------------------------------------------crear archivo
		//const fs = require('fs');
		//let crearArchivo = (matricula) =>{
		texto=' El estudiante: ' + argv.n + '\n' +
			  ' Con cedula: ' + argv.x + '\n' +
			  ' Se matriculo en el curso: ' + mostrarCurso.curso + '\n' +
			  ' Duracion: ' + mostrarCurso.duracion + '\n' +
			  ' Valor del curso: ' + mostrarCurso.valor


		app.get('/', function (req, res) {
			res.send(texto)
		  //res.send('Hello World')
		  //res.send('<b> hola </b> <br><p> mundo </p>')
		})
		app.listen(3000)
		
/*		fs.writeFile(argv.x + '_matricula.txt',texto,(err)=>{
			if(err) throw (err); 
			console.log('archivo de inscripcion creado')
		});*/
		let mostrar = ('id: ' + argv.i + ' duracion: ' + mostrarCurso.duracion + ' valor: ' + mostrarCurso.valor);	
		console.log('informacion publicada en navegador')
		console.log(mostrar);
	//}
	//crearArchivo(mostrarCurso);
	}

//console.log(id_buscar);
//console.log(cursos);