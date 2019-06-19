var personas=[{id_persona: 1, nombre: "Julian.M" , apellido: "Moreno" , tipoDoc: 1 , nroDoc: "37589654" , fechNacimiento: "null" , 
               sexo: "M" , direccion: "Lisandro de la torre 1273" , piso: null, codPostal: "1838", localidad: 1, telefono: "42969001", 
               celular: "1128802769", email: "julian.a.moreno@hotmail.com"}]

var alumnos= [{id_alumno:1,id_persona: 1,egresadoDe:"Escuela Secundaria N°12",titulo:"Bachiller en electronica",promedio:7}];

var carreras= [{id_carrera:1,carrera:'Tecnico Superior Programacion'},
               {id_carrera:2,carrera:'Tecnico Superior en Sistemas'}];

var materias= [{id_materia:1,legajo:001,materia:'Matematica'},
               {id_materia:2,legajo:002,materia:'Matematica II'},
               {id_materia:3,legajo:002,materia:'Redes'},
               {id_materia:4,legajo:003,materia:'Matematica III'}];

var asignaciones= [{id_asignacion:1,id_materia:1,id_carrera:1,id_curso:1},
                   {id_asignacion:2,id_materia:2,id_carrera:1,id_curso:2},
                   {id_asignacion:3,id_materia:3,id_carrera:2,id_curso:3},
                   {id_asignacion:4,id_materia:4,id_carrera:2,id_curso:4}];

var cursos = [{id_curso:1,descripcion:'1A',turno:'M'},
              {id_curso:2,descripcion:'2B',turno:'T'},
              {id_curso:3,descripcion:'5B',turno:'T'},
              {id_curso:4,descripcion:'6B',turno:'T'}];

var dias_clase=[{id_dia_clase:1,descripcion:"Lunes"},
                {id_dia_clase:2,descripcion:"Martes"},
                {id_dia_clase:3,descripcion:"Miercoles"},
                {id_dia_clase:4,descripcion:"Jueves"},
                {id_dia_clase:5,descripcion:"Viernes"},
                {id_dia_clase:6,descripcion:"Sabado"}];

var horarios_clase=[{id_horario_clase:1,horario_desde:'',horario_hasta:''},
                    {id_horario_clase:2,horario_desde:'',horario_hasta:''}];

var programas= [{id_programa:1,id_asignacion:1,id_dia_clase_1:1,id_dia_clase_2:4,id_horario_clase_1:1,id_horario_clase_2:2}];

var asistencias= [{id_asistencia:1,id_programa:1,id_alumno:1}];


module.exports={personas, alumnos, carreras, materias, carreras,
    asignaciones, cursos, programas, asistencias,dias_clase,horarios_clase}; 