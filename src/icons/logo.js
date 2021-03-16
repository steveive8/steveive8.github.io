import React from 'react';

export const Logo = ({width = 464, height = 191}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 464 191" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group-3">
                    <g id="Group">
                        <rect id="Rectangle" fill="#000000" x="0" y="0" width="464" height="191"></rect>
                        <g id="Group-2" transform="translate(180.000000, 45.000000)" fill="#FFFFFF" font-family="AvenirNextLTPro-Bold, Avenir Next LT Pro" font-size="50" font-weight="bold" letter-spacing="-0.464706">
                            <text id="John-Leo’s">
                                <tspan x="0" y="38">John Leo’s</tspan>
                            </text>
                            <text id="space">
                                <tspan x="0" y="88">space</tspan>
                            </text>
                        </g>
                    </g>
                    <polygon id="Triangle" stroke="#00DCFF" strokeWidth="10" points="88.5 59 131 131 46 131"></polygon>
                </g>
            </g>
        </svg>
    )
}