create table examenes(
    id int AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(50),
    codigo int,
    fecha_creacion int
);

create table preguntas(
    pregunta_id int AUTO_INCREMENT PRIMARY KEY,
    examen_id int,
    pregunta varchar(200),
    FOREIGN KEY (examen_id) REFERENCES examenes(id)
);

create table respuestas(
    respuesta_id int AUTO_INCREMENT PRIMARY KEY,
    pregunta_id int,
    respuesta varchar(200),
    FOREIGN KEY (pregunta_id) REFERENCES preguntas(pregunta_id)
);
