interface Todo {
    id: string;                 // Identificador único para cada tarea
    title: string;              // Título breve de la tarea
    description?: string;       // Descripción detallada de la tarea (opcional)
    status: 'pending' | 'in_progress' | 'completed'; // Estado de la tarea
    priority: 'low' | 'medium' | 'high'; // Prioridad de la tarea
    dueDate?: Date;             // Fecha de vencimiento de la tarea (opcional)
    createdAt: Date;            // Fecha de creación de la tarea
    updatedAt?: Date;           // Fecha de la última actualización de la tarea (opcional)
    subTasks?: Todo[];          // Lista de subtareas (opcional)
    tags?: string[];            // Etiquetas para categorizar tareas (opcional)
}

export default Todo;
