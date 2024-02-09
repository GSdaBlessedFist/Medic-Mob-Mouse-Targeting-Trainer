"use client";
import { useContext, useEffect, useState } from "react";
import { UserInfoContext } from "@/app/contexts/UserInfoProvider";
import p from "@/app/util/consoleHelper";
import styles from "./styles.module.scss";
import Details from "./Details";
import {modules} from "@/app/trainingModules/modules";
import {TrainingModule} from "@/app/types/mouseTargetTrainer/mouseTargetTrainerTypes";


const SOURCE = "MouseTargetingTrainer MAIN Component";
const srcColor = 190;

export default function MouseTargetingTrainer() {

  const UserContext = useContext(UserInfoContext)
  const { userName } = UserContext || "Healer";
  const [activeModule,setActiveModule] = useState<TrainingModule | null>(null);

  function loadModule(module: TrainingModule){
    setActiveModule(module)
  }

  useEffect(() => {
   
  }, [activeModule]);
  useEffect(() => {
    p(SOURCE, modules[0],srcColor -25, "modules:")
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.header}>
          <div>username: </div>
          <div> {userName}</div>
        </div>
        <div className={styles.achievements}>
        {modules.map((module, index) => (
          <button
            key={`level-${index + 1}`}
            id={`level-${index + 1}`}
            className={`${styles.levelText} ${
              activeModule === module ? styles.levelTextActive : styles.levelTextCompleted
            }`}
            onClick={() => loadModule(module)}
          >
            {index + 1}
          </button>
        ))}
        </div>
        <div className={styles.moduleIntro}>
          <div className="relative px-20">"{activeModule?.name}"</div>
        </div>
        <div className={styles.description}>
          <p>{activeModule?.description}</p>
        </div>
        <div className={styles.details}>
          <div>Details:</div>
          <Details module={activeModule}/>
        </div>
      </div>
    </div>
  )
}
