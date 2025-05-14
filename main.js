//En JS tenemos las funciones de tipo flecha
//Utilizaremos fetch que es un metodo para consumir una API

//Paso 1: Funcion flecha
const consumirApi= () => {
 fetch("https://jsonplaceholder.typicode.com/users")
 //Convertimos la respuesta a tipo json
 .then((Response) => Response.json())
 //Los datos los vamos a mandar a la consola
 .then((data)=> console.log(data))
 //Descubrir que hacer en caso de que no me corresponda
 .catch((error)=> console.log(error));
};

consumirApi();