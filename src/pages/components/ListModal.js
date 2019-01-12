import { Component } from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

class ListEditModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    showModalHandler = (e) => {
        if (e) e.stopPropagation();
        this.setState({
            visible: true,
        });
    };

    hideModelHandler = () => {
        this.setState({
            visible: false,
        });
    };

    okHandler = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.hideModelHandler();
                this.props.onOk(values);
            }
        });
    };

    render() {
        const { children } = this.props;
        const { getFieldDecorator } = this.props.form;
        const { title, des, zs } = this.props.record;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };

        return (
            <span>
                <span onClick={this.showModalHandler}>
                    {children}
                </span>
                <Modal
                    title={title ? "编辑" : "添加"}
                    visible={this.state.visible}
                    okText="确定"
                    cancelText="取消"
                    onOk={this.okHandler}
                    onCancel={this.hideModelHandler}
                >
                    <Form layout='horizontal' onSubmit={this.okHandler}>
                        <FormItem
                            {...formItemLayout}
                            label="名称"
                        >
                            {
                                getFieldDecorator('title', {
                                    rules: [{ required: true }],
                                    initialValue: title || undefined,
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="描述"
                        >
                            {
                                getFieldDecorator('des', {
                                    initialValue: des || undefined,
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="建议"
                        >
                            {
                                getFieldDecorator('zs', {
                                    initialValue: zs || undefined,
                                })(<Input />)
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </span>
        );
    }
}

export default Form.create()(ListEditModal);
