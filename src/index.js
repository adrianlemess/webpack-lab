import _ from 'lodash';
import './style.css';
// import Img from './images.jpg';
import Data from './data.xml';

function component() {
    console.log(Data)
    let element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // let img = new Image();
    // img.src = Img;

    // element.appendChild(img)
    return element;
  }
  
  document.body.appendChild(component());