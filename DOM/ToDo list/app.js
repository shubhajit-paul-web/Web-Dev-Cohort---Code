const todoInput = document.querySelector("#todoInput");
const todoAddBtn = document.querySelector("#todo-add-btn");
const todoList = document.querySelector("#todoList");
const errorMsg = document.querySelector("#error-msg");

let editingLi = null; // Track the current <li> being edited

todoAddBtn.addEventListener("click", () => {
	let todoInputValue = todoInput.value.trim();

	if (todoInputValue === "") {
		errorMsg.classList.remove("hidden");
		return;
	}

	if (todoAddBtn.textContent === "Add") {
		errorMsg.classList.add("hidden");
		// Add todo
		todoList.innerHTML += `
			<li class="flex items-center justify-between bg-gray-900 p-4 rounded-xl hover-scale glassmorphism">
				<span class="text-white flex-1 font-medium" title="${todoInputValue}">
					${todoInputValue.length > 35 ? todoInputValue.slice(0, 35) + "..." : todoInputValue}
				</span>
				<div class="flex space-x-3">
					<button class="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-all duration-200" id="done-btn">Done</button>
					<button class="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition-all duration-200" id="edit-btn">Edit</button>
					<button class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all duration-200" id="remove-btn">Remove</button>
				</div>
			</li>
		`;
		todoInput.value = "";
	} else if (todoAddBtn.textContent === "Edit") {
		// Edit todo
		editingLi.children[0].textContent = todoInput.value;
		todoInput.value = "";
		todoAddBtn.textContent = "Add";
	}
});

todoList.addEventListener("click", (e) => {
	let li = e.target.closest("li");

	if (e.target.id === "done-btn") {
		li.classList.add("todoItemDone");
		e.target.disabled = true;
		e.target.title = "Task is already completed";
	}
	if (e.target.id === "remove-btn") {
		li.remove();
	}
	if (e.target.id === "edit-btn") {
		let span = li.children[0];

		todoInput.value = span.textContent.trim();
		todoInput.focus();
		todoAddBtn.textContent = "Edit";
		editingLi = li;
	}
});
