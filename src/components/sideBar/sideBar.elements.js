import styled from 'styled-components';
import { FaTimes,FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 9000;
    width :100%;
    height: 100%;
    background: #fafafa;
    display:grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : 0)};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color:#333;
`
export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size: 2rem;
    cursor:pointer;
    outline:none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration: none;
    list-style:none;
    transition: 0.2s ease-in-out;
    text-decoration:none;
    color:#333;
    cursor: pointer;

    &:hover{
        color: #4b59f7;
        transition: 0.2 ease-in-out;
        text-decoration:none;
        color:#fff;
    }
`
export const SideBtnWrap = styled.div`
    display:flex;
    justify-content: center;
`
export const SidebarRoute = styled(Link)`
    border-radius:50px;
    background:#c9cbff;
    white-space: nowrap;
    padding: 16px 64px;
    color:#333;
    font-size:16px;
    outline: none;
    border:none;
    cursor:pointer;
    transition:  all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        background:#fff;
        color: #010606;
        transition: all 0.2 ease-in-out;
        text-decoration:none;
    }
`

export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
  }
`