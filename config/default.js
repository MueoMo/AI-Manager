// 编写雨2023/4/12  by:Mueo
// 默认配置 - 不要修改常量名

// 待审核数据库名称
const dbInputName = 'DATA_AI_AUDIT' 

// 过审数据库名称
const dbAiName = 'DATA_AI_CONFIRM' 

// 不过审数据库名称
const dbPassName = 'DATA_AI_PASS' 

// 发现页展示的AI数量,过多可能引起卡顿
const getAiDataNums = 5 

// 对于用户提交数据表单的合法性检测逻辑
// 返回true表示数据合法
const checkInputData = function(data){
  if(data.length == 0){return false}
  else{
  function check(data){return data == "";}
  if(data.some(check)){return false}
  else{return true}
}}


// 导出
module.exports = {
  dbInputName,dbAiName,dbPassName,
  getAiDataNums,checkInputData
};