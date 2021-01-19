import './styles/main.css'

import React from 'react'
import ReactDOM from 'react-dom'

import Page404 from './components/Page404'
import PageDev from './components/PageDev'

const app = window.location.pathname === '/dev' ? <PageDev /> : <Page404 />
ReactDOM.render(app, document.getElementById('root'))
