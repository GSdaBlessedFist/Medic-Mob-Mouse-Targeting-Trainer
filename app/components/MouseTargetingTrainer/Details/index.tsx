import p from "@/app/util/consoleHelper";
import styles from "./styles.module.scss";
import {modules} from "@/app/trainingModules/modules";
import {TrainingModule} from "@/app/types/mouseTargetTrainer/mouseTargetTrainerTypes";

function Details({ module }: { module: TrainingModule | null}) {
    if (!module) {
        return <div>No module selected</div>;
      }
    const { level, name, description, details, path, number_of_targets, target_diameter, targets_area, concentration_time, speed } = module;
    return (
        <div>
            {details.focus}
        </div>
    );
}

export default Details;