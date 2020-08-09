import { getTurnData } from '../../models/author.repository'
import { authors } from '../../data/author';

export default function authorReducer(state={authors,turnData:getTurnData(authors),highlight:''}, action) {
    switch (action.type) {
        case 'CREATE_AUTHOR':
            return Object.assign({},state,{
                authors:state.authors.concat([action.author.author])
            });
        case 'ANSWER_SELECTED':
            const isCorrect = state.turnData.author.books.some((book) => book == action.answer);
            return Object.assign({}, state, { highlight: isCorrect ? 'correct' : 'wrong' });
        case 'CONTINUE':
            return {
                ...state,
                highlight: '',
                turnData: getTurnData(state.authors)
            }

        default:
            return state
    }
}