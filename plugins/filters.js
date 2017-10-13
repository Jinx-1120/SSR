import Vue from 'vue';

export function grade (value) {
  switch (value){
    case 1:
      return '小学';
    case 2:
      return '初中';
    case 3:
      return '高中';
    case 4:
      return '大学';
    case 5:
      return '研究生导师'
  }
}
export function message (value) {
  if(value == 'system'){
    return '系统'
  }else{
    return '个人'
  }
}
const filters = {
  grade,
  message
}

export default filters;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
