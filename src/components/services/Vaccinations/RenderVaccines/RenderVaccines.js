import React from 'react';
import {
    RenderContainer,
    RenderH1,
    RenderImg
} from './RenderVaccines.elements';
import imgRender from '../../../../images/render.svg';


const RenderVaccines = () => {
    return (
        <RenderContainer>
            <RenderH1>Render</RenderH1>
            <RenderImg src={imgRender}/>
        </RenderContainer>
    )
}

export default RenderVaccines
