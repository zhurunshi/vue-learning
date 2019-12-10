// 实例化vue对象
new Vue({
    el: "#vue-app", // element
    data() { // 返回一个对象
        return {
            name: 'RUSH',
            qq: '496642712',
            website: 'https://www.baidu.com',
            websiteTag: '<a href="https://www.taobao.com">淘宝</a>'
        }
    },
    methods: {
        greet: function () {
            return "good night " + this.name; // 可以找到data里面的属性
        },
        greet_2() {
            return "good night " + this.name; // ES6的写法
        },
        greet_3() {
            return `good night ${this.name}`; // 推荐用法
        },
        param(time) {
            return `good ${time} ${this.name}`; // 推荐用法
        },
        haveLunch() {
            return `吃过午饭了吗？`;
        }
    }
})