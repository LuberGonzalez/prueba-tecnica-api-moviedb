# Prueba Técnica **API MOVIEDB**

- Para esta prueba, os va a hacer falta saber qué hooks o funciones internas de React aplicar, para manejar peticiones asíncronas de la manera más eficiente y con menos renderizados del lado de cliente posibles, así como el manejo de persistencia de datos en el estado global de la aplicación, ya sea usando Redux, React Context o la opción con la que os sintáis más cómodos.

## Componentes y requisitos que debe tener la web:

- Navbar desde el cual mostrar las páginas a las que puede acceder el usuario que van a ser Home y otra Wishlist.

- Las listas en ambas páginas deben ser de manera paginada.

- Persistencia de datos.

- Páginas y componentes responsive.

- El template de lenguaje a usar debe ser en Typescript.

Se valorará:

- Uso de lazy loading para consumir menos recursos.

- Eficiencia a la hora de usar hooks o funciones internas de React para disminuir lostiempos de carga de la lista de la API.

- Uso de interfaces, tipos, herencia de propiedades entre componentes padre e hijo

- Limpieza y claridad del código.

* La primera parte de la prueba va a ser conectarnos a una api pública llamada MovieDB para obtener su lista de películas más populares de manera paginada. Os pondré al final las urls de los endpoints para que veáis los json que mandan de respuesta así como el token que deberéis de usar para la petición.

### Home

- Trás obtener la lista, deberéis de renderizar está información en la página principal de vuestra web de manera paginada con un diseño a vuestro gusto, pero cada película que mostréis en la lista deberá de tener un botón para añadir a favoritos (Ej: un corazón en el que al pulsarlo se añade a tu wishlist y si lo vuelves a pulsar se elimina de esta wishlist),para poder visualizar en la otra página de wishlist.

### Wishlist

- En esta lista se visualizarán las películas que hayáis marcado como favoritas en vuestra Home de manera paginada también. Se tiene que poder eliminar de esta lista la película que selecciones.
- Para que la información no desaparezca cuando recarguéis u os salgáis de la pantalla de Wishlist, deberéis de usar la persistencia de datos.

**Dicho esto, ¡mucha suerte y a por ello!**
