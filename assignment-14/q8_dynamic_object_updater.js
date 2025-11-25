let user = {
  name: "John",
  email: "john@mail.com",
  age: 21
};

const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const objectDisplay = document.getElementById('objectDisplay');

const displayUserObject = () => {
  objectDisplay.innerHTML = `
    <h3>User Object:</h3>
    <div class="property" id="prop-name">
      <strong>name:</strong> <span>"${user.name}"</span>
    </div>
    <div class="property" id="prop-email">
      <strong>email:</strong> <span>"${user.email}"</span>
    </div>
    <div class="property" id="prop-age">
      <strong>age:</strong> <span>${user.age}</span>
    </div>
  `;

  console.log('Current User Object:', user);
};

const populateForm = () => {
  nameInput.value = user.name;
  emailInput.value = user.email;
  ageInput.value = user.age;
};

displayUserObject();
populateForm();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const changes = [];

  const newName = nameInput.value.trim();
  const newEmail = emailInput.value.trim();
  const newAge = parseInt(ageInput.value);

  if (user.name !== newName) {
    changes.push('name');
    user.name = newName;
  }
  
  if (user.email !== newEmail) {
    changes.push('email');
    user.email = newEmail;
  }
  
  if (user.age !== newAge) {
    changes.push('age');
    user.age = newAge;
  }

  displayUserObject();

  changes.forEach(prop => {
    const element = document.getElementById(`prop-${prop}`);
    if (element) {
      element.classList.add('updated');
      setTimeout(() => element.classList.remove('updated'), 500);
    }
  });

  if (changes.length > 0) {
    console.log(`Updated properties: ${changes.join(', ')}`);
    console.log('Updated User Object:', user);
  } else {
    console.log('No changes made');
  }
});

const inputs = [nameInput, emailInput, ageInput];
inputs.forEach(input => {
  input.addEventListener('input', () => {
    const previewUser = {
      name: nameInput.value || user.name,
      email: emailInput.value || user.email,
      age: parseInt(ageInput.value) || user.age
    };
    console.log('Preview:', previewUser);
  });
});

console.log('Initial User Object:', user);
