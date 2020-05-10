const tasks = {
  getTasksToDo() {
    return this.tasks.filter(task => task.completed === false);
  },
  tasks: [
    {
      text: 'Grocery shopping',
      completed: true,
    },
    {
      text: 'Clean yard',
      completed: false,
    },
    {
      text: 'Film course',
      completed: false,
    },
  ]
};

console.log(tasks.getTasksToDo());
