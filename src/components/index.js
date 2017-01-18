import components from './components';

const version = '0.0.1';

const options = {
    prefix: 'Base' // 前缀
};

const install = (Vue, opts = options) => {
    const prefix = opts.prefix;
    Object.keys(components).forEach((key) => {
        Vue.component(`${prefix}${key}`, components[key]);
    });
};

export default {
    version,
    install
};
