import HomeView from '../views/home/HomeView.vue';
import User from '../views/user/User.vue';
import Login from '../views/user/Login.vue';
import Caculate from '../views/custom/Caculate.vue';
import Appointment from '../views/custom/Appointment.vue';
import NotFound from '../views/404.vue';


export default (router) => {
    router.map({
        '/': {
            component: HomeView
        },
        '/user': {
            component: User
        },
        '/login': {
            component: Login
        },
        '/caculate': {
            component: Caculate
        },
        '/appointment': {
            component: Appointment
        },
        '/404': {
            component: NotFound
        }
    });
    router.redirect({
        '*': '/404',
    })
}
