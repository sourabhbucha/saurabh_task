import React from 'react'
import './TradePage.css'
import user from "../../assets/user.png";

function BagGrid(){
    return(
        <div className="BagGrid">
            <div className="Bag-group-viewer">
                <input type="text" className="Bag-search-viewer" placeholder="Search from bag" />
                <select className="Bag-sort-viewer">
                    <option>Level</option>
                </select>
            </div>
            
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Offer</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Offer</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Offer</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Offer</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Offer</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Offer</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Offer</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Offer</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Offer</div>
                </div>
            </div>

            <div className="Bag-bottom-view-nav">
                <a href="" className="Bag-cart-nav">First</a>
                <a href="" className="Bag-cart-nav">{'<'}</a>
                <a href="" className="Bag-cart-nav">1</a>
                <a href="" className="Bag-cart-nav">2</a>
                <a href="" className="Bag-cart-nav">3</a>
                <a href="" className="Bag-cart-nav">{'>'}</a>
                <a href="" className="Bag-cart-nav">Last</a>
            </div>

            <div className="ProfileDetailsClip" id="ProfileDetailsClip">
                <img src={user} alt="" />
                <h1>Ankit213</h1>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6388 8.0001C16.6388 7.16816 15.8568 6.66899 15.2328 6.29462C15.0391 6.18516 14.8529 6.06287 14.6754 5.92857C14.7377 5.70325 14.8184 5.48343 14.9167 5.27133C15.1913 4.60578 15.5407 3.78216 15.0498 3.10829C14.559 2.43441 13.6605 2.50097 12.9367 2.56752C12.7068 2.58371 12.4761 2.58371 12.2462 2.56752C12.1879 2.41777 12.1131 2.10996 12.0632 1.91029C11.9051 1.20314 11.6971 0.321282 10.8901 0.0633798C10.0831 -0.194522 9.43422 0.387837 8.89345 0.853724C8.71478 1.0316 8.52288 1.19569 8.31941 1.34457C8.11737 1.20901 7.92552 1.05886 7.74538 0.895321C7.20461 0.429434 6.53074 -0.152925 5.74871 0.104977C4.96669 0.362879 4.73375 1.2281 4.57568 1.93525C4.52576 2.13491 4.45089 2.44273 4.39265 2.59248C4.16277 2.60866 3.93203 2.60866 3.70214 2.59248C2.97835 2.52593 2.08817 2.45105 1.58901 3.13324C1.08984 3.81544 1.44758 4.63074 1.72212 5.29629C1.8204 5.50839 1.9011 5.72821 1.96338 5.95352C1.78595 6.08783 1.59973 6.21012 1.40598 6.31958C0.782025 6.66899 0 7.16816 0 8.0001C0 8.83204 0.782025 9.33121 1.40598 9.70558C1.59973 9.81504 1.78595 9.93733 1.96338 10.0716C1.9011 10.297 1.8204 10.5168 1.72212 10.7289C1.44758 11.3944 1.09816 12.218 1.58901 12.8919C2.07985 13.5658 2.97835 13.4992 3.70214 13.4327C3.93203 13.4165 4.16277 13.4165 4.39265 13.4327C4.45089 13.5824 4.52576 13.8902 4.57568 14.0899C4.73375 14.7971 4.94173 15.6789 5.74871 15.9368C6.5557 16.1947 7.20461 15.6124 7.74538 15.1049C7.92552 14.9413 8.11737 14.7912 8.31941 14.6556C8.52145 14.7912 8.71331 14.9413 8.89345 15.1049C9.31648 15.5594 9.88384 15.8533 10.4991 15.9368C10.632 15.9343 10.7638 15.9119 10.8901 15.8703C11.7221 15.6124 11.9051 14.7305 12.0632 14.0234C12.1131 13.8237 12.1879 13.5159 12.2462 13.3661C12.4761 13.3499 12.7068 13.3499 12.9367 13.3661C13.6605 13.4327 14.5507 13.5076 15.0498 12.8254C15.549 12.1432 15.1913 11.3279 14.9167 10.6623C14.8184 10.4502 14.7377 10.2304 14.6754 10.0051C14.8529 9.87077 15.0391 9.74848 15.2328 9.63903C15.8568 9.33121 16.6388 8.83204 16.6388 8.0001ZM11.4642 6.43605L8.13639 10.5958C8.0643 10.6875 7.97371 10.7631 7.87052 10.8175C7.76732 10.872 7.65382 10.9042 7.53739 10.9119H7.48747C7.37798 10.9125 7.26945 10.8915 7.16809 10.8501C7.06672 10.8087 6.97453 10.7477 6.89679 10.6706L5.23291 9.00675C5.07625 8.85009 4.98824 8.63762 4.98824 8.41607C4.98824 8.19452 5.07625 7.98205 5.23291 7.82539C5.38957 7.66874 5.60204 7.58073 5.82359 7.58073C6.04514 7.58073 6.25761 7.66874 6.41427 7.82539L7.42092 8.83204L10.1663 5.40444C10.3094 5.25288 10.5041 5.16053 10.712 5.14568C10.9199 5.13083 11.1258 5.19455 11.289 5.32425C11.4521 5.45394 11.5607 5.64015 11.5931 5.84603C11.6256 6.05191 11.5795 6.26248 11.4642 6.43605Z" fill="#2A7AF2"/>
                </svg>
                <a href="">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0301 15.9049C16.819 15.9049 19.0798 13.6441 19.0798 10.8552C19.0798 8.06639 16.819 5.80557 14.0301 5.80557C11.2413 5.80557 8.98047 8.06639 8.98047 10.8552C8.98047 13.6441 11.2413 15.9049 14.0301 15.9049Z" fill="#2A7AF2"/>
                        <path d="M14 0C6.28942 0 0 6.25918 0 14C0 21.7408 6.28942 28 14 28C21.7106 28 28 21.7106 28 14C28 6.28942 21.7106 0 14 0ZM22.2246 22.8294C21.1965 20.0778 18.959 17.1447 14 17.1447C9.07127 17.1447 6.80346 20.0778 5.77538 22.8294C3.41685 20.622 1.90497 17.4773 1.90497 14C1.90497 7.34773 7.31749 1.90497 14 1.90497C20.6825 1.90497 26.095 7.3175 26.095 14C26.095 17.4773 24.5832 20.622 22.2246 22.8294Z" fill="#2A7AF2"/>
                    </svg>
                </a>
            </div>

        </div>
    )
}

