import IndexComponent from '@/components/IndexComponent'
import ProductosComponent from '@/components/ProductosComponent'
import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContactoComponent from '@/components/ContactoComponent'
import HeaderComponent from '@/components/HeaderComponent'

const routes = [
    {
        path: '/', component: IndexComponent
    },
    {
        path: '/productos', component: ProductosComponent
    },
    {
        path: '/hello-world', component: HelloWorld
    },
     {
        path: '/Contacto', component: ContactoComponent
    },
    {
        path: '/Header', component: HeaderComponent
    }
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes
})
