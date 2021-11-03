import React from 'react'
import './Agreement.css'
import SignatureCanvas from 'react-signature-canvas'
function Agreement() {
    document.body.style.overflowY="hidden";
    return (
        <div className="Agreement">
            <div className="grid-btn-agg">
                <a className="white">Saurabh is signing similar agreement</a>
                <a className="yellow">Status: Signing</a>
            </div>
            <div className="agg-content-grid">
                <div className="agg-title">
                    <h1>Design Trade Agreement</h1>
                    <p>Trade Id: <span>1232 12342 2134</span></p>
                </div>
                <div className="agg-content">
                    <p>
                        asdasd <span>Ankit Panda (123214123213)</span> Lorem is trasferring his <span>Design Name (1839123123312) </span> Ipsum is simply dummy text for<span> Saurabh (123124213213)</span> for <span>Design Name (123124125124)</span> of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into<span> Dated: 12-12-2021 </span>electronic typesetting, remaining <span>Trade ID: 213124123213</span> essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
                        Why do we use it?<br />
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                    <div className="sign">
                        <div className="sign-flex">
                            <div className="signa">
                                <div className="signarea">
                                    <SignatureCanvas penColor='black'
                                        canvasProps={{width: 250, height: 90, className: 'sigCanvas'}} />
                                </div>
                                <p>Sign here</p>
                            </div>
                            <div className="sign-terms">
                                <input type="checkbox" />I agree on transferring my design
                                <input type="checkbox" /><a>I have read all the terms & conditions</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="agg-bottom">
                    <h1>After signing the design ownership will be completely transfered to Saurabh. Do you want to continue?</h1>
                    <div className="agg-bottom-flex">
                    <a className="grey" >Cancel</a>
                    <a className="blue">Confirm Trade</a>
                    </div>
                </div>
            </div>
            <div className="agg-gap-below">
                
            </div>
        </div>
    )
}

export default Agreement
