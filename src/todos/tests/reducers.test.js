import { expect } from 'chai';
import { todos } from '../reducers';
describe('The todos reducer', () => {
    it('Add a new Todo when CREATE_TODO action is received', () => {
        const fakeTodo = { isCompleted: false, text: "test todo" };
        const fakeAction = {
            type: 'CREATE_TODO',
            payload: {
                todo: fakeTodo
            }
        };
        const originalState = {
            isLoading: false,
            data: []
        };
        const expected = {
            isLoading: false,
            data: [fakeTodo]
        };
        const actual = todos(originalState, fakeAction);
        expect(actual).to.deep.equal(expected);
    });
});
