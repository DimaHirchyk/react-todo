import { Layout } from "./Layout/Layout";
import { AppBar } from "./AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../redux/operations";

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.tasks);
  useEffect(() => {
    dispatch(fetchTasks);
  }, [dispatch]);

  return (
    <>
      <div>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
      </div>
      {/* <Layout>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Layout> */}
    </>
  );
};
