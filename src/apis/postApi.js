import { useQuery } from "@tanstack/react-query";

export const useAllCostumers = () => {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:8000/custumer/allcustumer").then((res) =>
        res.json()
      ),
  });
  console.warn(data)
  return {
    isPending,
    isError,
    error,
    data,
  };
};

export const useAllChefs = () => {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["abc"],
    QueryFn: () =>
      fetch("http://localhost:8000/chef/allchef").then((res) => res.json()),
  });
  console.warn(data)
  return { isPending, isError, error, data };
};

// export default [useAllChefs,useAllCostumers]
