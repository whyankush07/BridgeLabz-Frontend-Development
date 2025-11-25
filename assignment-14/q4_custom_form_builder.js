class FormBuilder {
  constructor(fields) {
    this.fields = fields;
    this.formElement = null;
  }

  buildForm(containerId) {
    const container = document.getElementById(containerId);

    let formHTML = '<form id="generatedForm">';

    this.fields.forEach((field, index) => {
      formHTML += `
        <div class="form-group">
          <label for="field_${index}">${field.label}:</label>`;

      if (field.type === "textarea") {
        formHTML += `<textarea id="field_${index}" name="${
          field.name || field.label.toLowerCase()
        }" ${field.required ? "required" : ""}></textarea>`;
      } else if (field.type === "select") {
        formHTML += `<select id="field_${index}" name="${
          field.name || field.label.toLowerCase()
        }" ${field.required ? "required" : ""}>`;
        formHTML += `<option value="">-- Select --</option>`;
        field.options.forEach((option) => {
          formHTML += `<option value="${option}">${option}</option>`;
        });
        formHTML += `</select>`;
      } else {
        formHTML += `<input type="${field.type}" id="field_${index}" name="${
          field.name || field.label.toLowerCase()
        }" placeholder="${field.placeholder || ""}" ${
          field.required ? "required" : ""
        }>`;
      }

      formHTML += `</div>`;
    });

    formHTML += '<button type="submit">Submit Form</button>';
    formHTML += "</form>";

    container.innerHTML = formHTML;
    this.formElement = document.getElementById("generatedForm");

    this.formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this.displayFormData();
    });
  }

  getFormData() {
    const formData = {};
    const formElements = this.formElement.elements;

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.name && element.type !== "submit") {
        formData[element.name] = element.value;
      }
    }

    return formData;
  }

  displayFormData() {
    const data = this.getFormData();
    const output = document.getElementById("output");
    const formDataPre = document.getElementById("formData");

    formDataPre.textContent = JSON.stringify(data, null, 2);
    output.style.display = "block";

    console.log("Form Data Submitted:", data);
  }
}

const formFields = [
  {
    type: "text",
    label: "Username",
    name: "username",
    placeholder: "Enter username",
    required: true,
  },
  {
    type: "email",
    label: "Email Address",
    name: "email",
    placeholder: "user@example.com",
    required: true,
  },
  {
    type: "password",
    label: "Password",
    name: "password",
    placeholder: "Enter password",
    required: true,
  },
  {
    type: "number",
    label: "Age",
    name: "age",
    placeholder: "Enter age",
    required: false,
  },
  {
    type: "select",
    label: "Country",
    name: "country",
    options: ["India", "USA", "UK", "Canada", "Australia"],
    required: true,
  },
  { type: "date", label: "Date of Birth", name: "dob", required: false },
  { type: "textarea", label: "Bio", name: "bio", required: false },
];

const formBuilder = new FormBuilder(formFields);
formBuilder.buildForm("dynamicForm");
