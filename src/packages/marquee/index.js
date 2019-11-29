import Marquee from './index.vue';

Marquee.install = function (Vue) {
    Vue.component(Marquee.name, Marquee);
};

export default Marquee