import Bank from './index.vue';

Bank.install = function (Vue) {
    Vue.component(Bank.name, Bank);
};

export default Bank