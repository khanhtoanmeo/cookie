import React, {useState} from 'react';
import './AvadaSpeedCheckMeter.scss';

const MIN_PIXEL_METER = 71;
const MAX_PIXEL_METER = 282.743;
const METER_RANGE = MAX_PIXEL_METER - MIN_PIXEL_METER;
export default function AvadaSpeedCheckMeter({percentage = 0}) {
  return (
    <div className="Avada-SpeedCheck__Meter-Banner">
      <svg className="Avada-Circular__Progressbar Avada-SpeedCheck__Meter" viewBox="0 0 100 100">
        <path
          className="CircularProgressbar-trail"
          d="
      M 50,50
      m 0,-45
      a 45,45 0 1 1 0,90
      a 45,45 0 1 1 0,-90
    "
          strokeWidth="10"
          fillOpacity="0"
          style={{
            stroke: '#E6E7E8',
            transform: 'rotate(0.625turn)',
            transformOrigin: 'center center',
            strokeDasharray: '282.743px, 282.743px',
            strokeDashoffset: '70.6858px'
          }}
        ></path>
        <path
          className="CircularProgressbar-path"
          d="
      M 50,50
      m 0,-45
      a 45,45 0 1 1 0,90
      a 45,45 0 1 1 0,-90
    "
          strokeWidth="10"
          fillOpacity="0"
          style={{
            stroke: '#E76262',
            transform: 'rotate(0.625turn)',
            transformOrigin: 'center center',
            transition: 'all 0.5s',
            strokeDasharray: `${MAX_PIXEL_METER}px, ${MAX_PIXEL_METER}px`,
            strokeDashoffset: `${MAX_PIXEL_METER - (METER_RANGE * percentage) / 100}px`
          }}
        ></path>
      </svg>
      <span className="Avada-CircularProgressbar-text">{percentage}</span>
    </div>
  );
}
