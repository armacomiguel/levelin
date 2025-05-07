interface TaskProps {
    id: number;
    name: string;
    completed: boolean;
    category: string;
    type: string;
    cooldownMinutes: number;
    lastCompleted: number;
}

interface StoreTasks {
    level: number;
    exp: number;
    expToUp: number;
    lives: number;
    streak: number;
    tasks: TaskProps[];
    loadAndSetDataPlayer: () => void;
    resetTask: (taskId: number) => void;
    completeTask: (taskId: number) => void;
}

interface PlayerDataProps {
    level: number;
    exp: number;
    expToUp: number;
    lives: number;
    streak: number;
    tasks: TaskProps[];
}

interface RecordProps {
    streak: number;
}

interface ProfileCardProps {
    level: number;
    exp: number;
    expToUp: number;
}

interface ExpBarProps {
    exp: number;
    expToUp: number;
}