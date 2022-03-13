import { expect } from "chai";
import { getCompletedTodos } from "../selectors";

describe('the getCompletedTods Selector', () => {
    it('Returns only completedTodos', () => {
        const fakeTodos = [{
            text: 'say hi',
            isCompleted: true
        }, {
            text: 'say bye',
            isCompleted: false
        }];
        const expected = [{
            text: 'say hi',
            isCompleted: true
        }]
        const actual = getCompletedTodos.resultFunc(fakeTodos);
        expect(actual).to.deep.equal(expected);
    });

});