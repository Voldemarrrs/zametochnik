const inputEl = document.querySelector('.inputEl');
const buttonEl = document.querySelector('.btnEl');
const listsEl = document.querySelector('.lists');

function getNoteHTML(note, index) {
  return `
    <li class="list ${note.action ? 'active' : ''}">
      <p>${note.title}</p>
      <div class="actions">
        <button class="done ${note.action ? 'doneActive' : ''}" data-index="${index}" data-type="toggle">Выполнить</button>
        <button class="remove" data-index="${index}" data-type="remove">Удалить</button>
      </div>
    </li>
  `;
}

const notes = [
  {
    title: 'Наша первая заметка',
    action: false
  },
  {
    title: 'Наша вторая заметка',
    action: true
  },
  {
    title: 'Наша третья заметка',
    action: false
  }
];

function renderNotes() {
  listsEl.innerHTML = '';
  for (let i = 0; i < notes.length; i++) {
    listsEl.insertAdjacentHTML('beforeend', getNoteHTML(notes[i], i));
  }
}

renderNotes();

buttonEl.onclick = function(event) {
  event.preventDefault();

  if (inputEl.value.length === 0) {
    return;
  }

  const newNote = {
    title: inputEl.value,
    action: false
  };

  notes.push(newNote);
  renderNotes();
  inputEl.value = '';
};

listsEl.onclick = function(event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === 'toggle') {
      notes[index].action = !notes[index].action;
    } else if (type === 'remove') {
      notes.splice(index, 1);
    }

    renderNotes();
  }
};