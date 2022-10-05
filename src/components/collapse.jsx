import React from "react";
import { useState } from "react";
import ArrowUp from '../assets/arrow-up.png';
import ArrowDown from '../assets/arrow-down.png';
import styles from '../styles/components/collapse.module.css';

const Collapse = ({title, content}) => {
    const [open, setOpen] = useState(false);

  return (
    <div className={styles.collapseItem}>
      <div 
        className={styles.collapseTitle } onClick={() => setOpen(!open)}
      >
        { title }
        { open ? <img src={ArrowUp} alt="arrow-up" className={styles.arrow}/> : <img src={ArrowDown} alt="arrow-down" className={styles.arrow}/> }
      </div>
      <div
        className={styles.collapseContent}
        style={{ 
          display: `${open ? "block" : "none"}`, 
        }}
      >
          {Array.isArray(content) ? (
          <ul className={styles.collapseList}>
            {content.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default Collapse;