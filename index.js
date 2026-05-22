const API_URL = 'https://fakestoreapi.com';

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('❌ Error: Debes proporcionar un comando');
  console.log('📋 Uso:');
  console.log('   npm run start GET products');
  console.log('   npm run start GET products/<productId>');
  console.log('   npm run start POST products <title> <price> <category>');
  console.log('   npm run start DELETE products/<productId>');
  process.exit(1);
}

const [method, ...rest] = args;
const validMethods = ['GET', 'POST', 'DELETE'];

if (!validMethods.includes(method)) {
  console.error(`❌ Error: Método inválido "${method}". Usa GET, POST o DELETE`);
  process.exit(1);
}

async function handleGET(endpoint) {
  try {
    console.log(`📡 Obteniendo datos de: ${API_URL}${endpoint}`);
    const response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    console.log('✅ Datos obtenidos exitosamente:');
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`❌ Error en GET: ${error.message}`);
    process.exit(1);
  }
}

async function handlePOST(endpoint, payload) {
  try {
    console.log(`📡 Enviando datos a: ${API_URL}${endpoint}`);
    console.log(`📦 Payload:`, payload);
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    console.log('✅ Producto creado exitosamente:');
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`❌ Error en POST: ${error.message}`);
    process.exit(1);
  }
}
async function handleDELETE(endpoint) {
  try {
    console.log(`📡 Eliminando: ${API_URL}${endpoint}`);
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    console.log('✅ Producto eliminado exitosamente:');
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`❌ Error en DELETE: ${error.message}`);
    process.exit(1);
  }
}
async function processCommand() {
  try {
    if (method === 'GET') {
      if (rest.length === 0) {
        console.error('❌ Error: GET requiere un endpoint');
        console.log('📋 Uso:');
        console.log('   npm run start GET products');
        console.log('   npm run start GET products/<productId>');
        process.exit(1);
      }
      const [resourceType, ...resourcePath] = rest;
      if (resourceType !== 'products') {
        console.error(`❌ Error: Recurso inválido "${resourceType}". Solo se permite "products"`);
        process.exit(1);
      }
      const endpoint = resourcePath.length > 0 ? `/products/${resourcePath[0]}` : '/products';
      await handleGET(endpoint);
    } else if (method === 'POST') {
      if (rest.length < 4) {
        console.error('❌ Error: POST requiere: products <title> <price> <category>');
        console.log('📋 Ejemplo: npm run start POST products "T-Shirt-Rex" 300 "remeras"');
        process.exit(1);
      }
      const [resourceType, title, price, category] = rest;
      if (resourceType !== 'products') {
        console.error(`❌ Error: Recurso inválido "${resourceType}". Solo se permite "products"`);
        process.exit(1);
      }
      const parsedPrice = parseFloat(price);
      if (isNaN(parsedPrice)) {
        console.error(`❌ Error: El precio debe ser un número válido. Recibido: "${price}"`);
        process.exit(1);
      }
      const payload = {
        title,
        price: parsedPrice,
        category,
        description: `Producto: ${title}`,
      };
      await handlePOST('/products', payload);
    } else if (method === 'DELETE') {
      if (rest.length === 0) {
        console.error('❌ Error: DELETE requiere un endpoint');
        console.log('📋 Uso: npm run start DELETE products/<productId>');
        process.exit(1);
      }
      const [resourceType, ...resourcePath] = rest;
      if (resourceType !== 'products') {
        console.error(`❌ Error: Recurso inválido "${resourceType}". Solo se permite "products"`);
        process.exit(1);
      }
      if (resourcePath.length === 0) {
        console.error('❌ Error: DELETE requiere un productId');
        console.log('📋 Uso: npm run start DELETE products/<productId>');
        process.exit(1);
      }
      const productId = resourcePath[0];
      await handleDELETE(`/products/${productId}`);
    }
  } catch (error) {
    console.error(`❌ Error al procesar comando: ${error.message}`);
    process.exit(1);
  }
}

processCommand();
