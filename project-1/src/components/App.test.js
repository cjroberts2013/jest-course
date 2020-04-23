import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';




const app = shallow(<App />);

it('renders correctly', () => {
    expect(toJson(app)).toMatchSnapshot();
})

