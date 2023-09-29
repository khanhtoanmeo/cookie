import React from 'react';
import './PreviewPhone.scss';
import ConnectionStrengthIcon from '../Icons/ConnectionStrengthIcon';
import WifiIcon from '../Icons/WifiIcon';
import BatteryIcon from '../Icons/BatteryIcon';

function PreviewPhone({theme}) {
  return (
    <div className="Avada__Preview-Container">
      <div className="Avada__Preview">
        <div className="Avada__Preview-ScreenContainer">
          <div className="Avada__Preview-Header">
            <div className="Avada__Preview-HeaderContent">
              <div className="Avada__Preview-TimeOn">9:21</div>
              <div className="Avada__Preview-Wifi">
                <ConnectionStrengthIcon />
                <WifiIcon />
                <BatteryIcon />
              </div>
            </div>
            <div className="Avada__Preview-HeadPhone" />
          </div>
          <div
            className="Avada__Preview-CookiePopup"
            style={{backgroundColor: theme.backgroundColor}}
          >
            <p className="Avada__Preview-Message" style={{color: theme.isDark && '#ebe9e9'}}>
              This website uses cookies to make sure you get the best experience with us. From
              Toanmeo with love{' '}
              <span className="Avada__Preview-PrivacyLink">
                <a>Learn more</a>
              </span>
            </p>
            <div className="Avada__Preview-ActionButtons">
              <button
                className="Avada__Preview-DenyButton"
                style={{color: theme.isDark && '#ebe9e9'}}
              >
                Deny
              </button>
              <button className="Avada__Preview-AgreeButton" style={{backgroundColor: theme.color}}>
                Ok babe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewPhone;
