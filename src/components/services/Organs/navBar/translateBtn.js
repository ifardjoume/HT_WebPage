import React from 'react';
import { NavBtn, NavBtnLink, Flag } from '../../../navbar/translateBtn.elements';
import IconFlag from '../../../../images/eng-icon.png';

const TranslateBtn = () => {
    return (
        <NavBtn>
                  <NavBtnLink to='/organs'>
                    <Flag src={IconFlag}/>
                  </NavBtnLink>
        </NavBtn>
    )
}


export default TranslateBtn