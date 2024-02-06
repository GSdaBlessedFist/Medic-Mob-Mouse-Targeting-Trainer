import {TrainingModule,TargetSpeed} from "@/app/types/mouseTargetTrainer/mouseTargetTrainerTypes";

const module_1:TrainingModule = {
    level: 1,
    name: "Friar skill",
    description: "A walk in the forest",
    details:{
        focus: "single target",
        target_speed: TargetSpeed.MOZY
    },
    path: {
        random: false,
        vector: ["left","right"]
    },
    number_of_targets: {
        amount: 1,
        anti_targets: {
           enabled: false,
           amount: 0
        },
    },
    target_diameter: "5px",
    targets_area: "30px",
    concentration_time: 10,
    speed: () => {return null}
}

export const modules = [module_1];