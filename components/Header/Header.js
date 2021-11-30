import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import clsx from 'clsx'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Divider, AppBar, useScrollTrigger, Button } from '@material-ui/core';

import useStyles from './Header.style';

<AppBar ></AppBar>

export default function Header() {
  const classes = useStyles(); 
  const trigger = useScrollTrigger();
  const router = useRouter();

  return(
    <AppBar color="transparent" className={clsx(classes.header, trigger && classes.fixed)} position="fixed">
        <Link href="/">
          <a>
            <img className={classes.logo} height="50" src="images/logo.png"/>
          </a>
        </Link>
        <nav>
          <ul className={classes.menu}>
            <li className={router.pathname == "/" && trigger ? "active" : ""}>
              <Link href="/">
                  <Button component="a">Who needs galaxis?
                    {router.pathname == "/" && !trigger && <Divider className={classes.divider}/>}
                  </Button>
              </Link>
            </li>
            <li className={router.pathname == "/support" && trigger ? "active" : ""}>
              <Link href="/support">
              <Button component="a">Show Some Love
                {router.pathname == "/support" && !trigger && <Divider className={classes.divider}/>}
              </Button>
              </Link>
            </li>
            <li className={router.pathname == "/ecosystem" && trigger ? "active" : ""}>
              <Link href="/ecosystem">
              <Button component="a">Ecosystem
                {router.pathname == "/ecosystem" && !trigger && <Divider className={classes.divider}/>}
              </Button>
              </Link>
            </li>
            <li className={router.pathname == "/roadmap" && trigger ? "active" : ""}>
              <Link href="/roadmap">
              <Button component="a">Roadmap
                {router.pathname == "/roadmap" && !trigger && <Divider className={classes.divider}/>}
              </Button>
              </Link>
            </li>
            <li className={router.pathname == "/demo" && trigger ? "active" : ""}>
              <Link href="/demo">
              <Button component="a">DEMO
                {router.pathname == "/demo" && !trigger && <Divider className={classes.divider}/>}
              </Button>
              </Link>
            </li>
            <li>
              <Button>
                <AnchorLink offset='100' href='#contacts'>Contact Us</AnchorLink>
              </Button>
            </li>
          </ul>
        </nav>
    </AppBar>
  )
}