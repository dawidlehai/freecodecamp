function updateInventory(currentInventory, newInventory) {
  const inventoryObj = {};

  currentInventory.forEach(([quantity, item]) => {
    inventoryObj[item] = quantity;
  });

  newInventory.forEach(([quantity, item]) => {
    inventoryObj[item] = (inventoryObj[item] ?? 0) + quantity;
  });

  const inventoryFromObj = Object.entries(inventoryObj);
  inventoryFromObj.sort();

  const inventoryArr = [];

  for (const [item, quantity] of inventoryFromObj) {
    inventoryArr.push([quantity, item]);
  }

  return inventoryArr;
}

module.exports = updateInventory;
