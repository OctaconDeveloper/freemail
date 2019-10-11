import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Docs from '@/components/Docs'
import Example from '@/components/Example'
import SimpleMail from '@/components/SimpleMail'
import MailAttachment from '@/components/MailAttachment'
import CustomizeMail from '@/components/CustomizeMail'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home

        },
        {
            path: '/docs',
            name: 'API Documentation',
            component: Docs

        },
        {
            path: '/examples',
            name: 'Example',
            component: Example

        },
        {
            path: '/simple_mail',
            name: 'Simple Mail',
            component: SimpleMail

        },
        {
            path: '/mail_attchement',
            name: 'Mail Attachment',
            component: MailAttachment

        },
        {
            path: '/customize_mail',
            name: 'Customize Mail',
            component: CustomizeMail

        }
    ]
})