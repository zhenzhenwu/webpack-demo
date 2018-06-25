'use strict'

const Methods = {}
Methods.install = function (Vue, options) {
    Vue.prototype.goback = function () {
        console.log(this)
        window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/')
    }
}

export default Methods
