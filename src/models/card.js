
//未请求数据之前
// export default {
//     namespace: 'list',
//     state: {
//         data: [
//             {
//                 id: 1,
//                 setup: '想我了吗?',
//                 punchline: '你猜',

//             },
//             {
//                 id: 2,
//                 setup: '你的工作怎么样?',
//                 punchline: '很好',
//             },
//         ],
//         counter: 10
//     },
//     reducers: {
//         addNewCard(state, { payload: newCard }) {
//             const nextCounter = state.counter + 1;
//             const newCardWithId = { ...newCard, id: nextCounter };
//             const nextData = state.data.concat(newCardWithId);
//             return {
//                 data: nextData,
//                 counter: nextCounter,
//             };
//         }
//     }

// }

// 异步请求数据
import request from '../utils/request'
import { message } from 'antd';

const delay = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    })
}

export default {
    namespace: 'card',
    state: {
        data: [],
        counter: 0,
    },
    effects: {
        *getList(_, sagaEffects) {
            const { call, put } = sagaEffects;
            const endPointURI = '/dev/random_joke';
            //  'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';
            try {
                const dataSource = yield call(request, endPointURI);//请求数据
                yield put({ type: 'addNewCard', payload: dataSource });//dispatch action

                yield call(delay, 3000);//延迟

                const dataSource2 = yield call(request, endPointURI);
                yield put({ type: 'addNewCard', payload: dataSource2 })

            } catch (e) {
                message.warning('数据请求失败！')
            }
        }

    },
    reducers: {
        addNewCard(state, { payload: newCard }) {
            const nextCounter = state.counter + 1;
            const newCardWithId = { ...newCard, id: nextCounter };
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counterL: nextCounter
            }
        }
    }
}