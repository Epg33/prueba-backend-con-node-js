import { find } from "./models/Note";

export default (io) => {
  io.on("connection", (socket) => {
    const emitNote = async () => {
      const notes = await find();
      
      io.emit('loadNotes', notes)
    };
    emitNote();
  });
};
