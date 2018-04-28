import '../../css/common.css';
import BgComponent from '../components/BgComponent';
import MainPageUI from '../components/MainPageUI';

class MainPage {
  render() {
    const app = document.getElementById('app');
    
    app.innerHTML = `
      ${BgComponent.render()}
      ${MainPageUI.render()}
    `;
  }
}

export default MainPage;