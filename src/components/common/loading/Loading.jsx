import React from 'react';
import classes from './Loading.module.css';
import loadingGif from '../../../image/loading.gif';

function Loading() {
    return (
        <div className={classes['loading']}>
        <img src={loadingGif} alt=""/>
        </div>
    )
}

export default Loading