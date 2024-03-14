fetch(menu.js)
//Que hace esta linea? Esta linea inicia la carga del archivo menu,json, fetch es una funcion de Javascript que facilita la realizacion de solicitudes de red como obtener datos de un archivo o un endpoint de Api.
//Como funciona? fetch devuelve, una promesa que, cuando se resuelve, te da acceso a la rrespuesta de la solicitud. Esta respuesta no es directamente los datos en formtao json. si no un objeto de respuesta de incluye varios detalles sobre la respuesta misma.
.then(response => response.json())
//
.then(data=>{
    const menuContainer = document.getElementById('menu-container');
data.items.array.forEach(category => {
    const categoryTitle = document.createElement('h2');
    categoryTitle.textConten = category.category;
    menuContainer.appendChild(categoryTitle);

    const table = document.createElement('table');

    const tablehead = <tr><th>foto</th><th>Descripcion</th><th>Precio</th></tr>;
    let tableBody = '';
    //Como funciona? para cada categoria en los datos, se realizan varios pasos:
    //Crear un titulo para la categoria: se creaun elemento <h2> para el titulo de la categoria, se establece su contenido  de texto al nombre de la categoria(category.category), y luego se agrega al contenedor del menu.
    //Crear una tabla para los elementos de esa categoria. Primero se define el encabezado de la tabla (<th>foto</th><th>descripcion</th><th>Precio</th>).

    category.items.forEach(item =>{
        tableBody += <tr>
            <td><img src = "${item.image}" alt="{item image}"></img></td>
            <td>${item.image} - ${item.description}</td>
            <td>${item.price}</td>
        </tr>
    });
    //Que hace? para cada item dentro de category.iotems, se concatena una nueva fila(<tr>) a TableBody. Esta fila contiene una celda para la imagen del elemento (usando el archivop src para la URL de la imagen y "alt" para el texto alternativo), tra la celda para el nombre y la descripcion de elemento, y una tercera celda para el precio del elemento.
    table.innerHTML = tableHead + tableBody;
    //Que hace? una vez completadas todas las filas de la tabla para los elementos de una categoria, se combina el encabezado de la tabla (tableHead) con el cuerpo de la tabla (tableBody) y se establece como el contenido HTML de la tabla. Finalmente esta tabla se añade al contenedor del menu en la pagina web.
});

});
//Poblar la tabla con los elementos: Para cada item dentro de una categoria, se crea una fila (<tr></tr>)con tres celdas (<td></td>): una para la imagen (con un elemento <img>), otra para el nombre y la desscripcion del item, y una ultima para el precio.Esto se hace concateando la nueva fila a una variable TableBody.
//Finalizar y mostrar la tabla: Una vez que todas las filas han sido agregadas a tableBody, se establece el contenido interno (innerHTML) de la tabla combinando el encabezado con el cuerpo. Luego, esta tabla completa se agrega al contenedor del menu en el documento.