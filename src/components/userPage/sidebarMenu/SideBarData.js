import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
// import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Home',
    path: '/user-area',
    icon: <AiIcons.AiFillHome />
  },
  /* {
    title: 'Graficos',
    path: '/graphs',
    icon: <BsIcons.BsGraphUp />
  }, */
  {
    title: 'Reportes',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />
  },
  {
    title: 'Configuración',
    path: '/settings',
    icon: <AiIcons.AiTwotoneSetting />
  }

];