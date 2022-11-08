const loadNotes = require('./socket.js').default

loadNotes();

const noteForm = document.getElementById('noteForm');

noteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(noteForm.title.value, noteForm['description'].value);
})