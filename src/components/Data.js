import React from 'react';

import classes from './Data.module.css';

const Data = (props) => {
  return (
    <div className={classes.data}>
    <li className={classes.list}>
      <h2>{props.title}</h2>
      <h4>Score : {props.score}</h4>
      <h5>URL<a href={props.url}>(click Here)</a></h5>
      <p>{props.selftext_html}</p>
    </li>
    </div>
  );
};

export default Data;
