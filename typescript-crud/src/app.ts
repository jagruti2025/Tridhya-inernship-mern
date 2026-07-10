
interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  notes?: string | undefined; 
}

let contacts: Contact[] = [];

const STORAGE_KEY = "contactList";

function loadContacts(): Contact[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (data === null) {
    return []; 
  }

  const parsedData: Contact[] = JSON.parse(data);
  return parsedData;
}

function saveContacts(contactList: Contact[]): void {
  const jsonData = JSON.stringify(contactList);
  localStorage.setItem(STORAGE_KEY, jsonData);
}

contacts = loadContacts();



const contactForm = document.getElementById("contactForm") as HTMLFormElement;
const nameInput = document.getElementById("nameInput") as HTMLInputElement;
const emailInput = document.getElementById("emailInput") as HTMLInputElement;
const phoneInput = document.getElementById("phoneInput") as HTMLInputElement;
const notesInput = document.getElementById("notesInput") as HTMLInputElement;

const errorMsg = document.getElementById("errorMsg") as HTMLParagraphElement;
const contactListDiv = document.getElementById("contactList") as HTMLDivElement;
const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
const searchInput = document.getElementById("searchInput") as HTMLInputElement;

let editingId: number | null = null;

function renderContacts(contactList: Contact[]): void {
  contactListDiv.innerHTML = "";

  if (contactList.length === 0) {
    contactListDiv.innerHTML = "<p>No contacts found.</p>";
    return;
  }

  contactList.forEach(function (contact: Contact) {
    const card = document.createElement("div");
    card.className = "contact-card";

    card.innerHTML = `
      <h3>${contact.name}</h3>
      <p>Email: ${contact.email}</p>
      <p>Phone: ${contact.phone}</p>
      <p>Notes: ${contact.notes ? contact.notes : "N/A"}</p>
      <button class="editBtn" data-id="${contact.id}">Edit</button>
      <button class="deleteBtn" data-id="${contact.id}">Delete</button>
    `;

    contactListDiv.appendChild(card);
  });
}


contactForm.addEventListener("submit", function (event: Event) {
  event.preventDefault(); 

  errorMsg.textContent = "";

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const notes = notesInput.value.trim();

  if (name === "" || email === "" || phone === "") {
    errorMsg.textContent = "Name, Email aur Phone bharna zaroori hai!";
    return;
  }

  if (editingId === null) {

    const newContact: Contact = {
      id: Date.now(), 
      name: name,
      email: email,
      phone: phone,
      notes: notes === "" ? undefined : notes,
    };

    contacts.push(newContact);
  } else {
    contacts = contacts.map(function (contact: Contact) {
      if (contact.id === editingId) {
        const updatedContact: Contact = {
          id: contact.id, 
          name: name,
          email: email,
          phone: phone,
          notes: notes === "" ? undefined : notes,
        };
        return updatedContact;
      }

      return contact;
    });

    editingId = null;
  }

  saveContacts(contacts);
  renderContacts(contacts);

  contactForm.reset();
  submitBtn.textContent = "Add Contact"; 
});

contactListDiv.addEventListener("click", function (event: Event) {
  const target = event.target as HTMLElement;

  const idString = target.getAttribute("data-id");

  if (idString === null) {
    return;
  }

  const id = Number(idString);

  if (target.classList.contains("deleteBtn")) {
    contacts = contacts.filter(function (contact: Contact) {
      return contact.id !== id;
    });

    saveContacts(contacts);
    renderContacts(contacts);
  }

  if (target.classList.contains("editBtn")) {
    const contactToEdit = contacts.find(function (contact: Contact) {
      return contact.id === id;
    });

    if (contactToEdit) {
      nameInput.value = contactToEdit.name;
      emailInput.value = contactToEdit.email;
      phoneInput.value = contactToEdit.phone;
      notesInput.value = contactToEdit.notes ? contactToEdit.notes : "";

      editingId = id;
      submitBtn.textContent = "Update Contact";
    }
  }
});

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm === "") {
    renderContacts(contacts);
    return;
  }

  const filteredContacts = contacts.filter(function (contact: Contact) {
    return contact.name.toLowerCase().includes(searchTerm);
  });

  renderContacts(filteredContacts);
});

renderContacts(contacts);