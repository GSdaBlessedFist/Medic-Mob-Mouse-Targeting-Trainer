"use client";
import { useContext,useEffect } from "react";
import {UserInfoContext} from "@/app/contexts/UserInfoProvider";
import p from "@/app/util/consoleHelper";
import styles from "./styles.module.scss";

const SOURCE = "MouseTargetingTrainer MAIN Component";
const srcColor = 190;

export default function MouseTargetingTrainer() {

    const UserContext = useContext(UserInfoContext)
    const { userName } = UserContext || "Healer";

    useEffect(() => {
      p(SOURCE,userName,srcColor)
    },[userName]);

    return (
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.header}>{userName}</div>
          <div className={styles.achievements}>achievements</div>
          <div className={styles.moduleIntro}>moduleIntro</div>
          <div className={styles.description}>description</div>
          <div className={styles.details}>details</div>
        </div>
      </div>
    )
  }
  