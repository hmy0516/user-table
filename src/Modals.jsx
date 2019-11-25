import React, {PureComponent } from 'react';
import {Modal} from 'antd';
import MyForm from './MyForm';


    
class Modals extends PureComponent  {
    state = {
        visible: false,
        numbs: null,
        dataSource:this.props.dataSource,
        addInfo:null
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    getInfo=(info)=>{
        console.log('Modal getInfo',info)
        this.setState({
            addInfo:info
        })
    }

    handleOk = () => {
        
        this.props.fromSon(false,this.state.addInfo);
        //this.props.addData();
        this.setState({
            visible: false,
        });
        console.log('handleOk',this.state.visible)
    };

    handleCancel = () => {
        this.props.fromSon(false);
        this.setState({
            visible: false,
        });
        console.log('handleCancel',this.state.visible)
    };

    // componentWillMount() {
    //     this.setState({
    //         visible: this.props.visible,
    //         numbs: this.props.numbs
    //     });
    //     console.log('Modal Mount',this.props.numbs)
    //     console.log('Modal Mount visible',this.props.visible)
    // }
    render() {
        const { visible } = this.props;
        
        return (
            
            <div>
                <Modal
                    title="Basic Modal"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <MyForm dataSource={this.state.dataSource} numbs={this.props.numbs}
                    fromSon={(info) => {
                        this.getInfo(info)
                    }}
                    />
                </Modal>
            </div>
        )
    }
}

export default Modals;