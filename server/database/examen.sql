create table examenes(
    id int AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(50),
    codigo int,
    fecha_creacion timestamp not null default current_timestamp
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

CREATE TRIGGER generar_codigo_unico_fecha BEFORE INSERT ON examenes
FOR EACH ROW
BEGIN
    DECLARE codigo_generado VARCHAR(20);
    SET codigo_generado = LPAD(FLOOR(RAND() * 999999), 6, '0');
    SET NEW.codigo = CONCAT(NEW.id, codigo_generado);
END;
