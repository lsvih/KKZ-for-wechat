import HomeView from '../views/home/HomeView.vue';
import User from '../views/user/User.vue';
import Login from '../views/user/Login.vue';
import Calculate from '../views/custom/Calculate.vue';
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
        '/calculate': {
            component: Calculate
        },
        '/appointment': {
            component: Appointment
        },
        '/404': {
            component: NotFound
        },
    });
    router.redirect({
        '*': '/404',
    });
    // router.beforeEach(function(transition) {
    //     if (transition.to.path === '/calculate'||transition.to.path === '/'||transition.to.path === '/login') {
    //         transition.next();
    //     } else {
    //         if(localStorage.getItem("user")){
    //           transition.next();
    //         }else{
    //           router.go('/login');
    //           history.replaceState()
    //         }
    //     }
    // })

}
