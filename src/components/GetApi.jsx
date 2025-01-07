import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card/Card";

const GetApi = () => {
  const [tourism, setTourism] = useState([]);
  const [Error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("https://www.course-api.com/react-tours-project")
          .then((ref) => setTourism(ref.data));
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {tourism.map((t) => {
        console.log(t.name);
      })}
      <Card data={tourism} />
    </>
  );
};

export default GetApi;
