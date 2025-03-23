# Mobile Shop project

https://jordi-mobile-store.vercel.app/


## Introducción

Este proyecto es una aplicación web desarrollada en NextJs que permite la visualización, búsqueda y gestión de un catálogo de teléfonos móviles. La aplicación incluye un listado de dispositivos, una vista de detalle y un carrito de compras con persistencia de datos.

### Tecnologías Utilizadas

- NextJs
- Jest

### Requisitos Previos

Node.js

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