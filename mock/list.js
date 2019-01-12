const random_jokes = [
    {
        id: 1,
        name: 'mock数据 :百度',
        desc: '一段描述',
        url: 'https://www.baidu.com'
    },
    {
        id: 2,
        name: 'mock数据 :京东',
        desc: '一段描述',
        url: 'https://www.jd.com'
    },
    {
        id: 3,
        name: 'mock数据 :淘宝',
        desc: '一段描述',
        url: 'https://www.taobao.com'
    },
];

let random_joke_call_count = 0;
export default {
    //mock模拟数据
    // 'get /dev/random_joke': function (req, res) {
    //     // const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
    //     // random_joke_call_count += 1;
    //     // setTimeout(() => {
    //     //     res.json(responseObj);
    //     // }, 3000);
    //     setTimeout(() => {
    //         res.json(random_jokes);
    //     }, 3000);
    // },

    //模拟请求出错
    'get /dev/random_joke': function (req, res) {
        console.log('ssssaaa', req, res)
        res.status(500);
        res.json({})
    },

    //简单模拟数据
    // 'get /dev/random_joke': {
    //     setup: 'What is the object oriented way to get wealthy ?',
    //     punchline: 'Inheritance',
    //   },
};