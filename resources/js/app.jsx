import './bootstrap';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

import '../css/app.css'
import Layout from "./Layout/Layout.tsx";
import DashboardLayout from "./Layout/DashboardLayout.tsx";

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
        const page  = pages[`./Pages/${name}.tsx`]
        page.default.layout = page.default.layout || (page => name.startsWith('Dashboard') ? <DashboardLayout children={page} /> : <Layout children={page} />)
        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})
