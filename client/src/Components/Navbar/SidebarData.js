import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';



export const SidebarData = [
    {
        title: "HOMEPAGE",
        path: '/homepage',
        iconClosed: <RiIcons.RiArrowDownSFill></RiIcons.RiArrowDownSFill>,
        iconOpened: <RiIcons.RiArrowUpSFill></RiIcons.RiArrowUpSFill>,
        subNav:[
            {
                title: "Exercise Library",
                path: '/ExerciseLibrary',

            },
            {
                title: "Documentation Storage",
                path: '/DocumentationStorage',
            },
            {
                title: "Objective Setup Page",
                path: '/ObjectiveSetupPage',

            }
        ]
    },
    {
        title: "SCENARIO CREATION",
        path: '/ScenarioCreation',
        iconClosed: <RiIcons.RiArrowDownSFill></RiIcons.RiArrowDownSFill>,
        iconOpened: <RiIcons.RiArrowUpSFill></RiIcons.RiArrowUpSFill>,
        subNav:[
            {
                title: "Scenario Example",
                path: '/ScenarioExample',

            }
        ]
    }
]