function TradeExchange() {
    return (
        <div className="TradeExchange">
            <div className="trade1">
                <h1>2nd Edition Drak Soul</h1>
                <div className="trade1-img"></div>
            </div>
            <div className="tradebtn">
            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0298 9.45819L11.7069 8.10041L11.6844 8.07614C11.6659 8.05365 11.6607 8.04832 11.644 8.02464C11.4231 7.70503 11.6123 7.16878 12.0179 7.09834C12.1984 7.06697 12.3877 7.13208 12.5227 7.26348L14.831 9.63102C14.9435 9.75295 15.0035 9.91276 14.9988 10.0832C14.9873 10.2276 14.9285 10.3626 14.831 10.4685L12.5227 12.8367C12.5019 12.8568 12.4973 12.8621 12.4748 12.8811C12.2238 13.0859 11.8015 13.0196 11.6261 12.7331C11.4882 12.5082 11.5257 12.1957 11.7069 11.9992L13.0298 10.642H0.573937C0.35759 10.6171 0.149319 10.51 0.054126 10.307C-0.0589517 10.0655 0.0102795 9.75354 0.213935 9.58722C0.314897 9.50436 0.443552 9.47299 0.573937 9.45819H13.0298ZM1.96722 2.35379H14.4231C14.6388 2.37865 14.8477 2.48578 14.9429 2.6888C14.9931 2.79652 14.9873 2.82967 15 2.94568C14.9954 2.98948 14.9902 3.03387 14.9856 3.07767C14.9567 3.16112 14.9279 3.24635 14.8742 3.31501C14.7929 3.41978 14.6769 3.49376 14.5512 3.52276C14.5096 3.53283 14.4658 3.53283 14.4231 3.53756H1.96722L3.29011 4.89535C3.29011 4.89535 3.46434 5.12559 3.458 5.34696C3.45569 5.37655 3.45569 5.38365 3.45107 5.41325C3.39684 5.73997 3.03684 5.97554 2.72241 5.88261C2.66011 5.86426 2.60068 5.83526 2.54818 5.79679C2.52164 5.77726 2.49741 5.75536 2.47376 5.73227L0.16605 3.36473C0.145857 3.34283 0.140665 3.3381 0.12278 3.31501C-0.0381823 3.10785 -0.0416439 2.78764 0.12278 2.57693C0.140665 2.55385 0.145857 2.54852 0.16605 2.52721L2.47376 0.159079C2.4951 0.138955 2.49972 0.133628 2.52222 0.114688C2.82741 -0.134496 3.3778 0.0383346 3.45107 0.478697C3.48165 0.663958 3.41761 0.857504 3.29011 0.996597L1.96722 2.35379Z" fill="white"/>
            </svg>
            <p>Trade</p>
            </div>
            <div className="trade2">
                <h1>2nd Edition Drak Soul</h1>
                <div className="trade1-img"></div>
            </div>
        </div>
    )
}


