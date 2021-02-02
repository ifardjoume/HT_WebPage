import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import Cookies from 'js-cookie';

var ReportsVariable = Cookies.get('locale') === 'en' ? 'Reports' : 'Reportes';
var SettingsVariable = Cookies.get('locale') === 'en' ? 'Settings' : 'Configuración';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/user-area',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: ReportsVariable,
    path: '/reports',
    icon: <IoIcons.IoIosPaper />
  },
  {
    title: SettingsVariable,
    path: '/settings',
    icon: <AiIcons.AiTwotoneSetting />
  }

];