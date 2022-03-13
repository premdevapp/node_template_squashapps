const socket = io();
const butn = document.querySelector('#change');
butn.addEventListener('click', () => {
    socket.emit('change', {
        text: 'change'
    });
});
socket.on("message", (data) => {
  console.log(data);
});
