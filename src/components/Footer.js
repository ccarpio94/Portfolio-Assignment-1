import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube'

function Footer() {
    return (
        <BottomNavigation>
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon style={{fill: "#3b5998"}}></FacebookIcon>}></BottomNavigationAction>
            <BottomNavigationAction label="Twitter" icon={<TwitterIcon style={{fill: "#1DA1F2"}}></TwitterIcon>}></BottomNavigationAction>
            <BottomNavigationAction label="Instagram" icon={<InstagramIcon style={{fill: "#C13584"}}></InstagramIcon>}></BottomNavigationAction>
            <BottomNavigationAction label="Youtube" icon={<YouTubeIcon style={{fill: "#c4302b"}}></YouTubeIcon>}></BottomNavigationAction>
        </BottomNavigation>
    )
}

export default Footer