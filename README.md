# Cursor Spotlight Video Effect
# Live-Demo - https://interactive-spotlight-ui.vercel.app/
This project creates a **spotlight effect** on top of a fullscreen background video, where the visible area follows the user’s mouse cursor.  
It uses **HTML**, **CSS variables**, and **JavaScript mouse events** to dynamically update the effect.

---

##  Features
- Fullscreen background video  
- Smooth spotlight/mask effect following cursor  
- CSS variable–based dynamic gradient  
- Lightweight & easy to customize  
- Perfect for UI/UX practice projects  

---

## 📂 Project Structure

📁 Project Folder
├── index.html
├── style.css
└── script.js


---

## 🧩 How It Works

### ✔ JavaScript
Listens to mouse movement and updates CSS variables:
```js
document.addEventListener("mousemove", function(e){
   document.body.style.setProperty("--x", e.clientX + 'px');
   document.body.style.setProperty("--y", e.clientY + 'px');
});
