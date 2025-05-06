interface Task {
    id: number;
    name: string;
    completed: boolean;
    type: string;
    cooldownMinutes: number;
    lastCompleted: any;
}

interface StoreTasks {
    tasks: Task[];
    xp: number;
    level: number;
    completeTask : (taskId: number) => void;
}