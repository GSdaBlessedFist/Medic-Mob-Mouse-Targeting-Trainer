import React from 'react';
import { TrainingModule, TargetSpeed } from "@/app/types/mouseTargetTrainer/mouseTargetTrainerTypes";
import AnimatedPath from "@/app/components/AnimatedPath";

const module_1: TrainingModule = {
    level: 1,
    name: "Friar skill",
    description: "A walk in the forest",
    details: {
        focus: "single target",
        target_speed: TargetSpeed.MOZY
    },
    path: {
        // Define an array of points for the vector
        vector: [
            { x: 0, y: 0 },   // Adjust the starting point as needed
            { x: 50, y: 0 },  // Add more points as needed
            { x: 50, y: 50 },
            { x: 0, y: 50 },
        ],
        random: false,
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
    speed: () => { return null }
};

export const modules = [module_1];