
const initialState={
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
        }
      ]
}

const reducer=(state=initialState,action)=>{
  switch(action.type){
    case 'SHOW_USERS':
      return {
        dataSource:[...state.dataSource,action.dataSource]
      }
    default:
      return initialState;
  }
}

export default reducer;