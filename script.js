class Food {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }
}

const foods = [];

const notification = document.getElementById('notification');
function addOrder(e) {
  e.preventDefault();
  const nameInput = document.getElementById('name');
  const quantityInput = document.getElementById('quantity');
  const name = nameInput.value.trim();
  const quantity = parseInt(quantityInput.value);

  if (!name.length || !quantity || quantity < 1 || quantity > 10) {
    notification.classList.add('error');
    notification.textContent = `Please enter a food name and a quantity between 1 and 10!`;
    return;
  }
  foods.push(new Food(name, quantity));
  nameInput.value = '';
  quantityInput.value = '';
  updateFoodTable();

  const s = quantity > 1 ? 's' : '';
  notification.classList.remove('error');
  notification.textContent = `Added ${quantity} order${s} of ${name} to the list!`;
}
document.forms[0].addEventListener('submit', addOrder);

function updateFoodTable() {
  const foodTableBody = document.getElementById('foods').tBodies[0];
  foodTableBody.innerHTML = '';
  foods.forEach((food) => {
    foodTableBody.innerHTML += `
    <tr>
      <td>${food.name}</td>
      <td>${food.quantity}</td>
    </tr>
    `;
  });
}
