// script.js
document.getElementById('fetch-user').addEventListener('click', fetchUser);

function fetchUser() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://randomuser.me/api/', true);
  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      const user = response.results[0]; // Asegúrate de acceder al primer elemento de results
      if (user) {
        const userData = {
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          phone: user.phone,
          picture: user.picture.thumbnail
        };
        agregarUsuarioLista(userData);
      } else {
        console.error('Datos no encontrados');
      }
    }
  }
  xhr.onerror = function() {
    console.error('Error de peticion...');
  };
  xhr.send();
}

function agregarUsuarioLista(user) {
  const userList = document.getElementById('user-list');
  const listItem = document.createElement('li');

  listItem.innerHTML = `
        <img src="${user.picture}" alt="${user.name}">
        <div>
            <p><strong>Nombre:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Celular:</strong> ${user.phone}</p>
        </div>
        <button class="delete">Eliminar</button>
    `;

  listItem.querySelector('.delete').addEventListener('click', function() {
    userList.removeChild(listItem);
  });

  userList.appendChild(listItem);
}
