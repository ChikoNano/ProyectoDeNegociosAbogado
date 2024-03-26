import IndexComponent from '@/components/IndexComponent'
import ProductosComponent from '@/components/ProductosComponent'
import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContactoComponent from '@/components/ContactoComponent'

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
    // todo - agregar la otra rutas
    {
        path: '/Contacto', component: ContactoComponent
    }
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes
})