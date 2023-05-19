import { dbAiName,getAiDataNums } from '../../config/default.js';
const db = qq.cloud.database()
const DATA_AI_CONFIRM = db.collection(dbAiName)
const numRandomDocs = getAiDataNums; 

Page({
data:{
// 初始化数据
  data_ai:[{name:'',headUrl:''}] 
},

onLoad(){
// 数据处理
DATA_AI_CONFIRM.count().then((res) => {
 const total = res.total;
 const randomIndexes = [];
 while (randomIndexes.length < numRandomDocs) {
 const randomIndex = Math.floor(Math.random() * total);
 if (!randomIndexes.includes(randomIndex)) {
  randomIndexes.push(randomIndex);
 }
}
 const promises = randomIndexes.map(randomIndex => {
  return DATA_AI_CONFIRM.skip(randomIndex).limit(1).get();
});
 Promise.all(promises).then((results) => {
  const randomDocs = results.map(result => result.data[0]);
  console.log(randomDocs)
// 最后处理，防止异步导致unfinded
  this.setData({
  data_ai: randomDocs
 })

});
// 数据处理结束
});
// onload结束
},
// Page结束
})
