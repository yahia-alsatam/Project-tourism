import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const GetApi = () => {
  const [tourism, setTourism] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.course-api.com/react-tours-project")
      .then((ref) => setTourism(ref.data));
  }, []);

  return (
    <>
      {tourism.map((t) => {
        console.log(t.name);
      })}
    </>
  );
};

export default GetApi;
