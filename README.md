# 📝 My Blog (Node.js + Express + EJS)

A simple blog web application built with **Node.js**, **Express.js**, and **EJS**.  
This app allows users to create, view, edit, and delete blog posts.  
Posts are stored only in memory (no database), so they reset when the server restarts.  

---

## 🚀 Features
- ✍️ Create new blog posts  
- 📖 View all blog posts on the home page  
- 📝 Edit existing posts  
- ❌ Delete posts  
- 🎨 Responsive design with CSS for a clean user experience  

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js  
- **Templating Engine**: EJS  
- **Styling**: CSS (Flexbox, Grid)  

---

## 📂 Project Structure
```plaintext
my-blog/
│── public/
│   └── styles.css         # Stylesheet
│
│── views/
│   ├── partials/
│   │   ├── header.ejs     # Header layout
│   │   └── footer.ejs     # Footer layout
│   ├── index.ejs          # Home page (list posts + form)
│   ├── edit.ejs           # Edit post page
│   └── layout.ejs         # Base template
│
│── app.js                 # Express server
│── package.json           # Project dependencies
│── README.md              # Project documentation
