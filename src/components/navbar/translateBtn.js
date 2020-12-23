import React from 'react';
import { NavBtn, NavBtnLink, Flag } from './translateBtn.elements';
import IconFlag from '../../images/eng-icon.png';

const TranslateBtn = () => {
    return (
        <NavBtn>
                  <NavBtnLink to='/en'>
                    <Flag src={IconFlag}/>
                  </NavBtnLink>
        </NavBtn>
    )
}


export default TranslateBtn