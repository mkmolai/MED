import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import {Link as Go} from 'react-router-dom';
import {Button,ListItem, ListItemIcon, ListItemText,ListItemSubheader, ListSubheader} from '@material-ui/core';
import {ShoppingCartIcon, BarChartIcon, PeopleIcon, LayersIcon, AssignmentIcon} from '@material-ui/icons';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { NavLink as RouterLink } from 'react-router-dom';


export const mainListItems = (
    <div>
        <ListItem button component={Go} to='/about'>
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="About" /> 
        </ListItem>
        
        <ListItem button component={Go} to='/dashboard'>
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Dashboard" /> 
        </ListItem>

        <ListSubheader inset>Practitioners Office</ListSubheader>
        <ListItem button component={Go} to='/myProfile'>
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Profile"/>
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Patients"/>
        </ListItem>

        <ListItem button component={Go} to='/prescriptions'>
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Prescriptions"/>
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Consultations"/>
        </ListItem>
        
    </div>
);

export const secondaryListItems=(
    <div>
        <ListSubheader inset>Files and Records</ListSubheader>
        <ListItem button>
            <ListItemIcon>
            <DashboardIcon/>
                </ListItemIcon>
            <ListItemText primary="Patient Profile"/>
        </ListItem>
        
        <ListItem button>
            <ListItemIcon>
            <DashboardIcon/>
                </ListItemIcon>
            <ListItemText primary="Doctor Profile"/>
        </ListItem>

        <ListItem button>
            <ListItemIcon>
            <DashboardIcon/>
                </ListItemIcon>
            <ListItemText primary=""/>
        </ListItem>
    </div>

);

export const tertiaryListItems=(
    <div>
        <ListSubheader inset>Membership</ListSubheader>
        <ListItem button>
            <ListItemIcon>
            <DashboardIcon/>
                </ListItemIcon>
            <ListItemText primary="Sign Up"/>
        </ListItem>

        <ListItem button component={Go} to='/signIn'>
            <ListItemIcon>
            <DashboardIcon/>
                </ListItemIcon>
            <ListItemText primary="Sign In"/>
        </ListItem>

        <ListItem button>
            <ListItemIcon>
            <DashboardIcon/>
                </ListItemIcon>
            <ListItemText primary="Logout"/>
        </ListItem>
    </div>

);