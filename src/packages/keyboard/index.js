import Keyboard from './index.vue';
// import './actionsheet.scss';
Keyboard.install = function (Vue) {
    Vue.component(Keyboard.name, Keyboard);
};

export default Keyboard