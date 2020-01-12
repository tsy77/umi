import React from 'react';
import LocaleList from './LocaleList';
import styles from './Content.module.less';

const Content = props => {
  const { api } = props;

  return (
    <div className={styles.wrapper}>
      <LocaleList />
    </div>
  );
};

export default Content;
