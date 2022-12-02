// Listar categorías
const lista = document.getElementsByClassName("lista-categorias");
function listarCategoriasI() {
  fetch("./json/categories.json")
    .then((respuesta) => respuesta.json())
    .then((categories) => {
      categories.Categories.forEach((categorie) => {
        const category = document.createElement("a");
        category.setAttribute("href", "./pages/" + categorie.nombre + ".html");
        category.classList.add("categoria");
        const imagen = document.createElement("div");
        imagen.classList.add("imagen");
        imagen.innerHTML += `<img src="./assets/categories/${categorie.imagen}" alt="Imagen categoría" title="${categorie.nombre}">`;
        const title = document.createElement("h2");
        title.innerHTML += `${categorie.nombre}`;
        category.appendChild(imagen);
        category.appendChild(title);
        lista[0].appendChild(category);
      });
    })
    .catch((error) => console.log("Hubo un error : " + error.message));
}
function listarCategorias() {
  fetch("../json/categories.json")
    .then((respuesta) => respuesta.json())
    .then((categories) => {
      categories.Categories.forEach((categorie) => {
        const category = document.createElement("a");
        category.setAttribute("href", "./" + categorie.nombre + ".html");
        category.classList.add("categoria");
        const imagen = document.createElement("div");
        imagen.classList.add("imagen");
        imagen.innerHTML += `<img src="../assets/categories/${categorie.imagen}" alt="Imagen categoría" title="${categorie.nombre}">`;
        const title = document.createElement("h2");
        title.innerHTML += `${categorie.nombre}`;
        category.appendChild(imagen);
        category.appendChild(title);
        lista[0].appendChild(category);
      });
    })
    .catch((error) => console.log("Hubo un error : " + error.message));
}

