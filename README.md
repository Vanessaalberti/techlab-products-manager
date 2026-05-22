# TechLab Products Manager 

Gestor de productos profesional que interactúa con la **FakeStore API** desde línea de comandos. Este proyecto demuestra dominio en Node.js, async/await, fetch API y manejo de argumentos de terminal.

###  Requerimiento #1: Configuración Inicial
- [x] Directorio del proyecto creado
- [x] `index.js` como punto de entrada
- [x] `npm init -y` ejecutado
- [x] Propiedad `"type": "module"` en `package.json` (ESModules habilitados)
- [x] Script `start` configurado para ejecutar con `npm run start`

###  Requerimiento #2: Lógica de Gestión de Productos

#### 1 Consultar Todos los Productos
```bash
npm run start GET products
```
**Resultado:** Lista completa de productos en formato JSON

#### 2 Consultar Producto Específico
```bash
npm run start GET products/15
```
**Resultado:** Datos del producto con ID 15

#### 3 Crear Nuevo Producto
```bash
npm run start POST products "T-Shirt-Rex" 300 "remeras"
```
**Parámetros:**
- `title`: Nombre del producto (string)
- `price`: Precio del producto (número)
- `category`: Categoría del producto (string)

**Resultado:** Producto creado con ID asignado por la API

#### 4 Eliminar Producto
```bash
npm run start DELETE products/7
```
**Resultado:** Confirmación de eliminación

##  Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Vanessaalberti/techlab-products-manager.git
cd techlab-products-manager

# Instalar dependencias (sin dependencias externas, pero npm install igual funciona)
npm install
```

##  Uso

### Obtener todos los productos
```bash
npm run start GET products
```

### Obtener un producto específico
```bash
npm run start GET products/1
npm run start GET products/5
npm run start GET products/20
```

### Crear un nuevo producto
```bash
npm run start POST products "Laptop Gaming" 1299.99 "electronics"
npm run start POST products "Jeans Azules" 79.99 "clothing"
npm run start POST products "Harry Potter" 15.99 "books"
```

### Eliminar un producto
```bash
npm run start DELETE products/101
npm run start DELETE products/120
```

##  Ejemplos de Respuestas!

### GET products (primeros 2 productos)
```json
 Datos obtenidos exitosamente:
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "category": "electronics",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "category": "jewelery",
    "rating": {
      "rate": 3,
      "count": 145
    }
  }
]
```

### POST products
```json
 Producto creado exitosamente:
{
  "title": "T-Shirt-Rex",
  "price": 300,
  "category": "remeras",
  "description": "Producto: T-Shirt-Rex",
  "id": 21
}
```

### DELETE products/<id>
```json
 Producto eliminado exitosamente:
{
  "id": 7
}
```

##  API Utilizada

- **Base URL:** `https://fakestoreapi.com`
- **Endpoints:** `/products`, `/products/{id}`
- **Documentación:** https://fakestoreapi.com/docs
