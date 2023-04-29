import React, { useState } from 'react';
import styles from './AccordionItem.module.css';


const upArrow = <i className="fa-solid fa-chevron-up"></i>;
const downArrow = <i className="fa-solid fa-chevron-down"></i>;

function AccordionItem(props) {
  const { handleClick, activeComponent, itemNumber, title, content, image } = props;
  const [arrowActive, setArrowActive] = useState(false);

  function handleArrowClick() {
    handleClick(itemNumber);
    setArrowActive(!arrowActive);
  }

  return (
    <div onClick={handleArrowClick} className={`${styles["itemClass"]} ${styles[""]}`}>
      {/* <div>{activeComponent === itemNumber ? <img src={image} alt={title} className="imageTbilisi" /> : null}</div> */}
        <div className={styles.titleAndArrow}>
          <h2>{title}</h2>
          {activeComponent === itemNumber ? (
            <i className={arrowActive ? styles.active : null}>{upArrow}</i>
          ) : (
            downArrow
          )}
        </div>
        {activeComponent === itemNumber ? <p className={styles['big-text']}>{content}</p> : null}
    </div>
  );
}

export default AccordionItem;
