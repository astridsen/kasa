import React from "react";

import styles from "../../styles/host.module.css";

const Host = ({ host }) => {
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  return (
    <div className={styles.host}>
      <div className={styles.hostName}>
        <p>{name.trim()}</p>
        <p>{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="" className={styles.hostPicture} />
    </div>
  );
};

export default Host;