import React, { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
import NewTask from "./NewTask/NewTask";
import Tasks from "./Tasks";
import { TASKS_URL } from "../Constants/URL.constants";
function TasksDashboard() {
  console.log("TasksDashboard RUNNING");
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  const transformTasks = (tasksObj) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  };
  useEffect(() => {
    fetchTasks({ url: TASKS_URL }, transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default TasksDashboard;
