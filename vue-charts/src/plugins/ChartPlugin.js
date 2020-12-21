import Chart from 'chart.js';

export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart;
    console.log('Chart Plugin Installed');
  }
};