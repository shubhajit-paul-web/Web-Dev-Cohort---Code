# 🚀 A-Z Async JS Mastery Plan (Promises Edition) by Shubhajit

Master **Asynchronous JavaScript** (Promises) — from **Beginner to Advanced** in a structured, step-by-step, easy-to-understand way following the **80/20 Rule**.

---

## 🧠 Structure of This Plan

Each step has:
1. 🔥 **80/20 Focus List**: Key things to learn first (most impact)
2. 📚 **Step-by-Step Learning**: Clear and simple actions

---

## ✅ Mastery Tracker

| Step | Topic                               | Completed? |
|------|-------------------------------------|------------|
| 1    | Sync vs Async Basics                | ⬜️         |
| 2    | Callbacks & Callback Hell           | ⬜️         |
| 3    | Promises: then, catch, finally      | ⬜️         |
| 4    | Creating Custom Promises            | ⬜️         |
| 5    | Chaining Promises                   | ⬜️         |
| 6    | async/await                         | ⬜️         |
| 7    | fetch API + real data               | ⬜️         |
| 8    | Advanced Promise utilities          | ⬜️         |
| 9    | Deep Error Handling                 | ⬜️         |
| 10   | Real-world async project usage      | ⬜️         |

---

## 🧠 Step 1: Understanding Sync vs Async

### 🔥 80/20 Focus:
- Sync vs Async
- Blocking vs Non-blocking
- Why async is needed
- Basic Event Loop

### 📚 Learning:
- JS runs line by line (synchronous)
- Async allows JS to continue while waiting (e.g. API call)
- Learn with `setTimeout` example
- Visualize event loop (using loupe or animation)

---

## ⚡ Step 2: Callbacks – The Old Way

### 🔥 80/20 Focus:
- Callback function basics
- Callback Hell problem
- Limitations

### 📚 Learning:
- Use `setTimeout()` to create a callback
- Nest multiple callbacks → see callback hell
- Understand why it's bad (unreadable, hard to debug)

---

## 🔮 Step 3: Intro to Promises

### 🔥 80/20 Focus:
- What is a Promise?
- States: Pending, Fulfilled, Rejected
- `.then`, `.catch`, `.finally`

### 📚 Learning:
- Promise = placeholder for future value
- Handle success with `.then()`
- Handle error with `.catch()`
- Cleanup with `.finally()`

---

## 🧩 Step 4: Creating Custom Promises

### 🔥 80/20 Focus:
- `new Promise()` syntax
- `resolve`, `reject`
- Control flow

### 📚 Learning:
- Create custom Promise with `setTimeout()`
- Manually resolve or reject based on condition
- Handle with `.then()` and `.catch()`

---

## 🧪 Step 5: Promise Chaining

### 🔥 80/20 Focus:
- Return value from `.then()`
- Multiple `.then()` calls
- Single `.catch()` for all

### 📚 Learning:
- Pass data from one `.then()` to another
- Add `.catch()` once at the end
- Example: Multiple data transformations

---

## ⏳ Step 6: async/await – Modern Way

### 🔥 80/20 Focus:
- `async` functions
- `await` keyword
- try-catch for errors

### 📚 Learning:
- Replace `.then()` with `await`
- Use `try-catch` for error handling
- Cleaner, more readable code

---

## 🚀 Step 7: Real-World with `fetch()`

### 🔥 80/20 Focus:
- HTTP requests with `fetch()`
- `.json()` parsing
- Loading & Error states

### 📚 Learning:
- Call real API (e.g. JSONPlaceholder)
- Use `.then()` or `await`
- Handle loading and error in UI

---

## 🧠 Step 8: Advanced Promise Tools

### 🔥 80/20 Focus:
- `Promise.all()`
- `Promise.race()`
- `Promise.allSettled()`
- `Promise.any()`

### 📚 Learning:
- Run multiple Promises in parallel
- Use best tool depending on goal (first result, all results, etc.)
- Real-world example: load multiple users

---

## 🧪 Step 9: Error Handling Deep Dive

### 🔥 80/20 Focus:
- Bubbling errors
- Common mistakes
- Debugging async

### 📚 Learning:
- Handle errors properly with `.catch()` or `try-catch`
- Log clearly
- Avoid double calls or silent fails

---

## 🛠️ Step 10: Real Project Usage

### 🔥 80/20 Focus:
- Async with DOM
- UI: Loading / Error / Retry
- Request cancellation

### 📚 Learning:
- Build:
  - Weather App with `fetch()`
  - Form with async submit
  - Search with delayed fetch
- Use `AbortController` to cancel fetch
- Retry failed requests

---

## 🧠 Pro Tips

- Use real examples (not just theory)
- Visualize: Event loop, async flow
- Try debugging async code in browser
- Use Chrome DevTools’ async stack trace
- Read clean code examples from MDN & GitHub

---

Made with 💻 by **Shubhajit**  
Stay curious, keep building 🚀