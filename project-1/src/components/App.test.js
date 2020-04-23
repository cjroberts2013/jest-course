import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';




const app = shallow(<App />);

it('renders correctly', () => {
    expect(toJson(app)).toMatchSnapshot();
});

it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([])
});

it('adds a new gift to `state` when clicking the `add gift` button', () => {

});