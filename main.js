//Introducción a JavaScript
const imagenes = [
  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=200&q=80"
];

const contenedor = document.getElementById('contenedor');

//En JS tenemos las fuenciones de tipo flecha
//Utilizaresmos fetch que es un método para consumir una API
//Paso 1: Función flecha
const consumirApi = () => {
fetch("https://jsonplaceholder.typicode.com/users")
     //Convertimos la respuesta a tipo "JSON"
     .then((response) => response.json())

     //Los datos los vamos a amandar a la consola:
     .then((data) => {

     //La data de la API la vamos a llevar al HTML
     //Paso 1: Definimos las constantes que vamos a usar y el HTML que vamos a afectar

    data.forEach((user, index) => {
      contenedor.innerHTML += `
        <div class="col-md-4">
          <div class="profile-card card">
            <div class="card-header"></div>
            <div class="card-body">
              <img src="${imagenes[index]}" alt="Usuario ${index + 1}" class="profile-img rounded-circle" />
               <h4 class="card-title">${user.name}</h4>
              <p class="text-muted">@${user.username}</p>
             <p><i class="bi bi-envelope me-2"></i>${user.email}</p>
              <p><i class="bi bi-telephone me-2"></i>${user.phone}</p>
              <p><i class="bi bi-globe me-2"></i>${user.website}</p>
              <p><i class="bi bi-geo-alt me-2"></i>${user.address.street}</p>
              <p><i class="bi bi-house-door me-2"></i>${user.address.suite}</p>
              <p><i class="bi bi-building me-2"></i>${user.address.city}</p>
              <p><i class="bi bi-mailbox me-2"></i>${user.address.zipcode}</p>
              <p><i class="bi bi-geo-alt me-2"></i>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>

              <div class="social-icons">
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-twitter"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      `;
    });
})

  //Descubrir qué hacer en caso de que no me corresponda
     .catch((error) => console.log(error));
};

consumirApi();

  //*******************************************************************************************************************/

// Tarea: Agregar otra API
const consumeApi = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
};

consumeApi();

//Tarea sobre métodos y arreglos en java script
/*Tarea 2: Mostrar los datos del objeto en el HTML
adedress": {
     "street": "Rex Trail",
     "suite": "suite 280",
     "city": "Howemouth",
     "zipcode": "58804-1099",
*/
//Tarea 3: 