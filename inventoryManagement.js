// Write your code here



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};

const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
  if (products.length > 0) {
    console.log("First product:", products[0]);
  } else {
    console.log("No products available.");
  }
}


function updateProductName(position, newName) {
  if (
    typeof position === "number" &&
    position >= 0 &&
    position < products.length &&
    typeof newName === "string" &&
    newName.trim() !== ""
  ) {
    const oldName = products[position];
    products[position] = newName;
    console.log(`Product at position ${position} updated from "${oldName}" to "${newName}".`);
  } else {
    console.log("Invalid position or product name.");
  }
}


function removeLastProduct() {
  if (products.length > 0) {
    const removed = products.pop();
    console.log(`Removed product: ${removed}`);
  } else {
    console.log("No products to remove.");
  }
}

