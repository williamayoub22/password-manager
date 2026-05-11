<img width="2560" height="1175" alt="image" src="https://github.com/user-attachments/assets/e1886cbe-0091-46b1-ad28-5a4e2d7385c5" />


# Algorithmic Password Manager (Concept Demo)

This project is a demonstration of a **Stateless** or **Algorithmic** password manager. It is designed to provide a consistent, reproducible way to generate passwords without relying on a central database or cloud storage.

**Live Demo:** [https://password-hashing-concept.netlify.app/](https://password-hashing-concept.netlify.app/)

---

## ⚠️ Important Sanitization Disclaimer
This repository represents my personal approach to password management. However, for security reasons, the **actual hashing algorithm I use personally has been removed**. 

In its place, I have provided a **`dummyHash.js`** file. This "Dummy" algorithm is for **demonstration purposes only**. It creates a visually plausible hash but is cryptographically insecure. 
* **Do not use this specific implementation to manage real-world passwords.**

---

## The Paradigm: Stateless vs. Vault-Based

### What is a Stateless Password Manager?
Traditional managers (like Bitwarden or 1Password) use a **Vault-based** model. They generate random strings and store them in an encrypted database. 

This project uses an **Algorithmic (Stateless)** model. Instead of storing passwords, it calculates them on the fly using a deterministic formula:  
`Password = Function(Master_Key + Website_Name)`

### Pros
* **No Database to Breach:** Since no passwords are saved, there is no "vault" for a hacker to steal. Even if a server is compromised, your data isn't there.
* **Ultimate Privacy:** You own the logic. There is no third-party provider or cloud syncing involved.
* **Zero-Footprint:** You can generate your passwords on any device, entirely offline, as long as you have the code and your Master Key.

### Cons
* **Rigidity:** It is difficult to change a single password. Changing your "Netflix" password would require changing your Master Key (altering all passwords) or adding a versioning suffix (e.g., "Netflix_v2") which could get messy.
* **Site Constraints:** Websites have varying rules for length and special characters. Adapting a pure algorithm to these arbitrary constraints requires manual handling.

---

## File Structure & Purpose

| File | Purpose |
| :--- | :--- |
| `index.html` | The main entry point and User Interface. |
| `main.css` | General styling, layouts, and typography. |
| `animation.css` | Contains CSS keyframes for the lock animation and input validation feedback. |
| `js/main.js` | The "brain" of the app. Handles event listeners, UI routing, and coordinates the hashing logic. |
| `js/dummyHash.js` | The sanitized demonstration algorithm (replaces my private logic). |
| `js/animation.js` | Helper script to trigger CSS animation classes via JavaScript. |
| `js/clipboard.js` | Utility script to handle the "Copy to Clipboard" functionality and mobile keyboard management. |
| `js/crypto-js.min.js` | Standard library used for MD5 hashing support. |

---

## How to Use the Demo
1.  Enter a **Master Pass Key** (this acts as the salt/key for the generation).
2.  Enter the **App/Website Name** (the unique identifier).
3.  Select a hashing method from the dropdown.
4.  Click **Go!** to generate the result.
5.  Click the generated **Result** text to automatically copy it to your clipboard.

---

## Development Notes
* **Pure Frontend:** This project uses no backend. All calculations are performed locally in the user's browser.
* **Mobile Optimized:** Includes specific viewport handling and clipboard logic for Android/iOS compatibility.