// Listar Ofertas
const ofertas = document.getElementsByClassName("offers-products");
function listarOfertas() {
  fetch("./json/products.json")
    .then((respuesta) => respuesta.json())
    .then((products) => {
      products.Ofertas.forEach((product) => {
        var prod = document.createElement("div");
        prod.classList.add("product");
        var fav = document.createElement("div");
        fav.classList.add("add-favourite");
        var heartV = document.createElement("i");
        heartV.classList.add("far");
        heartV.classList.add("fa-heart");
        var heartL = document.createElement("i");
        heartL.classList.add("fa");
        heartL.classList.add("fa-heart");
        var imagen = document.createElement("div");
        imagen.classList.add("picture");
        imagen.innerHTML += `<img src="./assets/${product.imagen}" alt="Imagen producto" title="${product.nombre}">`;
        var title = document.createElement("h2");
        var titleL = document.createElement("a");
        titleL.innerHTML += `${product.nombre}`;
        var stars = document.createElement("div");
        stars.classList.add("stars");
        var punt = product.estrellas;
        switch (punt) {
          case "0":
            for (let i = 0; i < 5; i++) {
              var star = document.createElement("i");
              star.classList.add("far");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            break;
          case "1":
            var star = document.createElement("i");
            star.classList.add("fas");
            star.classList.add("fa-star");
            stars.appendChild(star);
            for (let i = 0; i < 4; i++) {
              var star = document.createElement("i");
              star.classList.add("far");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            break;
          case "2":
            for (let i = 0; i < 2; i++) {
              var star = document.createElement("i");
              star.classList.add("fas");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            for (let i = 0; i < 3; i++) {
              var star = document.createElement("i");
              star.classList.add("far");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            break;
          case "3":
            for (let i = 0; i < 3; i++) {
              var star = document.createElement("i");
              star.classList.add("fas");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            for (let i = 0; i < 2; i++) {
              var star = document.createElement("i");
              star.classList.add("far");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            break;
          case "4":
            for (let i = 0; i < 4; i++) {
              var star = document.createElement("i");
              star.classList.add("fas");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            var star = document.createElement("i");
            star.classList.add("far");
            star.classList.add("fa-star");
            stars.appendChild(star);
            break;
          case "5":
            for (let i = 0; i < 5; i++) {
              var star = document.createElement("i");
              star.classList.add("fa");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            break;
        }
        var price = document.createElement("div");
        price.classList.add("price");
        price.innerHTML += `${product.precio} €`;
        var button = document.createElement("button");
        button.classList.add("add-cart");
        button.innerHTML = "Añadir a la cesta";

        prod.appendChild(fav);
        fav.appendChild(heartV);
        fav.appendChild(heartL);
        prod.appendChild(imagen);
        prod.appendChild(title);
        title.appendChild(titleL);
        prod.appendChild(stars);
        prod.appendChild(price);
        prod.appendChild(button);
        ofertas[0].appendChild(prod);
      });
    })
    .catch((error) => console.log("Hubo un error : " + error.message));
}

// Listar Novedades
const novedades = document.getElementsByClassName("new-products");
function listarNovedades() {
  fetch("./json/products.json")
    .then((respuesta) => respuesta.json())
    .then((products) => {
      products.Novedades.forEach((product) => {
        var prod = document.createElement("div");
        prod.classList.add("product");
        var fav = document.createElement("div");
        fav.classList.add("add-favourite");
        var heartV = document.createElement("i");
        heartV.classList.add("far");
        heartV.classList.add("fa-heart");
        var heartL = document.createElement("i");
        heartL.classList.add("fa");
        heartL.classList.add("fa-heart");
        var imagen = document.createElement("div");
        imagen.classList.add("picture");
        imagen.innerHTML += `<img src="./assets/${product.imagen}" alt="Imagen producto" title="${product.nombre}">`;
        var title = document.createElement("h2");
        var titleL = document.createElement("a");
        titleL.innerHTML += `${product.nombre}`;
        var stars = document.createElement("div");
        stars.classList.add("stars");
        var punt = product.estrellas;
        switch (punt) {
          case "0":
            for (let i = 0; i < 5; i++) {
              var star = document.createElement("i");
              star.classList.add("far");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            break;
          case "1":
            var star = document.createElement("i");
            star.classList.add("fas");
            star.classList.add("fa-star");
            stars.appendChild(star);
            for (let i = 0; i < 4; i++) {
              var star = document.createElement("i");
              star.classList.add("far");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            break;
          case "2":
            for (let i = 0; i < 2; i++) {
              var star = document.createElement("i");
              star.classList.add("fas");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            for (let i = 0; i < 3; i++) {
              var star = document.createElement("i");
              star.classList.add("far");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            break;
          case "3":
            for (let i = 0; i < 3; i++) {
              var star = document.createElement("i");
              star.classList.add("fas");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            for (let i = 0; i < 2; i++) {
              var star = document.createElement("i");
              star.classList.add("far");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            break;
          case "4":
            for (let i = 0; i < 4; i++) {
              var star = document.createElement("i");
              star.classList.add("fas");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            var star = document.createElement("i");
            star.classList.add("far");
            star.classList.add("fa-star");
            stars.appendChild(star);
            break;
          case "5":
            for (let i = 0; i < 5; i++) {
              var star = document.createElement("i");
              star.classList.add("fa");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            break;
        }
        var price = document.createElement("div");
        price.classList.add("price");
        price.innerHTML += `${product.precio} €`;
        var button = document.createElement("button");
        button.classList.add("add-cart");
        button.innerHTML = "Añadir a la cesta";

        prod.appendChild(fav);
        fav.appendChild(heartV);
        fav.appendChild(heartL);
        prod.appendChild(imagen);
        prod.appendChild(title);
        title.appendChild(titleL);
        prod.appendChild(stars);
        prod.appendChild(price);
        prod.appendChild(button);
        novedades[0].appendChild(prod);
      });
    })
    .catch((error) => console.log("Hubo un error : " + error.message));
}

// Listar Cachimbas
const listaProd = document.getElementsByClassName("list-products");
function listarCachimbas() {
  fetch("../json/products.json")
    .then((respuesta) => respuesta.json())
    .then((products) => {
      products.Cachimbas.forEach((product) => {
        var prod = document.createElement("div");
        prod.classList.add("product");
        var fav = document.createElement("div");
        fav.classList.add("add-favourite");
        var heartV = document.createElement("i");
        heartV.classList.add("far");
        heartV.classList.add("fa-heart");
        var heartL = document.createElement("i");
        heartL.classList.add("fa");
        heartL.classList.add("fa-heart");
        var imagen = document.createElement("div");
        imagen.classList.add("picture");
        imagen.innerHTML += `<img src="../assets/${product.imagen}" alt="Imagen producto" title="${product.nombre}">`;
        var title = document.createElement("h2");
        var titleL = document.createElement("a");
        titleL.innerHTML += `${product.nombre}`;
        var stars = document.createElement("div");
        stars.classList.add("stars");
        var punt = product.estrellas;
        switch (punt) {
          case "0":
            for (let i = 0; i < 5; i++) {
              var star = document.createElement("i");
              star.classList.add("far");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            break;
          case "1":
            var star = document.createElement("i");
            star.classList.add("fas");
            star.classList.add("fa-star");
            stars.appendChild(star);
            for (let i = 0; i < 4; i++) {
              var star = document.createElement("i");
              star.classList.add("far");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            break;
          case "2":
            for (let i = 0; i < 2; i++) {
              var star = document.createElement("i");
              star.classList.add("fas");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            for (let i = 0; i < 3; i++) {
              var star = document.createElement("i");
              star.classList.add("far");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            break;
          case "3":
            for (let i = 0; i < 3; i++) {
              var star = document.createElement("i");
              star.classList.add("fas");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            for (let i = 0; i < 2; i++) {
              var star = document.createElement("i");
              star.classList.add("far");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            break;
          case "4":
            for (let i = 0; i < 4; i++) {
              var star = document.createElement("i");
              star.classList.add("fas");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            var star = document.createElement("i");
            star.classList.add("far");
            star.classList.add("fa-star");
            stars.appendChild(star);
            break;
          case "5":
            for (let i = 0; i < 5; i++) {
              var star = document.createElement("i");
              star.classList.add("fa");
              star.classList.add("fa-star");
              stars.appendChild(star);
            }
            break;
        }
        var price = document.createElement("div");
        price.classList.add("price");
        price.innerHTML += `${product.precio} €`;
        var button = document.createElement("button");
        button.classList.add("add-cart");
        button.innerHTML = "Añadir a la cesta";

        prod.appendChild(fav);
        fav.appendChild(heartV);
        fav.appendChild(heartL);
        prod.appendChild(imagen);
        prod.appendChild(title);
        title.appendChild(titleL);
        prod.appendChild(stars);
        prod.appendChild(price);
        prod.appendChild(button);
        listaProd[0].appendChild(prod);
      });
    })
    .catch((error) => console.log("Hubo un error : " + error.message));
}

// Listar Cazoletas
// Listar Mangueras
// Listar Pods
// Listar Bases
// Listar Boquillas
// Listar Carbones
// Listar Limpieza
