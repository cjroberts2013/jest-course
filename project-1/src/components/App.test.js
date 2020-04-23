import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';




const app = shallow(<App />);

it('renders correctly', () => {
    expect(app).toMatchSnapShot();
})