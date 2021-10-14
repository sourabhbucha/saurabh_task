import React from 'react'
import './Pricing.css'

function Pricing() {
    return (
        <div className="Pricing">
            <div className="PricingArea">
                <h1><span className="Pricing-header">Pick One</span> & Start!</h1>
                <div className="Pricing-grid">
                    <div className="Pricing1">
                        <h1>Buy Trade Tokens.</h1>
                        <hr />
                        <p>A very quick way to trade! Buy as many token as you like at a very low cost of 1$ a token! </p>
                        <a href="">BUY NOW</a>
                        <h2><span className="PriceSpan">1</span>$ / token</h2>
                    </div>
                    <div className="Pricing1 Pricing2">
                        <h1>Refer & Earn Tokens.</h1>
                        <hr />
                        <p>Don’t want to pay for trade token? Then refer a friend and get free trade tokens. For every friend you refer you will get 5 trade tokens.</p>
                        <a href="">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.923 3.23096H4.30764C3.71317 3.23096 3.23071 3.71342 3.23071 4.30788V12.9233C3.23071 13.5177 3.71317 14.0002 4.30764 14.0002H12.923C13.5175 14.0002 13.9999 13.5177 13.9999 12.9233V4.30788C13.9999 3.71342 13.5175 3.23096 12.923 3.23096Z" fill="white"/>
                                <path d="M1.07692 1.07692H9.69231V2.15385H10.7692V1.07692C10.7692 0.482462 10.2868 0 9.69231 0H1.07692C0.482462 0 0 0.482462 0 1.07692V9.69231C0 10.2868 0.482462 10.7692 1.07692 10.7692H2.15385V9.69231H1.07692V1.07692Z" fill="white"/>
                            </svg>
                            COPY LINK
                        </a>
                        <h3>Send the link and after their first trade, you will have your free tokens!</h3>
                        <h2><span className="PriceSpan2">1 refer </span>/5 token</h2>
                    </div>
                    <div className="Pricing1 Pricing3">
                        <h1>20 Token Topup</h1>
                        <hr />
                        <p>Grab your 20 token bundle at a very low price. Trade as much as you want and start collecting! Don’t miss out! </p>
                        <a href="">BUY NOW</a>
                        <h2><span className="PriceSpan ">13</span>$ / 20 token</h2>
                    </div>
                </div>

                <p>To trade with designers you need trade tokens. You either buy trade tokens or refer friends to earn them.</p>
                <svg width="39" height="45" viewBox="0 0 39 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.6839 15.6755C33.6 15.443 33.6112 15.1869 33.7149 14.9626C33.8187 14.7383 34.0068 14.564 34.2382 14.4775L37.7518 13.199C37.8664 13.1509 37.9897 13.1273 38.1138 13.1295C38.238 13.1318 38.3603 13.1599 38.473 13.212C38.5858 13.2642 38.6864 13.3392 38.7685 13.4324C38.8506 13.5256 38.9123 13.6349 38.9499 13.7533C39.0283 13.9835 39.0144 14.2351 38.911 14.4553C38.8076 14.6754 38.6228 14.8468 38.3956 14.9334L34.882 16.2119C34.7686 16.2603 34.6464 16.2847 34.5232 16.2836C34.3999 16.2825 34.2782 16.256 34.1657 16.2056C34.0532 16.1552 33.9523 16.0821 33.8694 15.9909C33.7865 15.8997 33.7233 15.7923 33.6839 15.6755V15.6755Z" fill="#FBB230"/>
                    <path d="M30.5464 10.4097C30.3717 10.2338 30.2737 9.99596 30.2737 9.74806C30.2737 9.50017 30.3717 9.26233 30.5464 9.08646L33.2286 6.50267C33.3124 6.41047 33.4145 6.33681 33.5285 6.28641C33.6424 6.236 33.7656 6.20996 33.8902 6.20996C34.0148 6.20996 34.138 6.236 34.2519 6.28641C34.3658 6.33681 34.468 6.41047 34.5518 6.50267C34.7265 6.67853 34.8245 6.91637 34.8245 7.16426C34.8245 7.41216 34.7265 7.64999 34.5518 7.82586L31.8696 10.4097C31.7858 10.5019 31.6837 10.5755 31.5698 10.6259C31.4558 10.6763 31.3326 10.7024 31.208 10.7024C31.0835 10.7024 30.9602 10.6763 30.8463 10.6259C30.7324 10.5755 30.6302 10.5019 30.5464 10.4097Z" fill="#FBB230"/>
                    <path d="M25.557 6.88729C25.3287 6.7906 25.148 6.60755 25.0542 6.37807C24.9604 6.1486 24.9611 5.89134 25.0563 5.66244L26.4957 2.17565C26.5384 2.0586 26.6051 1.95177 26.6915 1.862C26.7779 1.77222 26.8821 1.7015 26.9974 1.65436C27.1127 1.60722 27.2366 1.5847 27.3612 1.58825C27.4857 1.59181 27.6081 1.62135 27.7206 1.67499C27.9489 1.77167 28.1296 1.95473 28.2234 2.1842C28.3172 2.41367 28.3164 2.67093 28.2213 2.89983L26.7818 6.35086C26.7429 6.47106 26.6789 6.58164 26.5942 6.67531C26.5094 6.76899 26.4057 6.84363 26.29 6.89431C26.1742 6.945 26.0491 6.97058 25.9227 6.96937C25.7964 6.96816 25.6717 6.94018 25.557 6.88729V6.88729Z" fill="#F2722A"/>
                    <path d="M19.5231 5.58166C19.2802 5.58425 19.0457 5.49254 18.8689 5.32581C18.6922 5.15907 18.587 4.93031 18.5754 4.68761L18.5128 0.950491C18.5055 0.82865 18.5232 0.706599 18.5649 0.591859C18.6065 0.477119 18.6712 0.37212 18.755 0.283333C18.8387 0.194546 18.9398 0.123851 19.0519 0.0756043C19.164 0.0273575 19.2848 0.00258083 19.4069 0.00280075C19.5324 -0.00691365 19.6585 0.00870222 19.7778 0.0487205C19.8972 0.0887387 20.0072 0.152342 20.1015 0.235748C20.1957 0.319155 20.2722 0.420661 20.3265 0.534232C20.3807 0.647803 20.4115 0.771119 20.4172 0.896849L20.4797 4.63397C20.4877 4.76127 20.4684 4.8888 20.423 5.008C20.3776 5.1272 20.3073 5.23532 20.2167 5.32508C20.1261 5.41485 20.0173 5.48418 19.8977 5.52844C19.778 5.57269 19.6503 5.59084 19.5231 5.58166V5.58166Z" fill="#FBB230"/>
                    <path d="M13.5589 6.83323C13.3335 6.93681 13.0763 6.947 12.8435 6.86157C12.6106 6.77613 12.421 6.60202 12.3161 6.37727L10.7605 2.97988C10.7027 2.86942 10.6687 2.7481 10.6606 2.62372C10.6525 2.49933 10.6705 2.37462 10.7134 2.25759C10.7563 2.14057 10.8233 2.03381 10.9099 1.94419C10.9965 1.85456 11.101 1.78404 11.2165 1.73715C11.4418 1.63357 11.699 1.62338 11.9319 1.70882C12.1647 1.79425 12.3543 1.96836 12.4592 2.19312L14.0148 5.5905C14.0726 5.70096 14.1066 5.82228 14.1147 5.94667C14.1228 6.07106 14.1049 6.19577 14.0619 6.31279C14.019 6.42982 13.9521 6.53657 13.8654 6.6262C13.7788 6.71582 13.6744 6.78634 13.5589 6.83323V6.83323Z" fill="#FBB230"/>
                    <path d="M8.56046 10.3913C8.39423 10.5759 8.16164 10.687 7.91364 10.7004C7.66563 10.7138 7.42242 10.6284 7.23727 10.4628L4.44784 7.97739C4.35094 7.8987 4.2716 7.80058 4.21492 7.68937C4.15824 7.57815 4.12547 7.4563 4.11873 7.33165C4.112 7.20701 4.13144 7.08234 4.1758 6.96566C4.22016 6.84898 4.28847 6.74288 4.37631 6.6542C4.54255 6.46967 4.77513 6.35853 5.02314 6.34512C5.27114 6.33171 5.51435 6.41714 5.69951 6.58268L8.48894 9.06813C8.58583 9.14683 8.66517 9.24494 8.72186 9.35616C8.77854 9.46738 8.8113 9.58923 8.81804 9.71387C8.82478 9.83852 8.80534 9.96319 8.76098 10.0799C8.71661 10.1965 8.64831 10.3026 8.56046 10.3913V10.3913Z" fill="#F2722A"/>
                    <path d="M5.4138 15.6486C5.33608 15.8841 5.16835 16.0793 4.94724 16.1915C4.72614 16.3037 4.4696 16.3239 4.23366 16.2477L0.657464 15.0854C0.537288 15.0524 0.425333 14.9947 0.328783 14.9159C0.232233 14.8371 0.153221 14.739 0.0968169 14.6279C0.0404132 14.5167 0.00786436 14.3951 0.00125747 14.2706C-0.00534942 14.1462 0.0141316 14.0217 0.0584519 13.9053C0.136173 13.6698 0.303899 13.4746 0.525009 13.3624C0.746119 13.2502 1.00265 13.23 1.2386 13.3062L4.81479 14.4685C4.93497 14.5015 5.04692 14.5592 5.14347 14.638C5.24002 14.7168 5.31903 14.8149 5.37544 14.926C5.43184 15.0371 5.46439 15.1588 5.471 15.2833C5.4776 15.4077 5.45812 15.5322 5.4138 15.6486Z" fill="#FBB230"/>
                    <path d="M24.2422 40.1904C24.1553 40.1921 24.0702 40.2159 23.9951 40.2598C23.9199 40.3036 23.8573 40.3659 23.8131 40.4408C23.6612 40.6914 23.4473 40.8987 23.1921 41.0428C22.9368 41.1868 22.6488 41.2628 22.3558 41.2633H16.7411C16.4481 41.2628 16.1601 41.1868 15.9048 41.0428C15.6496 40.8987 15.4357 40.6914 15.2838 40.4408C15.2396 40.3659 15.177 40.3036 15.1018 40.2598C15.0267 40.2159 14.9416 40.1921 14.8547 40.1904H14.0143C13.882 40.1906 13.752 40.225 13.6369 40.2901C13.5218 40.3552 13.4254 40.4489 13.3571 40.5622C13.2888 40.6755 13.2508 40.8044 13.2469 40.9366C13.243 41.0689 13.2733 41.1998 13.3348 41.3169C13.6578 41.9418 14.1464 42.4658 14.7472 42.8316C15.348 43.1974 16.0378 43.391 16.7411 43.3911V43.3911C16.7634 43.6124 16.8673 43.8175 17.0326 43.9663C17.1979 44.1151 17.4128 44.1969 17.6352 44.1958H21.3723C21.5947 44.1969 21.8096 44.1151 21.9749 43.9663C22.1402 43.8175 22.2441 43.6124 22.2664 43.3911C22.9878 43.411 23.7003 43.2269 24.3219 42.86C24.9434 42.4931 25.4488 41.9582 25.78 41.3169C25.8415 41.1998 25.8718 41.0689 25.8679 40.9366C25.864 40.8044 25.826 40.6755 25.7577 40.5622C25.6894 40.4489 25.593 40.3552 25.4779 40.2901C25.3627 40.225 25.2328 40.1906 25.1005 40.1904H24.2422Z" fill="#FBB230"/>
                    <path d="M18.628 8.98795C16.1496 9.1778 13.7872 10.1156 11.8533 11.6773C9.91946 13.239 8.50529 15.351 7.79788 17.7339C7.09047 20.1168 7.12316 22.6583 7.89161 25.0223C8.66006 27.3862 10.1281 29.4611 12.1014 30.9726C12.3606 31.1734 12.5703 31.4309 12.7144 31.7254C12.8586 32.0199 12.9333 32.3434 12.9329 32.6713V33.3776C12.9329 33.5554 13.0035 33.726 13.1293 33.8517C13.255 33.9775 13.4256 34.0481 13.6034 34.0481H25.5211C25.6989 34.0481 25.8695 33.9775 25.9952 33.8517C26.121 33.726 26.1916 33.5554 26.1916 33.3776V32.6713C26.1912 32.3434 26.266 32.0199 26.4101 31.7254C26.5543 31.4309 26.7639 31.1734 27.0231 30.9726C29.123 29.364 30.6471 27.12 31.3684 24.575C32.0897 22.03 31.9695 19.3201 31.0259 16.8489C30.0822 14.3777 28.3655 12.2774 26.1315 10.8609C23.8975 9.44442 21.2656 8.78748 18.628 8.98795V8.98795ZM28.3195 22.0858C28.2523 23.3239 27.9489 24.5378 27.4254 25.6619V25.7156C27.3558 25.9161 27.2444 26.0995 27.0987 26.2539C26.953 26.4082 26.7763 26.5299 26.5801 26.6109C26.3839 26.6919 26.1728 26.7305 25.9607 26.724C25.7485 26.7175 25.5402 26.6661 25.3493 26.5733C25.1585 26.4804 24.9895 26.3481 24.8535 26.1852C24.7175 26.0222 24.6176 25.8323 24.5603 25.6279C24.503 25.4236 24.4897 25.2094 24.5213 24.9995C24.5528 24.7896 24.6285 24.5888 24.7433 24.4103L24.8148 24.2941C25.2677 23.5219 25.5639 22.6681 25.6867 21.7814C25.8094 20.8947 25.7562 19.9926 25.53 19.1265C25.2845 18.2302 24.8643 17.3912 24.2935 16.6578C23.7228 15.9244 23.0127 15.311 22.2042 14.8529C20.5067 13.9157 18.5208 13.6448 16.6343 14.093C14.2482 14.6227 12.1576 16.0506 10.7961 18.0804L11.1716 17.1864C11.6757 16.147 12.3797 15.2172 13.2434 14.4502C14.1071 13.6831 15.1135 13.0939 16.2051 12.7161C17.3121 12.3421 18.4807 12.1842 19.6472 12.2512C20.8516 12.3216 22.0301 12.6296 23.1149 13.1575C24.1998 13.6853 25.1694 14.4226 25.9681 15.3267C26.787 16.2465 27.4159 17.3191 27.8188 18.4827C28.217 19.6401 28.387 20.8637 28.3195 22.0858V22.0858Z" fill="#FBB230"/>
                    <path d="M25.4413 35.3804C25.6057 35.378 25.7646 35.4405 25.8834 35.5542C26.0021 35.668 26.0714 35.824 26.0761 35.9884V38.7868C26.0691 38.9488 25.9985 39.1016 25.8797 39.212C25.7609 39.3225 25.6034 39.3817 25.4413 39.3768H13.6577C13.4956 39.3817 13.3381 39.3225 13.2193 39.212C13.1005 39.1016 13.0299 38.9488 13.0229 38.7868V38.7868V35.9884C13.0276 35.824 13.0969 35.668 13.2157 35.5542C13.3344 35.4405 13.4933 35.378 13.6577 35.3804H25.4413Z" fill="#F2722A"/>
                </svg>

            </div>
        </div>
    )
}

export default Pricing
