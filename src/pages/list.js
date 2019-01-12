import React from 'react';
import { Table, Modal, Button, Form, Input, Divider, Popconfirm } from 'antd';
import { connect } from 'dva';
import ListModal from './components/ListModal';
const FormItem = Form.Item;

const mapStateToProps = (state) => {
    return {
        dataSource: state.list.data,
        loading: state.loading.effects['list/queryList']
    }
}

@connect(mapStateToProps)
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    componentDidMount() {
        this.props.dispatch({
            type: 'list/queryList'
        })
    }
    // //新建按钮：显示弹框
    // showModal = () => {
    //     this.setState({ visible: true })
    // }
    // //关闭弹框
    // handleCancel = () => {
    //     this.setState({ visible: false });
    // }
    // //提交弹框数据
    // handleOk = () => {
    //     const { dispatch, form: { validateFields } } = this.props
    //     validateFields((err, values) => {
    //         if (!err) {
    //             dispatch({
    //                 type: 'list/addList',
    //                 payload: values
    //             })
    //             this.setState({ visible: false });
    //         }
    //     })
    // }
    //新增数据
    addList = (values) => {
        this.props.dispatch({
            type: 'list/addList',
            payload: values
        });
    }
    //删除数据
    delList = (record, id) => {
        this.props.dispatch({
            type: 'list/delList',
            payload: { record, id }
        })
    }
    //编辑数据
    updateList = (values, id) => {
        this.props.dispatch({
            type: 'list/updateList',
            payload: { id, values }
        })
    }

    render() {
        const { dataSource, loading, form: { getFieldDecorator } } = this.props;
        const columns = [
            {
                title: '名称',
                dataIndex: 'title',
            },
            {
                title: '描述',
                dataIndex: 'des',
            },
            {
                title: '建议',
                dataIndex: 'zs',
                render: value => <a href={value}>{value}</a>,
            },
            {
                title: '操作',
                dataIndex: 'opreation',
                render: (value, record) => {
                    return (
                        <span>
                            <ListModal record={record} onOk={values => this.updateList(values, record.id)}>
                                <a>编辑</a>
                            </ListModal>
                            <Divider type="vertical" />
                            <Popconfirm
                                title="你确定删除吗?"
                                okText="确定"
                                cancelText="取消"
                                onConfirm={() => this.delList(record, record.id)}
                            >
                                <a>删除</a>
                            </Popconfirm>
                        </span>
                    )
                }
            },
        ];
        return (
            <div>
                <Table title={() => '天气预报截取'} columns={columns} dataSource={dataSource} loading={loading} rowKey='id' />
                <ListModal record={{}} onOk={this.addList}>
                    <Button type="primary">新增</Button>
                </ListModal>
                {/* <Modal title="新建记录"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="确认"
                    cancelText="取消"
                >
                    <Form layout='horizontal'>
                        <FormItem label="名称" {...formItemLayoutModal}>
                            {getFieldDecorator('title', {
                                rules: [{ required: true }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="描述" {...formItemLayoutModal}>
                            {getFieldDecorator('des')(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="建议" {...formItemLayoutModal}>
                            {getFieldDecorator('zs', {
                            })(
                                <Input />
                            )}
                        </FormItem>
                    </Form>
                </Modal> */}
            </div>
        );
    }
}

export default Form.create()(List);
// export default connect(mapStateToProps)(List);