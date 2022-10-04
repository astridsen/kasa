import React from "react";
import { useState } from "react";
import ArrowUp from '../../assets/arrow-up.png';
import ArrowDown from '../../assets/arrow-down.png';
import styles from '../../styles/collapse.module.css';

const Collapse = ({title, content}) => {
    const [open, setOpen] = useState(false);

  return (
    <div className={styles.collapseItem}>
      <div 
        className={styles.collapseTitle } onClick={() => setOpen(!open)}
      >
        { title }
        { open ? <img src={ArrowUp} alt="arrow-up"/> : <img src={ArrowDown} alt="arrow-down" /> }
      </div>
      <div
        className={styles.collapseContent}
        style={{ 
          display: `${open ? "block" : "none"}`, 
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default Collapse;