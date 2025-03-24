function addItem() {
  const itemName = document.getElementById("itemName").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const price = parseFloat(document.getElementById("price").value);

  const tableBody = document.getElementById("inventoryTableBody");

  const row = tableBody.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);

  cell1.innerHTML = itemName;
  cell2.innerHTML = quantity;
  cell3.innerHTML = `$${price.toFixed(2)}`;
  cell4.innerHTML = `<button onclick="removeItem(this)">Remove</button>`;

  updateTotalAmount();
}

function removeItem(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
  updateTotalAmount();
}

function updateTotalAmount() {
  const tableBody = document.getElementById("inventoryTableBody");
  let totalAmount = 0;

  tableBody.querySelectorAll("tr").forEach((row) => {
    const priceCell = row.cells[2];
    const quantityCell = row.cells[1];
    const price = parseFloat(priceCell.textContent.replace("$", ""));
    const quantity = parseInt(quantityCell.textContent);
    totalAmount += price * quantity;
  });

  document.getElementById(
    "totalAmount"
  ).textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
}
