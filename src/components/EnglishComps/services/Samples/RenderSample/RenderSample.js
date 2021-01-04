import React from 'react';
import {
    RenderContainer,
    RenderH1,
    RenderImg
} from '../../../../services/Samples/RenderSample/RenderSample.elements';
import imgRender from '../../../../../images/render.svg';


const RenderSample = () => {
    return (
        <RenderContainer>
            <RenderH1>Render</RenderH1>
            <RenderImg src={imgRender}/>
        </RenderContainer>
    )
}

export default RenderSample
