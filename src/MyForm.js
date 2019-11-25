import React, {PureComponent } from 'react';

import {
    Form,
    Select,
    Radio,
    Button,
    Checkbox,
    Row,
    Col,
    Input,
    DatePicker
  } from 'antd';
import './App.css';


const { Option } = Select;

// const JMyForm = Form.create({
//   mapPropsToFields: (props) => {
//     console.log("biaoge",props.numbs)
//       //转换form数据格式
//       return transferFormData(props.numbs, (v, k) => {
//           return v
//       })
//   },
//   // onValuesChange: (props, fields) => {
//   //     _.each(fields, (v, k) => {
//   //         props.formData[k] = v
//   //     })
//   // }
// })(MyForm)

class MyForm extends PureComponent  {

    constructor(props){
      super(props);
      this.state={
        numbs:null,
        addInfo:null,
        dataSource:null
      }
    }


    
    handleSubmit = e => {
        e.preventDefault();
        
        //this.context.addInfo=this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.fromSon(this.props.form.getFieldsValue())
            
          }
        });
      };
    componentWillMount() {
      this.setState({
          numbs: this.props.numbs
      });
      console.log('My Form nums',this.state.numbs)
    }

    // componentWillUpdate(nextProps, nextState){
    //   console.log('Form nextProps componentWillUpdate',nextProps)
    //   console.log('Form nextState componentWillUpdate',nextState)
    //   if(nextState !==  nextState) {
    //     console.log('Form value',this.props.form.getFieldsValue())
    //     this.props.form.validateFields((err, values) => {
    //       if (!err) {
    //         this.props.fromSon(this.props.form.getFieldsValue())
    //         console.log('Received values of form: ', values);
    //         console.log('Consumer form: ', this.dataSource);
    //       }
    //     });
    //   }     
    // }
      render() {
        const {numbs} = this.props;
        if(numbs){
          var sex=numbs.sex==='男'?'nan':'nv';
        
        }
        
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        };
        return (
          
            
              
              <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                
                <Form.Item label="姓名">
                  {getFieldDecorator('username',{
                    initialValue:numbs?numbs.name:""
                  })(<Input />)}
                </Form.Item>

                <Form.Item label="性别">
                  {getFieldDecorator('radio-group',{
                    initialValue:numbs?sex:""
                  })(
                    <Radio.Group>
                      <Radio value="nan">男</Radio>
                      <Radio value="nv">女</Radio>
                    </Radio.Group>,
                  )}
                </Form.Item>

                <Form.Item label="职业" hasFeedback>
                  {getFieldDecorator('select')(
                    <Select placeholder="Please select a job">
                      <Option value="accountant">会计</Option>
                      <Option value="teacher">老师</Option>
                      <Option value="driver">司机</Option>
                    </Select>,
                  )}
                </Form.Item>     
        
                <Form.Item label="出生日期">
                  {getFieldDecorator('date-picker')(<DatePicker />)}
                </Form.Item>

                <Form.Item label="爱好">
                  {getFieldDecorator('checkbox-group')(
                    <Checkbox.Group style={{ width: '100%' }}>
                      <Row>
                        <Col span={8}>
                          <Checkbox value="badminton">羽毛球</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="basketball">
                            篮球
                          </Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="pingPong">乒乓球</Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>,
                  )}
                </Form.Item>
        
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            
          
        );
      }
}
const WrappedDemo = Form.create()(MyForm);
export default WrappedDemo;