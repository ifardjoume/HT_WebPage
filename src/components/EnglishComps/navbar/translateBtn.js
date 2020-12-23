import React from 'react';
import { NavBtn, NavBtnLink, Flag } from './translateBtn.elements';
import IconFlag from '../../../images/es-icon.png';

const TranslateBtn = () => {
    return (
        <NavBtn>
                  <NavBtnLink to='/'>
                    <Flag src={IconFlag}/>
                  </NavBtnLink>
        </NavBtn>
    )
}


export default TranslateBtn