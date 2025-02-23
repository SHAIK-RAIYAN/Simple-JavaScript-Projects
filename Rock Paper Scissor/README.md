# 🎮 Rock-Paper-Scissors Game

An engaging and interactive **Rock-Paper-Scissors** game crafted with **HTML**, **CSS**, and **JavaScript**. This project showcases clean, modular code and best practices in front-end development—perfect for developers exploring event handling, DOM manipulation, and responsive design.

---

## 🚀 **Key Techniques and Features**

- 🎯 **Event Handling with [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)**

  - Captures user interactions to handle click events seamlessly.

- 🎲 **Random Number Generation**

  - Uses [`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) and [`Math.floor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) to simulate the computer's unpredictable moves.

- 🛠️ **Dynamic DOM Manipulation**

  - Updates scores and messages live with [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) and [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML).

- 🎨 **Interactive CSS Hover Effects**

  - Visual feedback on user interaction via the [`:hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) pseudo-class.

- 📐 **Responsive Flexbox Layout**
  - Utilizes [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) for a clean, adaptable design across devices.

---

## 🔧 **Technologies and Libraries of Interest**

- 🖋️ **Google Fonts** (Roboto): Modern typography for a sleek look.
- 🌐 **Favicon Setup**: Adds a custom icon using a simple HTML `<link>` tag with `rel="website icon"`.

---

## 📂 **Project Structure**

```
/rock-paper-scissors-game
│
├── index.html          # Main HTML file
├── RPS.css             # Stylesheet for layout and design
├── RPS.js              # Game logic and interactivity
├── images/             # Contains all game-related images
│   ├── icon-logo.jpeg  # Favicon used in the header
│   ├── rock.png        # Rock choice image
│   ├── paper.png       # Paper choice image
│   └── scissors.png    # Scissor choice image
```

### 🖼️ **Images Directory**

Holds all visual assets for the game. Each image corresponds to a player choice or the site's favicon.

### 📄 [index.html](./index.html)

The core file structuring the game's UI, linking external CSS and JavaScript resources.

### 🎨 [RPS.css](./RPS.css)

Manages the visual styling, layout, hover effects, and overall aesthetic.

### 🔍 [RPS.js](./RPS.js)

Contains the interactive logic for scorekeeping, random computer move generation, and dynamic game updates.

---

Enjoy coding and let the best choice win! 🤖✌️
