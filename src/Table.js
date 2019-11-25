import React, {PureComponent } from 'react';
import { Table, Divider ,Button,Tag } from 'antd';
import Modals from './Modals'

class Tables extends PureComponent  {
  state={
    showModal: false,
    columns : [
      {
          title: '序号',
          dataIndex: 'index',
          key: 'index'
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
      },
      {
        title: '职业',
        dataIndex: 'job',
        key: 'job',
      },
      {
        title: '出生日期',
        dataIndex: 'birthday',
        key: 'birthday',
      },
      {
        title: '爱好',
        dataIndex: 'hobby',
        key: 'hobby',
        render: hobby => (
          <span>
            {hobby.map(hobby => {
              return (
                <Tag key={hobby}>
                  {hobby.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
          title: '操作',
          key: 'action',
          render: (text, reocrd) => (
              <span>
                  <Button className="btn-table-edit" onClick={this.editSource.bind(this, text)}>编辑</Button>
                  <Divider type="vertical" />
                  <Button>删除</Button>
              </span>
          )
      }
    ],
    dataSource : [
      {
        key: '1',
        index: '1',
        name: 'John Brown',
        sex: '女',
        job: '会计', 
        birthday: '2019/11/21',
        hobby: ['羽毛球', '篮球'],
      },
      {
        key: '2',
        index: '2',
        name: 'Jim Green',
        sex: '男',
        job: '老师',
        birthday: '2019/11/21',
        hobby: [ '篮球','乒乓球'],
      },
      {
        key: '3',
        index: '3',
        name: 'Joe Black',
        sex: '女',
        job: '司机',
        birthday: '2019/11/21',
        hobby: ['羽毛球','乒乓球'],
      },
    ],
    itemInfo: null,
  }

  editSource(info, e) {
    this.setState({
        itemInfo: info,
        showModal: true
    })
  }
    
  closeModal(status,info) {
    console.log("info",info)
    this.setState({
        showModal: status,
        dataSource:[...this.state.dataSource,info]
    })        
  }
    
  render() {
    let {dataSource}=this.state;
    return (
      <div>
          <Table columns={this.state.columns} dataSource={dataSource} />
          {this.state.showModal ? (<Modals numbs={this.state.itemInfo} visible={this.state.showModal} 
          fromSon={(status,info) => {
              this.closeModal(status,info)
          }}
          />) : null}
      </div>
    );
  }
}
export default Tables;