const socket = io()

const loadNotes = () => {
  socket.on('loadNotes', (data)=> {
    console.log(data);
  })  
}
export default loadNotes;