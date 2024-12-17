class Persona{
    
    constructor (identificacion,nombre,edad, sexo, profesion, correo, telefono, empresa, tipo_persona){
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.profesion = profesion;
        this.correo = correo;
        this.telefono = telefono;
        this.empresa = empresa;
        this.tipo_persona  = tipo_persona;
    }

}

function crearPersona(identificacion,nombre, edad, sexo, profesion, correo, telefono, empresa, tipo_persona) {
    return new Persona(identificacion,nombre, edad, sexo, profesion, correo, telefono, empresa, tipo_persona);
}

function eliminarPersona(identificacion) {
    const index = personas.findIndex(persona => persona.identificacion === identificacion);
    
    if (index !== -1) {
        personas.splice(index, 1);
        console.log(`Persona con numero de identificacion ${identificacion} fue eliminada.`);
    } else {
        console.log(`Persona con Cedula ${correo} no fue encontrada.`);
    }
}

const persona1 = crearPersona(12345678,'Admin', 30, 'Masculino', 'Desarrollador', 'david.perez@gmail.com', '1234567890', 'TechCorp', 'Empleado');
console.log(persona1);

