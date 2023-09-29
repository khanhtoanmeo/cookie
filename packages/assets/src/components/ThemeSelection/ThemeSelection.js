import React from 'react';
import './ThemeSelection.scss';

function ThemeSelection({color, title, backgroundColor, hasBorder, selected, onSelect}) {
  return (
    <button
      onClick={() => onSelect(title)}
      className="Avada__ChooseTheme-Button"
      style={{
        borderColor: selected.title === title ? '#06038d' : '#d5d5d5',
        boxShadow: 'none'
      }}
    >
      <div
        className="Avada__ChooseTheme-InnerWrapper"
        style={{
          backgroundColor: backgroundColor,
          color: color,
          borderColor: hasBorder && '#c9c9c9',
          borderStyle: hasBorder && 'solid'
        }}
      >
        {title}
      </div>
    </button>
  );
}

export default ThemeSelection;
