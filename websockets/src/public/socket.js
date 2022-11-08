const socket = io()

export const loadNotes = () => {
  socket.on('loadNotes', (data)=> {
    console.log(data);
  })  
}
