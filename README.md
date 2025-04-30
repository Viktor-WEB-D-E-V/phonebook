# React Contact Book

A simple contact management app built with React. Users can add, search, and remove contacts. Form handling is managed with Formik and Yup for validation. Contacts are persisted using `localStorage`.

## Features

- ✅ Add new contacts with validation
- 🔍 Search contacts by name
- 🗑️ Remove contacts
- 💾 Persistent storage via `localStorage`
- 🧼 Formik and Yup integration for form handling

## Technologies Used

- React (Vite)
- Formik & Yup
- CSS Modules
- React Icons

## Folder Structure

```
src/
├── App.jsx
├── App.css
├── main.jsx
├── index.css
└── components/
    ├── ContactForm/
    │   ├── ContactForm.jsx
    │   └── ContactForm.css
    ├── ContactList/
    │   ├── ContactList.jsx
    │   └── ContactList.css
    ├── ContactListItem/
    │   ├── ContactListItem.jsx
    │   └── ContactListItem.css
    └── SearchBox/
        ├── SearchBox.jsx
        └── SearchBox.css
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/contact-book.git
   cd contact-book
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Fill out the form to add a new contact
- Use the search box to filter contacts by name
- Click the delete button to remove a contact

## Future Improvements

- Phone number formatting & validation
- Duplicate contact prevention
- Edit contact feature

