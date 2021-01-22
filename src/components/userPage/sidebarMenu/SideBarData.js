import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/user-area',
    icon: <AiIcons.AiFillHome />
  },
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