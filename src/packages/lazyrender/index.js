import Lazyrender from './index.vue';

Lazyrender.install = function (Vue) {
    Vue.component(Lazyrender.name, Lazyrender);
};

export default Lazyrender