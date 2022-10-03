import React from "react";
import styles from '../../styles/collapse.module.css';

const Collapse = ({title, content}) => {
    const isCollapse = (e) => {
        e.preventDefault();
        const divText = e.target.nextSibling;
        const arrow = e.target.lastChild;
    
        if (!divText.classList.contains("show")) {
          divText.classList.add("show");
          arrow.classList.add("rotate");
        } else {
          divText.classList.remove("show");
          arrow.classList.remove("rotate");
        }
      };
      return (
        <div className={styles.collapse}>
          <button type="button" className={styles.collapseButton} onClick={isCollapse}>
            {title}
    
            <p className={styles.collapseArrow}>&lt;</p>
          </button>
          <div className={styles.collapseContent}>
            {Array.isArray(content) ? (
              <ul>
                {content.map((equipment, index) => (
                  <li key={index}>
                    {equipment}
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.collapseText}>{content}</p>
            )}
          </div>
        </div>
      );
}

export default Collapse;