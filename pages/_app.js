import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'
import PropTypes from 'prop-types'

export default function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}
MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}
