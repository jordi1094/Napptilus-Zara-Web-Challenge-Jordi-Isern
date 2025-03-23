# Mobile Shop project

https://jordi-mobile-store.vercel.app/


## Introducción

Este proyecto es una aplicación web desarrollada en NextJs que permite la visualización, búsqueda y gestión de un catálogo de teléfonos móviles. La aplicación incluye un listado de dispositivos, una vista de detalle y un carrito de compras con persistencia de datos.

### Tecnologías Utilizadas
   
   #### Dependencias
   - next: ^15.2.3
   - react: ^19.0.0
   - react-dom: ^19.0.0


   #### Dev dependencias
   - @testing-library/jest-dom: ^6.6.3
   - @testing-library/react: ^16.2.0
   - @testing-library/user-event: ^14.6.1
   - @types/jest: ^29.5.14
   - @types/react: ^19.0.12
   - babel-jest: ^29.7.0
   - identity-obj-proxy: ^3.0.0
   - jest: ^29.7.0
   - jest-environment-jsdom: ^29.7.0
   - prettier: ^3.5.3

### Requisitos Previos

Node.js : v22.14.0

### Instalación y Ejecución

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

ejecutar Test

```bash
npm run test
```

### Estructura de datos

* __ mocks __
* .next
* node_modules
* src/
  * app/
    * cart/
      * components/
        * CartCounter/
        * CartIten/
        * FooterCart/
      * page.jsx
      * page.module.css
      * page.test.js
    * components/
      * HomeView/
        * index.jsx
        * index.module.css
        * index.test.js
      * ProductsGrid/
        * components/
        * index.jsx
        * index.module.css
        * index.test.js
      * SearchWrapper/
        * components/
        * index.jsx
        * index.module.css
        * index.test.js
    * details/
      * [id]/
        * components/
        * page.jsx
        * page.module.css
        * page.test.js
    * utils/
    * favicon.ico
    * globals.css
    * layout.jsx
    * page.jsx
  * assets/
    * icons/
      * back.svg
      * bag-active.svg
      * bag-inactive.svg
      * cross.svg
      * logo.svg
  * components/
    * ButtonDark/
      * index.jsx
      * index.module.css
      * index.test.js
    * ButtonLigth/
      * index.jsx
      * index.module.css
      * index.test.js
    * header/
      * components/
        * CartButton.jsx
        * CartButton.module.css
      * CartHeader.jsx
      * CartHeader.module.css
      * CartHeader.test.jsx
      * header.jsx
      * header.module.css
      * header.test.jsx
  * data/
    * get.js
    * index.js
    * save.js
  * hooks/
    * useDebounce.js
  * logic/
    * cart/
      * addProduct.js
      * deleteProduct.js
      * getProducts.js
      * getQualtityOfProducts.js
      * index.js
    * getProductDetails.js
    * getProductsList.js
    * index.js
* .gitignore
* README.md
* eslint.config.mjs
* jest.config.js
* jest.setup.js
* jsconfig.json
* next.config.mjs
* nextDocumentation.md
* package-lock.json
* package.json

Este proyecto sigue una estructura organizada para facilitar el desarrollo y mantenimiento.  

##### `src/`  
Carpeta principal del código fuente.  

##### `app/`  
Contiene la lógica principal de la aplicación, incluyendo páginas, componentes y estilos.  
- **`cart/`** - Página del carrito de compras. 
- **`details/[id]/`** - Página dinámica de detalles del producto. 
- **`layout.jsx` y `page.jsx`** - Definen la estructura global y la página principal.  

##### `assets/`  
Archivos estáticos como iconos e imágenes.  

##### `components/`  
Componentes genéricos reutilizables fuera de `app/`, como botones y la cabecera del sitio.  

##### `data/`  
Funciones para obtener, guardar y gestionar datos.  

##### `hooks/`  
Contiene hooks personalizados, como `useDebounce.js`, útil para optimizar eventos de entrada.  

##### `logic/`  
Maneja la lógica de negocio de la app.  
- **`cart/`** - Funciones para agregar, eliminar y obtener productos en el carrito.  
- **`getProductDetails.js` y `getProductsList.js`** - Manejo de detalles y listas de productos.  

#### Raíz del Proyecto  
- **`README.md`** - Documentación general del proyecto.  
- **`package.json`** - Configuración del proyecto y dependencias.  
- **`next.config.mjs`** - Configuración de Next.js.  
- **`jest.config.js` y `jest.setup.js`** - Configuración para pruebas con Jest.  
- **`.gitignore`** - Archivos a ignorar en Git.  

---

🚀 **Resumen**:  
La lógica de negocio está en `logic/` y `data/`, los componentes reutilizables en `components/`, la estructura de la aplicación en `app/`.

### Funcionalidades Principales

1. Vista de Listado de Teléfonos

   - Muestra una cuadrícula con tarjetas de los primeros 20 teléfonos desde la API.

  - Buscador en tiempo real para filtrar por nombre o marca con Debounce para optimización.

  - Barra de navegación con enlace a inicio y contador de teléfonos en el carrito.
  

2. Vista de Detalle de Teléfono

   - Muestra información detallada del dispositivo.

  - Selector de almacenamiento y color con actualización del precio.

  - Botón de "Añadir al carrito" (habilitado solo tras seleccionar opciones).

  - Sección de productos similares.

3. Vista de Carrito

   - Muestra los productos seleccionados con especificaciones.

   - Botón para eliminar productos del carrito.

   - Cálculo del precio total.

   - Botón de "Continuar comprando" para regresar al listado.

### Requisitos Adicionales

- Aplicación responsiva seguiendo el Figma.

- Accesibilidad mejorada.

- Uso de linters y formatters.

- Consola libre de errores y advertencias.

- Documentación clara y completa.