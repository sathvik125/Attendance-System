import React from 'react'
import Popup from 'reactjs-popup'
export const Popup1 = () => {
  return (
    <div>
            <h4>Popup - GeeksforGeeks</h4>
            <Popup 
                position="right center">
                <div>GeeksforGeeks</div>
                <button>Click here</button>
            </Popup>
        </div>
  )
}
