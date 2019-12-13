import Swipecell from './index.vue';

Swipecell.install = function (Vue) {
    Vue.component(Swipecell.name, Swipecell);
};

export default Swipecell