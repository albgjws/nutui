import Tagwall from './index.vue';

Tagwall.install = function (Vue) {
    Vue.component(Tagwall.name, Tagwall);
};

export default Tagwall