function MsgSend(){
    return(
        <div className="sendMsg-msg">
            <div className="msg-send">
            <h1>Tuesday, 4:20 PM</h1>
            <p>Hello, nothing much show some design for trade</p>
            </div>
            <img src={user} alt="" />
        </div>
    )
}

function MsgRec(){
    return(
        <div className="recMsg-msg">
            <div className="msg-rec">
            <h1>Tuesday, 4:20 PM</h1>
            <p>Hello, nothing much show some designs</p>
            </div>
            <img src={user} alt="" />
        </div>
    )
}

function MsgGrid(){
    return(
        <div className="MsgGrid">
            
            <div className="MsgBox-Trade">
                <div className="msges">
                <MsgSend />
                <MsgRec />
                <MsgRec />
                <MsgSend />
                <MsgSend />
                <MsgSend />
                <MsgSend />
                <MsgSend />
                </div>
            <input type="text" className="type-msg" placeholder="Type your message..." />
            </div>
            <div className="ProfileDetailsClip">
                <img src={user} alt="" />
                <h1>Ankit213</h1>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6388 8.0001C16.6388 7.16816 15.8568 6.66899 15.2328 6.29462C15.0391 6.18516 14.8529 6.06287 14.6754 5.92857C14.7377 5.70325 14.8184 5.48343 14.9167 5.27133C15.1913 4.60578 15.5407 3.78216 15.0498 3.10829C14.559 2.43441 13.6605 2.50097 12.9367 2.56752C12.7068 2.58371 12.4761 2.58371 12.2462 2.56752C12.1879 2.41777 12.1131 2.10996 12.0632 1.91029C11.9051 1.20314 11.6971 0.321282 10.8901 0.0633798C10.0831 -0.194522 9.43422 0.387837 8.89345 0.853724C8.71478 1.0316 8.52288 1.19569 8.31941 1.34457C8.11737 1.20901 7.92552 1.05886 7.74538 0.895321C7.20461 0.429434 6.53074 -0.152925 5.74871 0.104977C4.96669 0.362879 4.73375 1.2281 4.57568 1.93525C4.52576 2.13491 4.45089 2.44273 4.39265 2.59248C4.16277 2.60866 3.93203 2.60866 3.70214 2.59248C2.97835 2.52593 2.08817 2.45105 1.58901 3.13324C1.08984 3.81544 1.44758 4.63074 1.72212 5.29629C1.8204 5.50839 1.9011 5.72821 1.96338 5.95352C1.78595 6.08783 1.59973 6.21012 1.40598 6.31958C0.782025 6.66899 0 7.16816 0 8.0001C0 8.83204 0.782025 9.33121 1.40598 9.70558C1.59973 9.81504 1.78595 9.93733 1.96338 10.0716C1.9011 10.297 1.8204 10.5168 1.72212 10.7289C1.44758 11.3944 1.09816 12.218 1.58901 12.8919C2.07985 13.5658 2.97835 13.4992 3.70214 13.4327C3.93203 13.4165 4.16277 13.4165 4.39265 13.4327C4.45089 13.5824 4.52576 13.8902 4.57568 14.0899C4.73375 14.7971 4.94173 15.6789 5.74871 15.9368C6.5557 16.1947 7.20461 15.6124 7.74538 15.1049C7.92552 14.9413 8.11737 14.7912 8.31941 14.6556C8.52145 14.7912 8.71331 14.9413 8.89345 15.1049C9.31648 15.5594 9.88384 15.8533 10.4991 15.9368C10.632 15.9343 10.7638 15.9119 10.8901 15.8703C11.7221 15.6124 11.9051 14.7305 12.0632 14.0234C12.1131 13.8237 12.1879 13.5159 12.2462 13.3661C12.4761 13.3499 12.7068 13.3499 12.9367 13.3661C13.6605 13.4327 14.5507 13.5076 15.0498 12.8254C15.549 12.1432 15.1913 11.3279 14.9167 10.6623C14.8184 10.4502 14.7377 10.2304 14.6754 10.0051C14.8529 9.87077 15.0391 9.74848 15.2328 9.63903C15.8568 9.33121 16.6388 8.83204 16.6388 8.0001ZM11.4642 6.43605L8.13639 10.5958C8.0643 10.6875 7.97371 10.7631 7.87052 10.8175C7.76732 10.872 7.65382 10.9042 7.53739 10.9119H7.48747C7.37798 10.9125 7.26945 10.8915 7.16809 10.8501C7.06672 10.8087 6.97453 10.7477 6.89679 10.6706L5.23291 9.00675C5.07625 8.85009 4.98824 8.63762 4.98824 8.41607C4.98824 8.19452 5.07625 7.98205 5.23291 7.82539C5.38957 7.66874 5.60204 7.58073 5.82359 7.58073C6.04514 7.58073 6.25761 7.66874 6.41427 7.82539L7.42092 8.83204L10.1663 5.40444C10.3094 5.25288 10.5041 5.16053 10.712 5.14568C10.9199 5.13083 11.1258 5.19455 11.289 5.32425C11.4521 5.45394 11.5607 5.64015 11.5931 5.84603C11.6256 6.05191 11.5795 6.26248 11.4642 6.43605Z" fill="#2A7AF2"/>
                </svg>
                <a href="">
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.21031 0C9.32504 0 11.0381 1.71337 11.0381 3.82729C11.0381 5.9404 9.32504 7.65836 7.21031 7.65836C5.0964 7.65836 3.38356 5.9404 3.38356 3.82729C3.38356 1.71337 5.0964 0 7.21031 0ZM12.64 5.29478V3.18356H14.5307V1.2961H16.6422V3.18356H18.53V5.29478H16.6422V7.18521H14.5307V5.29478H12.64ZM4.0443 8.52314H7.21031H10.3755C12.599 8.52314 14.4198 10.3412 14.4198 12.5674V15.3758C14.4198 16.5739 13.4406 17.5543 12.2449 17.5543H7.21031H2.17842C0.982194 17.5543 0 16.5739 0 15.3758V12.5674C0 10.3412 1.8208 8.52314 4.0443 8.52314Z" fill="white"/>
                    </svg>
                </a>
                <p>Add Friend</p>
            </div>

        </div>
    )
}


