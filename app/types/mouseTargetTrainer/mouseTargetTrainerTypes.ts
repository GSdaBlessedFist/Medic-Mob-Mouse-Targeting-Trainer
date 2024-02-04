export interface Path {
    vector: string[];
    random: boolean;
 }
 
 export  interface NumberOfTargets {
    amount: number;
    anti_targets: {
       enabled: boolean;
       amount: number;
    };
 }
 
 export  interface TrainingModule {
    level: number;
    name: string;
    path: Path;
    number_of_targets: NumberOfTargets;
    target_diameter: number;
    targets_area: number;
    concentration_time: number;
 }
 