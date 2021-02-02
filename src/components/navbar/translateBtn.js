import React from 'react';
import { NavBtn, NavBtnLink, Flag } from './translateBtn.elements';
import IconFlagEnglish from '../../images/eng-icon.png';
import IconFlagSpanish from '../../images/es-icon.png';
import Cookies from 'js-cookie';

const TranslateBtn = () => {
  var locale = Cookies.get('locale');
  const toggleTanslation = () => {
    locale === "en" ?
     Cookies.set('locale', 'es')
      : 
    Cookies.set('locale', 'en')
    window.location.reload(false);
  }
  const iconFlag = locale === "en" ? IconFlagSpanish : IconFlagEnglish;
  return (
        <NavBtn>
                  <NavBtnLink onClick={toggleTanslation}>
                    <Flag src={iconFlag}/>
                  </NavBtnLink>
        </NavBtn>
    )
}


export default TranslateBtn