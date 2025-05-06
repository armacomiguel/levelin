export const mockData = {
  level: 10,
  exp: 1500,
  lives: 3,
  streak: 12,
  tasks: [
    { id: 1, name: 'Comer', completed: true },
    { id: 2, name: 'Dormir', completed: false }
  ]
};

export const defaultTasks = [
  {
    id: 1,
    name: 'Comer',
    completed: false,
    category: 'exp',
    type: 'daily',
    cooldownMinutes: 120,            // se reactiva cada 5 horas
    lastCompleted: null,         // guarda el timestamp cuando se completó
  },
  {
    id: 2,
    name: 'Dormir',
    completed: false,
    category: 'exp',
    type: 'daily',
    cooldownMinutes: 31,           // se reactiva cada día
    lastCompleted: null,
  },
  {
    id: 3,
    name: 'Sacar Basura',
    completed: false,
    category: 'exp',
    type: 'daily',
    cooldownMinutes: 10,           // se reactiva cada día
    lastCompleted: null,
  },
];


export const mockTasks = [
  { id: 1, name: 'Comer', completed: false, category: "exp",  type: "daily" },
  { id: 2, name: 'Dormir', completed: false, category: "exp",  type: "daily" },
  { id: 3, name: 'Sacar Basura', completed: false, category: "exp",  type: "daily" },
  { id: 4, name: 'Sacar Basura', completed: false, category: "exp",  type: "daily" },
  { id: 5, name: 'Sacar Basura', completed: false, category: "exp",  type: "daily" },
  { id: 6, name: 'Sacar Basura', completed: false, category: "exp",  type: "week" },
  { id: 7, name: 'Sacar Basura', completed: false, category: "life",  type: "week" },
  { id: 8, name: 'Sacar Basura', completed: false, category: "life",  type: "week" },
  { id: 9, name: 'Sacar Basura', completed: false, category: "energy",  type: "special" },
  { id: 10, name: 'Sacar Basura', completed: false, category: "energy",  type: "special" },
];

export const mockTasksTiempo =
[
  {
    id: 1,
    name: 'Comer',
    completed: false,
    category: 'exp',
    type: 'daily',
    lastCompletedAt: null,
    cooldown: 5 * 60 * 60 * 1000 // 5 horas en ms
  }
];