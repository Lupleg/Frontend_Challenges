"use client"

import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { Card, CardContent } from "@/components/ui/card"

// Define the task type
interface Task {
  id: string
  content: string
}

// Define the column type
interface Column {
  id: string
  title: string
  tasks: Task[]
}

// Initial state for the board
const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      { id: 'task-1', content: 'Learn React' },
      { id: 'task-2', content: 'Build a project' },
    ],
  },
  {
    id: 'inprogress',
    title: 'In Progress',
    tasks: [
      { id: 'task-3', content: 'Create drag and drop board' },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      { id: 'task-4', content: 'Set up development environment' },
    ],
  },
]

export default function DragDropBoard() {
  const [columns, setColumns] = useState<Column[]>(initialColumns)

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    // If dropped outside the list
    if (!destination) return

    // If dropped in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return

    // Find source and destination columns
    const sourceColumn = columns.find(col => col.id === source.droppableId)
    const destColumn = columns.find(col => col.id === destination.droppableId)

    if (!sourceColumn || !destColumn) return

    // Create new array of tasks for the source column
    const sourceTasks = Array.from(sourceColumn.tasks)
    // Remove the dragged task from the source column
    const [removed] = sourceTasks.splice(source.index, 1)

    if (sourceColumn.id === destColumn.id) {
      // If moving within the same column
      sourceTasks.splice(destination.index, 0, removed)
      const newColumns = columns.map(col =>
        col.id === sourceColumn.id ? { ...col, tasks: sourceTasks } : col
      )
      setColumns(newColumns)
    } else {
      // If moving to a different column
      const destTasks = Array.from(destColumn.tasks)
      destTasks.splice(destination.index, 0, removed)
      const newColumns = columns.map(col => {
        if (col.id === sourceColumn.id) return { ...col, tasks: sourceTasks }
        if (col.id === destColumn.id) return { ...col, tasks: destTasks }
        return col
      })
      setColumns(newColumns)
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Drag and Drop Board</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex space-x-4">
          {columns.map(column => (
            <div key={column.id} className="flex-1">
              <h2 className="text-lg font-semibold mb-2">{column.title}</h2>
              <Droppable droppableId={column.id}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="bg-gray-100 p-2 rounded-md min-h-[200px]"
                  >
                    {column.tasks.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <Card
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="mb-2 cursor-move"
                          >
                            <CardContent className="p-2">
                              {task.content}
                            </CardContent>
                          </Card>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}
