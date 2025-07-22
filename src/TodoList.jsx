function TodoList() {
  const todosArr = [
    { id: 1, title: 'states' },
    { id: 2, title: 'props' },
    { id: 3, title: 'react elements' },
  ];
  const todos = todosArr.map((item) => {
    return <li key={item.id}>{item.title}</li>;
  });

  return <ul>{todos}</ul>;
}

export default TodoList;
