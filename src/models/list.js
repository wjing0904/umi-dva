
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
import { message } from 'antd';
import request from '../utils/request'
import { getList } from '../services/api';

const delay = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    })
}

export default {
    namespace: 'list',
    state: {
        data: []
    },
    effects: {
        //异步加载数据
        *queryList(_, sagaEffects) {
            // console.log('effects queryList', _, sagaEffects)
            const { call, put } = sagaEffects;
            const endPointURI = '/telematics/v3/weather';
            // const endPointURI = '/csApi/menu/menuList';
            // const endPointURI = '/dev/random_joke';
            //  'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';
            // try {
            const response = yield call(getList, endPointURI);//请求数据:call：参数一为地址，二为请求参数params
            yield put({ type: 'getList', payload: response.results[0].index });//dispatch action

            // } catch (e) {
            //     message.warning('数据请求失败！')
            // }
        }

    },
    reducers: {
        //获取列表数据
        getList(state, { payload: dataSource }) {
            // const newData = state.data.concat(dataSource); 0
            let newData = dataSource.map((item, index) => ({ ...item, id: index + 1 }));
            return {
                data: [...newData]
            }
        },
        //添加一组数据
        addList(state, { payload: values }) {
            let data = [...state.data, { ...values, id: state.data.length + 1 }]
            return {
                data
            }
        },
        //删除一组数据
        delList(state, { payload }) {
            let data = state.data.filter(item => item.id !== payload.id);
            return {
                data
            }
        },
        //修改一组数据
        updateList(state, { payload }) {
            state.data.map(item => {
                if (item.id == payload.id) {
                    item.title = payload.values.title
                    item.des = payload.values.des
                    item.zs = payload.values.zs
                    //item = { ...payload.values }
                }
            })
            return {
                data: [...state.data]
            }
        }
    }
}