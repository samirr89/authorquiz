export const createAuthor = (author) => {
    return { type: 'CREATE_AUTHOR', author }
}

export const onAnswerSelected = (answer) => {
    return { type: 'ANSWER_SELECTED', answer }
}
export const continueQuiz = () => {
    return { type: 'CONTINUE' }
}