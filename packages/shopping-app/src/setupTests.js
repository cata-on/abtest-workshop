import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// The network layer is not needed when testing.
// Avoid opening a socket connection
// when importing the _environment_.
jest.mock('@dazzle/thorax', () => ({}));

configure({ adapter: new Adapter() });

global.cancelAnimationFrame = Function.prototype;
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

global.localStorage = {
  setItem: jest.fn(),
  getItem: jest.fn(),
};
