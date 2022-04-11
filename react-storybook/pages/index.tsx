import Head from "next/head";
import Image from "next/image";
import { TodoForm } from "../stories/TodoForm";
import TodoList from "../stories/TodoList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="h-full min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4">
        <TodoForm />
        <TodoList title="Todo List" />
      </div>
    </div>
  );
}
