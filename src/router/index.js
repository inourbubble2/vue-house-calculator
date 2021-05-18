import Vue from 'vue';
import VueRouter from 'vue-router';
import Test from '@/views/Test';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Test',
        component: Test
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router