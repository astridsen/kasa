import React from "react";
import styles from '../styles/components/tag.module.css'

const Tags = (props) => {
  return (
    <div className={styles.tag}>
      <p className={styles.tagText}>{props.tagTitle}</p>
    </div>
  );
};

export default Tags;