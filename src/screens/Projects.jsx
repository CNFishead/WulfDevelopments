import react from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import axios from "axios";
import token from "../token";
import { useQuery } from "react-query";
import { QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

let userData = async () => {
  const userRepos = await axios.get("https://api.github.com/users/CNFishead/repos", {
    headers: {
      Authorization: token,
    },
  });
  return userRepos.json();
};

const Projects = () => {
  const {data, status} = useQuery("Project", userData);
  console.log(data);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Footer />
    </QueryClientProvider>
  );
};

export default Projects;
