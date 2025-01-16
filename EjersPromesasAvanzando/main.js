// Datos iniciales de los productos
const products = {
    1: { name: "Laptop", price: 1000, stock: 5 },
    2: { name: "Mouse", price: 20, stock: 10 },
    3: { name: "Keyboard", price: 50, stock: 0 },
};

/**
 * Verifica si hay suficiente stock para un producto dado.
 * @param {number} productId - ID del producto.
 * @param {number} quantity - Cantidad solicitada.
 * @returns {Promise<string>} - Promesa con un mensaje de éxito o error.
 */
function checkStock(productId, quantity) {
    return new Promise((resolve, reject) => {
        const product = products[productId];
        if (!product) {
            reject(`Producto con ID ${productId} no encontrado`);
        } else if (product.stock >= quantity) {
            resolve(`Stock disponible para el producto ${productId}`);
        } else {
            reject(`Stock insuficiente para el producto ${productId}`);
        }
    });
}

/**
 * Calcula el precio total del pedido.
 * @param {number} productId - ID del producto.
 * @param {number} quantity - Cantidad solicitada.
 * @returns {Promise<string>} - Promesa con el total calculado o error.
 */
function calculateTotal(productId, quantity) {
    return new Promise((resolve, reject) => {
        const product = products[productId];
        if (!product) {
            reject(`Producto con ID ${productId} no encontrado`);
        } else {
            const total = product.price * quantity;
            resolve(`Total para ${quantity} unidades de ${productId}: $${total}`);
        }
    });
}

/**
 * Confirma el pedido de un producto.
 * @param {number} productId - ID del producto.
 * @returns {Promise<string>} - Promesa que se resuelve tras 2 segundos con el mensaje de confirmación.
 */
function confirmOrder(productId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Pedido confirmado para el producto ${productId}`);
        }, 2000);
    });
}

/**
 * Simula el flujo completo de procesamiento de un pedido.
 * @param {number} productId - ID del producto.
 * @param {number} quantity - Cantidad solicitada.
 */
async function processOrder(productId, quantity) {
    try {
        // Verifica si hay suficiente stock
        const stockMessage = await checkStock(productId, quantity);
        console.log(stockMessage);

        // Calcula el total si hay stock disponible
        const totalMessage = await calculateTotal(productId, quantity);
        console.log(totalMessage);

        // Confirma el pedido si todo lo anterior fue exitoso
        const confirmationMessage = await confirmOrder(productId);
        console.log(confirmationMessage);
    } catch (error) {
        // Muestra cualquier error que ocurra durante el proceso
        console.error(error);
    }
}

processOrder(1, 2);
