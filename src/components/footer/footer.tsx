import React from 'react';
import { style, classes } from './footer.st.css';
import { Typography, Link } from '@material-ui/core';

interface IFooterProps {
    className?: string;
}

export const Footer: React.FunctionComponent<IFooterProps> = props => {
    return (
        <footer className={style(classes.root, props.className)}>
            {props.children}
            <Typography variant='body1'>
                Built by
                <Link href='https://github.com/JustCaptcha'> JustCaptcha</Link>
            </Typography>
        </footer>
    )
}
