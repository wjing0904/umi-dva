import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';
const namespace = 'card';
const mapStateToProps = (state) => {
  const cardList = state[namespace].data;
  return {
    cardList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getList: () => {//获取列表数据
      dispatch({ type: `${namespace}/getList` })
    },
    onClickAdd: (newCard) => {//添加卡片
      const action = {
        // type: `${namespace}/getList`,
        type: `${namespace}/addNewCard`,
        payload: newCard,
      };
      dispatch(action);
    },
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class ListPage extends Component {
  constructor(props) {
    super(props);
    this.counter = 10;
    this.state = {
      cardList: [
        // {
        //   id: 1,
        //   setup: '想我了吗?',
        //   punchline: '你猜',

        // },
        // {
        //   id: 2,
        //   setup: '你的工作怎么样?',
        //   punchline: '很好',
        // },
      ],
    }
  }
  componentDidMount() {
    this.props.getList()
  }

  //添加一条数据
  addNewCard = () => {
    //基本方法
    // this.setState(prevState => {
    //   const prevCardList = prevState.cardList;
    //   this.counter += 1;
    //   const card = {
    //     id: this.counter,
    //     setup: `新加一个问题${this.counter}`,
    //     punchline: '问题描述',
    //   };
    //   return {
    //     cardList: prevCardList.concat(card),
    //   };
    // });
    this.props.onClickAdd({
      setup: `新加一个问题${this.counter}`,
      punchline: '问题描述',
    })
  }

  render() {
    console.log('sss', this)
    return (
      <div>
        {
          this.props.cardList.map(card => {
            // this.state.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div style={{ marginTop: 20 }}>
          <Button onClick={this.addNewCard}> 添加卡片 </Button>
        </div>
      </div>
    );
  }
}
export default ListPage