function ClientBagGrid(){
    return(
        <div className="ClientBagGrid">
            <div className="Client-Bag-group-viewer">
                <h1>Yugi???s Bag:</h1>
                <input type="text" className="Bag-search-viewer" placeholder="Search from bag" />
                <select className="Bag-sort-viewer">
                    <option>Level</option>
                </select>
            </div>

            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Request</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Request</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Request</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Request</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Request</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Request</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Request</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Request</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Request</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Request</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Request</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Request</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Request</div>
                </div>
            </div>
            <div className="Bag-img-viewer">
                <div class="middle">
                    <div class="text">Request</div>
                </div>
            </div>
            

            <div className="CLient-Bag-bottom-view-nav">
                <a href="" className="Bag-cart-nav">First</a>
                <a href="" className="Bag-cart-nav">{'<'}</a>
                <a href="" className="Bag-cart-nav">1</a>
                <a href="" className="Bag-cart-nav">2</a>
                <a href="" className="Bag-cart-nav">3</a>
                <a href="" className="Bag-cart-nav">{'>'}</a>
                <a href="" className="Bag-cart-nav">Last</a>
            </div>

        </div>
    )
}

function TradePage() {
    return (
        <div className="TradePage">
            <BagGrid />
            <TradeExchange />
            <MsgGrid />
            <ClientBagGrid />
        </div>
    )
}

export default TradePage
