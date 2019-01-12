const random_jokes = [
    {
        setup: 'mock数据 :问题1',
        punchline: '一段描述',
    },
    {
        setup: 'mock数据 :问题2',
        punchline: '一段描述',
    },
    {
        setup: 'mock数据 :问题3',
        punchline: '一段描述',
    },
];

let random_joke_call_count = 0;
export default {
    //mock模拟数据
    'get /dev/random_joke': function (req, res) {
        const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
        random_joke_call_count += 1;
        setTimeout(() => {
            res.json(responseObj);
        }, 3000);
    },

    // //模拟请求出错
    // 'get /dev/random_joke': function (req, res) {
    //    res.status(500);
    //    res.json({})
    // },

    //简单模拟数据
    // 'get /dev/random_joke': {
    //     setup: 'What is the object oriented way to get wealthy ?',
    //     punchline: 'Inheritance',
    //   },
};