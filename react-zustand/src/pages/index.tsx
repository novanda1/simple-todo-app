import type { NextPage } from "next";
import MainLayout from "../components/layouts/MainLayout";
import Todo from "../components/Todo";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Todo />
    </MainLayout>
  );
};

export default Home;
