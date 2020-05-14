import Indexlist from './index.vue';
import './indexlist.scss';

Indexlist.install = function (Vue) {
    Vue.component(Indexlist.name, Indexlist);
};

export default Indexlist