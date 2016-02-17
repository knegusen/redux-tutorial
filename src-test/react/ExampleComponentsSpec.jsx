import React from 'react';
import { shallow } from 'enzyme';
import ExampleComponent from '../../src/react/ExampleComponent';
import ExampleComponents from '../../src/react/ExampleComponents';
import ExampleStateComponent from '../../src/react/ExampleStateComponent';

describe('ExampleComponents', () => {
    it('is rendered correctly', () => {
        const component = shallow(<ExampleComponents />);
        expect(component.contains(
            <ExampleComponent>
                This is the example component
            </ExampleComponent>,
            <ExampleStateComponent />
        )).toBe(true);
    });
});