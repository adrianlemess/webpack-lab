import _ from 'lodash';

function component() {
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