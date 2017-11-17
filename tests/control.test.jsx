import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Map } from 'react-leaflet';
import Control from '../dist/control';

it('renders without errors', () => {
  const wrapper = mount(
    <Map>
      <Control position="topleft" >
        <div>Test</div>
      </Control>
    </Map>
  );
});
