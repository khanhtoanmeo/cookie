import React from 'react';
import './ThemeSelection.scss';

function ThemeSelection({color, title, backgroundColor, hasBorder}) {
  return (
    <button className="Avada__ChooseTheme-Button">
      <div
        className="Avada__ChooseTheme-InnerWrapper"
        style={{backgroundColor: backgroundColor, color: color, borderWidth: hasBorder && '1px'}}
      >
        {title}
      </div>
    </button>
  );
}

export default ThemeSelection;
