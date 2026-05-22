# TechLab Products Manager 🚀

Gestor de productos profesional que interactúa con la **FakeStore API** desde línea de comandos. Este proyecto demuestra dominio en Node.js, async/await, fetch API y manejo de argumentos de terminal.

## 📋 Requisitos Completados

### ✅ Requerimiento #1: Configuración Inicial
- [x] Directorio del proyecto creado
- [x] `index.js` como punto de entrada
- [x] `npm init -y` ejecutado
- [x] Propiedad `"type": "module"` en `package.json` (ESModules habilitados)
- [x] Script `start` configurado para ejecutar con `npm run start`

### ✅ Requerimiento #2: Lógica de Gestión de Productos

#### 1️⃣ Consultar Todos los Productos
```bash
npm run start GET products
```
**Resultado:** Lista completa de productos en formato JSON

#### 2️⃣ Consultar Producto Específico
```bash
npm run start GET products/15
```
**Resultado:** Datos del producto con ID 15

#### 3️⃣ Crear Nuevo Producto
```bash
npm run start POST products "T-Shirt-Rex" 300 "remeras"
```
**Parámetros:**
- `title`: Nombre del producto (string)
- `price`: Precio del producto (número)
- `category`: Categoría del producto (string)

**Resultado:** Producto creado con ID asignado por la API

#### 4️⃣ Eliminar Producto
```bash
npm run start DELETE products/7
```
**Resultado:** Confirmación de eliminación

## 🛠️ Características Técnicas

✅ **process.argv** - Captura de comandos desde terminal  
✅ **Fetch API** - Peticiones HTTP asincrónicas (GET, POST, DELETE)  
✅ **async/await** - Manejo profesional de operaciones asincrónicas  
✅ **Destructuring** - Desestructuración de arrays y objetos  
✅ **Spread operator** - Expansión de argumentos  
✅ **Métodos de arrays/strings** - Manipulación de datos  
✅ **Validación robusta** - Verificación de tipos y valores  
✅ **Manejo de errores** - Try/catch con mensajes claros  
✅ **ESModules** - Configuración moderna de módulos  
✅ **Cero dependencias externas** - Solo API nativa de Node.js

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Vanessaalberti/techlab-products-manager.git
cd techlab-products-manager

# Instalar dependencias (sin dependencias externas, pero npm install igual funciona)
npm install
```

## 🚀 Uso

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

## 📚 Ejemplos de Respuestas

### GET products (primeros 2 productos)
```json
✅ Datos obtenidos exitosamente:
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
✅ Producto creado exitosamente:
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
✅ Producto eliminado exitosamente:
{
  "id": 7
}
```

## 🔗 API Utilizada

- **Base URL:** `https://fakestoreapi.com`
- **Endpoints:** `/products`, `/products/{id}`
- **Documentación:** https://fakestoreapi.com/docs

## 🎓 Conceptos Aprendidos

1. **Procesamiento de comandos** - Captura y parseo de argumentos CLI
2. **Peticiones HTTP asincrónicas** - Uso de Fetch API moderna
3. **Validación de datos** - Verificación de tipos y rangos
4. **Manejo de errores** - Try/catch con mensajes descriptivos
5. **Estructuras de datos** - Objetos y arrays en JavaScript
6. **Programación funcional** - Funciones reutilizables y modulares
7. **Seguridad** - Validación de entrada de usuarios

## 📄 Archivos del Proyecto

```
techlab-products-manager/
├── package.json      # Configuración de npm
├── index.js          # Punto de entrada (lógica principal)
└── README.md         # Este archivo
```

## ✨ Notas de Desarrollo

- El proyecto sigue principios de código limpio y profesional
- Mensajes de error y éxito claros con emojis para mejor UX
- Validación exhaustiva de entrada del usuario
- Estructura modular con funciones independientes por operación HTTP
- Listo para producción y escalable

## 🎯 Conclusión

Este proyecto demuestra competencias clave:
- ✅ Dominio de Node.js y JavaScript moderno
- ✅ Integración con APIs REST
- ✅ Manejo de entrada/salida de usuario
- ✅ Buenas prácticas de desarrollo
- ✅ Código limpio y documentado

**¡Listo para unirse a TechLab!** 🚀

---

**Autor:** Vanessa Alberti  
**Licencia:** ISC
