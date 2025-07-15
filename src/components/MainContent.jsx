function MainContent() {
    const todosArr = [
      { id: 1, title: 'states' },
      { id: 2, title: 'props' },
      { id: 3, title: 'react elements' },
    ];
    const todos = todosArr.map((item) => {
      return <li key={item.id}>{item.title}</li>;
    });

    return (
      <section>
        <h3>Continue learning react concepts like: </h3>
        <ul>{todos}</ul>
      </section>
    );
}

export default MainContent