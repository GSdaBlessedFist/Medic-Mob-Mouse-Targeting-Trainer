"use client";
import { useContext, useEffect } from "react";
import { UserInfoContext } from "@/app/contexts/UserInfoProvider";
import p from "@/app/util/consoleHelper";
import styles from "./styles.module.scss";

const SOURCE = "MouseTargetingTrainer MAIN Component";
const srcColor = 190;

export default function MouseTargetingTrainer() {

  const UserContext = useContext(UserInfoContext)
  const { userName } = UserContext || "Healer";

  useEffect(() => {
    p(SOURCE, userName, srcColor)
  }, [userName]);

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.header}>
          <div>username: </div>
          <div> {userName}</div>
        </div>
        <div className={styles.achievements}>
          <div id="level-1" className={`${styles.levelText} ${styles.levelTextCompleted}`}>level-1</div>
          <div id="level-2" className={`${styles.levelText} ${styles.levelTextCompleted}`}>level-2</div>
          <div id="level-3" className={`${styles.levelText} ${styles.levelTextCompleted}`}>level-3</div>
          <div id="level-4" className={styles.levelText}>level-4</div>
          <div id="level-5" className={styles.levelText}>level-5</div>
          <div id="level-6" className={styles.levelText}>level-6</div>
          <div id="level-7" className={styles.levelText}>level-7</div>
          <div id="level-8" className={styles.levelText}>level-8</div>
          <div id="level-9" className={styles.levelText}>level-9</div>
          <div id="level-10" className={styles.levelText}>level-10</div>
        </div>
        <div className={styles.moduleIntro}>
          <div className="relative -left-1/4">Level-4 : "Panic sets in"</div>
        </div>
        <div className={styles.description}>
          <p>In many situations healers are swarmed with heads needing health ASAP.  Do your best to keep up once their panic kicks in.</p>
        </div>
        <div className={styles.details}>details</div>
      </div>
    </div>
  )
}
