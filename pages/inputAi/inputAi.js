import { dbInputName,checkInputData } from '../../config/default.js';
const db = qq.cloud.database()
const DATA_AI_AUDIT = db.collection(dbInputName)

Page({
  data: {
// input
 input_ai: {
   input_aiName:{
    input_name: '名称',
    input_class:'input_aiName',
    input_type: 'text'
},},
// 按钮
 button_ai:{
    button_mine:{button_name:'我的提交',button_form_type:'',button_id:'button_mine',button_type:'primary',button_size:'mini'},
    button_input:{button_name:'提交',button_form_type:'submit',button_id:'button_input',button_type:'primary',button_size:'default'}
  },
//   选择器
 radio_aiGender:[
  {name: 'man', value: '男'},
  {name: 'woman', value: '女'},
 ],
 checkbox_aiTag:[
  {name: 'plot', value: '#剧情',check_id:"1",color:"background-color:#EBEAF9;",click:0},
  {name: 'love', value: '#恋爱',check_id:"2",color:"background-color:#EBEAF9;",click:0},
  {name: 'system', value: '#系统',check_id:"3",color:"background-color:#EBEAF9;",click:0},
  {name: 'long', value: '#强势',check_id:"4",color:"background-color:#EBEAF9;",click:0},
  {name: 'short', value: '#弱势',check_id:"5",color:"background-color:#EBEAF9;",click:0}]
// data结束
},
  checkboxChange(e) {
    console.log('标签:', e.detail.value)
  },
  checkSubmit(e) {
    let data = Object.values(e.detail.value);
    // 判断结果
    if(checkInputData(data)){
     console.log('表单数据:', e.detail.value)
    // 数据库
     DATA_AI_AUDIT.add({
       data:{
         data_ai:e.detail.value,
         type:'audit'
       }
     })
     .then(res => {console.log(res)})
     .catch(console.error);
qq.showToast({
  title: '提交成功',
  icon: 'success',
  duration: 2000
})
    }else{
     console.log("存在空或不合法数据")
    }
  },
  // 标签选中
labelClick(event) {
  
  const colors = {
  1: '#FFCC99',
  2: '#66CCFF',
  3: '#66FF99',
  4: '#FF99CC',
  5: '#CCCC66'
};

  const id = parseInt(event.currentTarget.id);
  if (isNaN(id)) {
    return;
  }
  const click = parseInt(event.currentTarget.dataset.click);
  if (isNaN(click)) {
    return;
  }
  if (click == 0 && colors.hasOwnProperty(id)) {
    this.setData({
      [`checkbox_aiTag[${id - 1}].color`]: `background-color: ${colors[id]};`,
      [`checkbox_aiTag[${id - 1}].click`]: 1
    });
  } else {
    this.setData({
      [`checkbox_aiTag[${id - 1}].color`]: 'background-color:#EBEAF9;',
      [`checkbox_aiTag[${id - 1}].click`]: click == 1?0:1
    });
  }
}

}) 
