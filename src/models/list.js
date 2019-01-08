export default {
    namespace: 'list',
    state: {
        data: [
            {
                id: 1,
                setup: '想我了吗?',
                punchline: '你猜',

            },
            {
                id: 2,
                setup: '你的工作怎么样?',
                punchline: '很好',
            },
        ],
        counter: 10
    },
    reducers: {
        addNewCard(state, { payload: newCard }) {
            const nextCounter = state.counter + 1;
            const newCardWithId = { ...newCard, id: nextCounter };
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counter: nextCounter,
            };
        }
    }

}