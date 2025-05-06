import { create } from 'zustand';
import { loadTasks } from 'lib/action';
import { defaultTasks } from 'mock/data';

const useStore = create<StoreTasks>((set) => ({
  tasks: defaultTasks, // por si no hay datos cargados aún
  xp: 0,
  level: 1,

  // ✅ Nueva acción para cargar y setear tareas desde afuera
  setTasks: (tasks) => set({ tasks }),

  // ✅ Función para cargar desde el storage (puedes llamar esta al iniciar)
  loadAndSetTasks: async () => {
    try {
      const loadedTasks = await loadTasks();
      set({ tasks: loadedTasks });
    } catch (error) {
      console.error('Error loading tasks:', error);
      set({ tasks: defaultTasks }); // fallback si falla
    }
  },

  // ✅ Mantengo tu lógica de completar tareas con tiempo/cooldown
  completeTask: (taskId) => set((state) => {
    const now = Date.now();

    const updatedTasks = state.tasks.map(task => {
      if (task.id === taskId) {
        if (task.completed) {
          const nextAvailable = new Date(task.lastCompleted).getTime() + (task.cooldownMinutes * 60000);
          if (now < nextAvailable) {
            return task; // todavía en cooldown, no tocar
          }
        }

        // actualizar como completada
        return {
          ...task,
          completed: true,
          lastCompleted: now,
        };
      }
      return task;
    });

    const xpGained = state.xp + 10; // puedes ajustar la fórmula si quieres
    const newLevel = Math.floor(xpGained / 100) + 1;

    return {
      tasks: updatedTasks,
      xp: xpGained,
      level: newLevel,
    };
  }),
}));

export default useStore;
