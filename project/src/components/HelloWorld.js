import '../../css/common.css';

class HelloWorld {
  render() {
    const app = document.getElementById('app');
    
    app.innerHTML = `
      <h1>Hello World</h1>
    `;
  }
}

export default HelloWorld;