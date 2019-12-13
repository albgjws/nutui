import Popover from './index.vue';
import './popover.scss';

Popover.install = function (Vue) {
    Vue.component(Popover.name, Popover);
};

export default Popover