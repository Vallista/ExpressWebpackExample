import MainPage from './pages/MainPage';

const mainLoop = () => {
  const app = document.createElement('div');
  app.id = 'app';
  
  document.body.appendChild(app);
  
  const mainPage = new MainPage();
  mainPage.render();
};

window.addEventListener('DOMContentLoaded', () => { mainLoop(); });