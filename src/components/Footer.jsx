import React from 'react'
import '../stylesheet/footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer>
        <span className='footerSpan'>
            Made with <i className="fa fa-heart pulse"></i> by <a href="#" className='footerdark' target="_blank">Manish Das</a>
        </span>
    </footer>
  )
}

export default Footer