export interface Path {
   vector: { x: number; y: number }[] | React.ReactElement;
   random: boolean;
}

export interface NumberOfTargets {
   amount: number;
   anti_targets: {
       enabled: boolean;
       amount: number;
   };
}

export enum TargetSpeed {
   MOZY = 'mozy',
   MEDIUM = 'medium',
   PANIC = 'panic',
}

// Use the enum in your interface
export interface Details {
   focus: string;
   target_speed: TargetSpeed;
}

export interface TrainingModule {
   level: number;
   name: string;
   description: string;
   details: Details;
   path: Path;
   number_of_targets: NumberOfTargets;
   target_diameter: string;
   targets_area: string;
   concentration_time: number;
   speed: () => void;
}