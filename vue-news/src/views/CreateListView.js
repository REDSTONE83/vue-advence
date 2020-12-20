import ListView from './ListView.vue';
import ListMixin from '../mixins/ListMixin';

export default function createListView(name) {
  return {
    name,
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    mixins: [ListMixin],
    render(createElement) {
      return createElement(ListView);
    },
  }
}