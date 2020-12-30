import React from 'react';
import {
    RenderContainer,
    RenderH1,
    RenderImg
} from './RenderOrgans.elements';
import imgRender from '../../../../images/render.svg';


const RenderOrgans = () => {
    return (
        <RenderContainer>
            <RenderH1>Render</RenderH1>
            <RenderImg src={imgRender}/>
        </RenderContainer>
    )
}

export default RenderOrgans;
