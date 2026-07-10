"use strict";
let contacts = [];
const STORAGE_KEY = "contactList";
function loadContacts() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data === null) {
        return []; 
    }
    const parsedData = JSON.parse(data);
    return parsedData;
}
function saveContacts(contactList) {
    const jsonData = JSON.stringify(contactList);
    localStorage.setItem(STORAGE_KEY, jsonData);
}
contacts = loadContacts();
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const notesInput = document.getElementById("notesInput");
const errorMsg = document.getElementById("errorMsg");
const contactListDiv = document.getElementById("contactList");
const submitBtn = document.getElementById("submitBtn");
const searchInput = document.getElementById("searchInput");
let editingId = null;
function renderContacts(contactList) {
    contactListDiv.innerHTML = "";
    if (contactList.length === 0) {
        contactListDiv.innerHTML = "<p>No contacts found.</p>";
        return;
    }
    contactList.forEach(function (contact) {
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
contactForm.addEventListener("submit", function (event) {
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
        const newContact = {
            id: Date.now(), 
            name: name,
            email: email,
            phone: phone,
            notes: notes === "" ? undefined : notes,
        };
        contacts.push(newContact);
    }
    else {
        contacts = contacts.map(function (contact) {
            if (contact.id === editingId) {
                const updatedContact = {
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
contactListDiv.addEventListener("click", function (event) {
    const target = event.target;
    const idString = target.getAttribute("data-id");
    if (idString === null) {
        return;
    }
    const id = Number(idString);
    if (target.classList.contains("deleteBtn")) {
        contacts = contacts.filter(function (contact) {
            return contact.id !== id;
        });
        saveContacts(contacts);
        renderContacts(contacts);
    }
    
    if (target.classList.contains("editBtn")) {
        const contactToEdit = contacts.find(function (contact) {
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
    
    const filteredContacts = contacts.filter(function (contact) {
        return contact.name.toLowerCase().includes(searchTerm);
    });
    renderContacts(filteredContacts);
});
renderContacts(contacts);