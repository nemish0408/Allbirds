import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout(props: any) {
  return (
    <div className='no-scrollbar'>
        <Header></Header>
       <div>
        {props.children}
       </div>
        <Footer></Footer>
    </div>
  )
}

export default Layout