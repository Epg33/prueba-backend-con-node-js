import {loadNotes} from './socket.js';
import {onHandleSubmit} from './ui.js'
loadNotes();

const noteForm = document.getElementById('noteForm');

noteForm.addEventListener('submit', onHandleSubmit)