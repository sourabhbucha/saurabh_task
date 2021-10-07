import React , {useEffect} from 'react'
import './OfferPopUp.css'

function OfferPopUp() {
    
    return (
        <div id="offer-page" className="offer-page">
            { document.body.style.overflowY = 'hidden' }
            <div className="offer-popup">
                <div className="blueArea">
                    <a className="close-btn" onClick = {() => {
                        document.getElementById('offer-page').style.cssText = 'display: none;';
                        document.body.style.overflowY = 'auto';
                    }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.52027 0.442584C1.1432 -0.910325 -0.910325 1.1432 0.442584 2.52027L6.94138 8.9949L0.442584 15.4937C-0.910325 16.8466 1.1432 18.9243 2.52027 17.5472L8.9949 11.0726L15.4937 17.5472C16.8466 18.9243 18.9243 16.8466 17.5472 15.4937L11.0726 8.9949L17.5472 2.52027C18.9243 1.1432 16.8466 -0.910325 15.4937 0.442584L8.9949 6.94138L2.52027 0.442584Z" fill="#ffffff"/>
                        </svg>
                    </a>
                    <svg width="197" height="279" viewBox="0 0 197 279" fill="none" xmlns="http://www.w3.org/2000/svg" className="handshakeSvg">
                        <path d="M42.5184 51.17L41.5254 52.1631C36.7069 56.9815 36.7069 64.7938 41.5254 69.6123L70.962 99.0489C75.7805 103.867 83.5927 103.867 88.4112 99.0489L89.4042 98.0558C94.2227 93.2374 94.2227 85.4251 89.4042 80.6067L59.9676 51.17C55.1491 46.3516 47.3369 46.3516 42.5184 51.17Z" fill="#FBCAB5"/>
                        <path d="M27.7176 74.0654L26.7246 75.0585C21.9061 79.877 21.9061 87.6892 26.7246 92.5077L74.7098 140.493C79.5283 145.311 87.3406 145.311 92.159 140.493L93.1521 139.5C97.9705 134.681 97.9705 126.869 93.1521 122.051L45.1668 74.0654C40.3483 69.247 32.5361 69.247 27.7176 74.0654Z" fill="#FBCAB5"/>
                        <path d="M9.83482 132.881L8.84178 133.874C4.02332 138.692 4.02332 146.505 8.84178 151.323L29.0573 171.539C33.8758 176.357 41.688 176.357 46.5065 171.539L47.4995 170.546C52.318 165.727 52.318 157.915 47.4995 153.096L27.284 132.881C22.4655 128.063 14.6533 128.062 9.83482 132.881Z" fill="#FBCAB5"/>
                        <path d="M103.108 277.58H152.412V236.151L189.377 198.233V148.729L142.431 99.1243C142.431 99.1243 123.371 96.0647 123.522 99.1243C123.672 102.184 111.183 114.572 120.813 124.202C130.443 133.832 148.149 154.898 148.149 154.898L148.901 181.029L101.152 246.885H53.8047V277.58H103.108Z" fill="#FBCAB5"/>
                        <path d="M89.4688 247.186H49.3438V277.279H89.4688V247.186Z" fill="#E39F81"/>
                        <path d="M42.5184 51.17L41.5254 52.1631C36.7069 56.9815 36.7069 64.7938 41.5254 69.6123L70.962 99.0489C75.7805 103.867 83.5927 103.867 88.4112 99.0489L89.4042 98.0558C94.2227 93.2374 94.2227 85.4251 89.4042 80.6067L59.9676 51.17C55.1491 46.3516 47.3369 46.3516 42.5184 51.17Z" stroke="#001C63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.83482 132.881L8.84178 133.874C4.02332 138.692 4.02332 146.505 8.84178 151.323L29.0573 171.539C33.8758 176.357 41.688 176.357 46.5065 171.539L47.4995 170.546C52.318 165.727 52.318 157.915 47.4995 153.096L27.284 132.881C22.4655 128.063 14.6533 128.062 9.83482 132.881Z" stroke="#001C63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M67.6492 192.967H15.7877C12.524 192.967 9.39322 191.674 7.08075 189.37C4.76828 187.067 3.46249 183.942 3.44922 180.678V179.224C3.46249 175.96 4.76828 172.835 7.08075 170.532C9.39322 168.228 12.524 166.935 15.7877 166.935H24.6152" stroke="#001C63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M58.4205 218.998H28.3267C25.063 218.998 21.9323 217.705 19.6198 215.402C17.3073 213.099 16.0015 209.973 15.9883 206.709V205.255C16.0015 201.991 17.3073 198.866 19.6198 196.563C21.9323 194.26 25.063 192.967 28.3267 192.967H54.0067" stroke="#001C63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M77.6809 218.998H44.9791C41.7154 218.998 38.5846 220.291 36.2722 222.594C33.9597 224.897 32.6539 228.022 32.6406 231.286V232.74C32.7063 235.969 34.0351 239.043 36.3419 241.303C38.6488 243.563 41.7497 244.829 44.9791 244.828H101.154L130.395 210.02" stroke="#001C63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M27.7176 74.0654L26.7246 75.0585C21.9061 79.877 21.9061 87.6892 26.7246 92.5077L74.7098 140.493C79.5283 145.311 87.3406 145.311 92.159 140.493L93.1521 139.5C97.9705 134.681 97.9705 126.869 93.1521 122.051L45.1668 74.0654C40.3483 69.247 32.5361 69.247 27.7176 74.0654Z" stroke="#001C63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.9696 102.886L17.9765 103.879C13.1581 108.698 13.1581 116.51 17.9765 121.329L65.9618 169.314C70.7803 174.132 78.5925 174.132 83.411 169.314L84.404 168.321C89.2225 163.502 89.2225 155.69 84.404 150.872L36.4188 102.886C31.6003 98.0679 23.788 98.0679 18.9696 102.886Z" fill="#FBCAB5"/>
                        <path d="M18.9696 102.886L17.9765 103.879C13.1581 108.698 13.1581 116.51 17.9765 121.329L65.9618 169.314C70.7803 174.132 78.5925 174.132 83.411 169.314L84.404 168.321C89.2225 163.502 89.2225 155.69 84.404 150.872L36.4188 102.886C31.6003 98.0679 23.788 98.0679 18.9696 102.886Z" stroke="#001C63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M152.414 277.58V240.765L187.173 204.051C192.569 198.363 195.583 190.826 195.599 182.985V159.111C195.646 154.389 193.846 149.836 190.583 146.422L147.148 102.234C145.623 100.699 143.811 99.4813 141.814 98.6501C139.816 97.819 137.675 97.3911 135.512 97.3911C133.349 97.3911 131.207 97.819 129.21 98.6501C127.213 99.4813 125.4 100.699 123.875 102.234V102.234C122.36 103.744 121.158 105.538 120.338 107.513C119.518 109.488 119.096 111.606 119.096 113.745C119.096 115.884 119.518 118.001 120.338 119.977C121.158 121.952 122.36 123.746 123.875 125.256L148.051 149.531C150.937 153.039 152.686 157.343 153.066 161.87C153.875 167.827 153.361 173.889 151.562 179.625" stroke="#001C63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M152.414 1.41986V47.6639C152.445 52.0168 153.591 56.2891 155.742 60.0734C157.893 63.8577 160.978 67.0278 164.702 69.2813V69.2813C168.465 71.5463 171.578 74.7454 173.74 78.5681C175.902 82.3909 177.039 86.7075 177.041 91.0992V130.422" stroke="#001C63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M59.9766 1.41986V50.5228" stroke="#001C63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M78.6836 218.998L116.802 177.468" stroke="#001C63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M53.8047 277.58V246.885" stroke="#001C63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className="OfferGrid">
                        <h1>Ankit123 Offered You A Trade</h1>
                        <p>He want yours design2135 for his design3241</p>
                        <div className="popup-btn-offer">
                            <p className="btn-dark-offer">DECLINE TRADE</p>
                            <p className='btn-white-offer'>LETS TRADE!</p>
                        </div>
                    </div>
                </div>
                <div className="whiteArea">
                    <div className="offerviewer">
                        <div className="offer1">
                            <div className="offerview-flex">
                                <h1>ANKIT213 OFFER:</h1>
                                <a>FULL VIEW</a>
                            </div>
                            <div className="offerdisplay"></div>
                        </div>
                        <div className="offer1">
                            <div className="offerview-flex">
                                <h1>HE WANTS:</h1>
                                <a>FULL VIEW</a>
                            </div>
                            <div className="offerdisplay"></div>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" className="offerCheckBox"/>
                            Stop these trade pop-ups (For all users)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferPopUp
