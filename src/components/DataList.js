import React from 'react';

import Data from './Data';
import classes from './DataList.module.css';

const DataList = (props) => {
  return (
    <ul className={classes['data-list']}>
      {props.data.map((data) => (
        <Data
        key={data.url}
          title={data.title}
          score={data.score}
          selftext_html={data.selftext_html}
          url ={data.url}
        />
      ))}
    </ul>
  );
};

export default DataList;
