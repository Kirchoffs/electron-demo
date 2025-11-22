const closeBtn = document.querySelector('.close-button');

closeBtn.addEventListener('click', () => {
    window.electronAPI.closeWindow();
});

const receiveFromPing = async () => {
  const response = await versions.ping();
  console.log(response);
  return response;
};

const setPing = async () => {
  const ping = document.getElementById('ping');

  const pingResponse = await receiveFromPing();
  ping.innerText = `Ping: ${pingResponse}`;
};

const information = document.getElementById('info');
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

setPing();
