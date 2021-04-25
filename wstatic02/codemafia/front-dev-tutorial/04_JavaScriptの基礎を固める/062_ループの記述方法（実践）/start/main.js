const todos = [
  { id: 1, title: "Go to school", completed: true },
  { id: 2, title: "Go to museum", completed: true },
  { id: 3, title: "Go to shopping", completed: false },
];

console.log("for");
for (let i = 0; i < todos.length; i++) {
  let todo = todos[i];
  console.log(i, todo.title);
}

console.log("for in");
for (let i in todos) {
  let todo = todos[i];
  console.log(i, todo.title);
}

console.log("for of");
for (let todo of todos) {
  console.log(todo.title);
}
