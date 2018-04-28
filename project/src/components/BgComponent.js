import '../../css/main-page.css';
import BackImg from '../../assets/background-image.jpg';

class BgComponent {
  render() {
    return `
      <div class="background-image"
           style="background-image: url(${BackImg})"></div>
    `;
  }
}

export default new BgComponent;