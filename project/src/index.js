import HelloWorld from './components/HelloWorld';

const mainLoop = () => {
  const app = document.createElement('div');
  app.id = 'app';
  
  document.body.appendChild(app);
  
  const helloWorld = new HelloWorld();
  helloWorld.render();
};

window.addEventListener('DOMContentLoaded', () => { mainLoop(); });