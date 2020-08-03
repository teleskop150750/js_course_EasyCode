const tasks = [
  {
    id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];

((arrOfTasks) => {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task.id] = task;
    return acc;
  }, {});

  // Elemen UI
  const taskContainer = document.querySelector('.tasks');
  const form = document.forms.addTask;

  const listItemTemplate = ({ title, body } = {}) => {
    const li = document.createElement('li');
    li.classList.add('task');

    const h3 = document.createElement('h3');
    h3.textContent = title;
    h3.classList.add('task__title');

    const p = document.createElement('p');
    p.textContent = body;
    p.classList.add('task__body');

    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.classList.add('task__button');

    li.append(h3);
    li.append(p);
    li.append(button);

    return li;
  };

  const renderAllTaskd = (taskList) => {
    if (!taskList) {
      console.error('Переедайте список задач');
      return;
    }

    const fragment = document.createDocumentFragment();

    Object.values(taskList).forEach((task) => {
      const li = listItemTemplate(task);
      fragment.append(li);
    });

    taskContainer.append(fragment);
  };

  const createNewTask = (title, body) => {
    const newTask = {
      title,
      body,
      completed: false,
      id: `task-${Math.random()}`,
    };

    objOfTasks[newTask.id] = newTask;

    return { ...newTask };
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const currentForm = e.target;
    const tittleValue = currentForm.title.value;
    const bodyValue = currentForm.body.value;

    if (!tittleValue || !bodyValue) {
      alert('Пожалуйтса, введите title и body');
      return;
    }

    const task = createNewTask(tittleValue, bodyValue);
    const listItem = listItemTemplate(task);
    taskContainer.prepend(listItem);
    form.reset();
  };

  renderAllTaskd(objOfTasks);
  form.addEventListener('submit', onFormSubmitHandler);
})(tasks);
