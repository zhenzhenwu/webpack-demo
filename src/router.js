import Vue from 'vue'
import Router from 'vue-router'
import Photos from './components/Photos.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/photos',
            name: 'Photos',
            component: Photos
        }
    ]
})
