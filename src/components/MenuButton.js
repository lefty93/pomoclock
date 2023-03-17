import React from 'react'
import './MenuButton.scss'

function MenuButton({img1, img2}) {
  return (
      <a href="/#" className="link-wrapper">
          <span className="fallback">
              Menu
          </span>
          <div className="img-wrapper">
              <img src={img1} alt="" className="normal" />
              <img src={img2} alt="" className="active" />
              <div className="shape-wrapper">
                  <div className="shape red-fill jelly">
                      <svg x="0px" y="0px"
                          viewBox="0 0 108.1 47" enableBackground="new 0 0 108.1 47">
                          <polygon fill="#FF0000" points="29.5,8.5 150.7,0 108.1,32.7 3.1,47 " />
                      </svg>
                  </div>
                  <div className="shape cyan-fill jelly"><svg x="0px" y="0px"
                      viewBox="0 0 108.1 47" enableBackground="new 0 0 108.1 47">
                      <polygon fill="#00FFFF" points="0.3,17 125.1,0 68.8,45.6 24.3,39 " />
                  </svg></div>
              </div>
          </div>
      </a>
  )
}

export default MenuButton