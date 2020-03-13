import Info from './components/Info.vue'
import Home from './components/Home.vue'
import View from './components/ShowResult.vue'

export const routes = [
    {
    	path:'/stud',
    	component:Info
    },

    {
    	path:'/',
    	component:Home
    },

    {
    	path:'/get/:degree/:year/:board/:roll',
    	component: View
    }

];