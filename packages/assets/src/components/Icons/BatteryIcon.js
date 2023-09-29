import React from 'react';

function BatteryIcon() {
  return (
    <svg
      width="23"
      height="12"
      viewBox="0 0 23 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{marginRight: 5}}
    >
      <rect
        opacity="0.4"
        x="1.26465"
        y="0.5"
        width="19.3396"
        height="10.1176"
        rx="3.5"
        stroke="#000000"
      ></rect>
      <path
        opacity="0.5"
        d="M21.918 3.84863V7.26945C22.5737 6.97972 23 6.30575 23 5.55904C23 4.81233 22.5737 4.13836 21.918 3.84863Z"
        fill="#000000"
      ></path>
      <rect x="2.3916" y="1.70996" width="13.831" height="7.69683" rx="2" fill="#000000"></rect>
    </svg>
  );
}

export default BatteryIcon;
