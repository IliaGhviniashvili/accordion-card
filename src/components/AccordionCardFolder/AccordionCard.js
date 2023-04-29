import React, { useState } from 'react'
import AccordionItem from '../AccordionItemFolder/AccordionItem'
import styles from "./AccordionCard.module.css"
import { DATA } from "../../data/Data"

function AccordionCard() {
    const [activeComponent, setActiveComponent] = useState(null)
    
    const handleClick = (accordionNumber)=>{
        if(activeComponent === accordionNumber){
            setActiveComponent(null)
        }else{
            setActiveComponent(accordionNumber)
        }       
    }

  return (
    <div className={styles.container}>
        {DATA.map((item)=>
        <AccordionItem 
            handleClick={handleClick}
            activeComponent={activeComponent}
            itemNumber={item.itemNumber}
            title={item.title}
            content={item.content} 
            image={item.image}
         />
        )}
    </div>
  )
}



export default AccordionCard;