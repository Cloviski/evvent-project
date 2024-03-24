"use client";

import { useState } from "react";

enum Status {
  DONE = "Done",
  IN_PROGRESS = "In progress",
  NOT_STARTED = "Not started",
}

enum Priority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

interface Tasks {
  task_id: number;
  taskname: string;
  status: string;
  priority: string;
  summary: string;
}

export const Form = () => {
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState<Status>(Status.NOT_STARTED);
  const [priority, setPriority] = useState<Priority>(Priority.LOW);
  const [summary, setSummary] = useState("");

  return (
    <form>
      <label htmlFor="task-name">Task name</label>
      <input
        type="text"
        id="task-name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <label htmlFor="status">Status</label>
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value as Status)}
      >
        <option value={Status.NOT_STARTED}>Not Started</option>
        <option value={Status.IN_PROGRESS}>In Progress</option>
        <option value={Status.DONE}>Done</option>
      </select>
      <label htmlFor="priority">Priority</label>
      <select
        id="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <label htmlFor="Summary">Summary</label>
      <input
        type="text"
        id="summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

/*
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-name">Task name</label>
      <input
        type="text"
        id="task-name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <label htmlFor="status">Status</label>
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value as Status)}
      >
        <option value={Status.NOT_STARTED}>Not Started</option>
        <option value={Status.IN_PROGRESS}>In Progress</option>
        <option value={Status.DONE}>Done</option>
      </select>
      <label htmlFor="priority">Priority</label>
      <select
        id="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <label htmlFor="Summary">Summary</label>
      <input
        type="text"
        id="summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <button type="submit">Create Task</button>
    </form>
*/
