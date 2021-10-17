import { BackButton } from "../../components/buttons/BackButton";
import { ContainerSmall } from "../../components/styledComponents/index";
import { LectureAnalysisData } from "./LectureAnalysisData";
import { useEffect, useState } from "react";
import axios from "axios";
import { WhichMonthFunc } from "../../components/form/WhichMonthFunc";
import Cookies from "js-cookie";

export const LectureAnalysisDetail = (link) => {
  const link_prop = link.match.params.month;
  const url = "https://web-korki.edu.pl";
  const token = Cookies.get("access");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const [houses, setHouses] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [students, setStudents] = useState([]);

  const getHouses = async () => {
    const resp = await axios
      .get(`${url}/api/houses/`, config)
      .then((response) => {
        setHouses(response.data);
        //console.log(response.data);
      })
      .catch((err) => console.log("Error", err));
  };
  const getLessons = async () => {
    const resp = await axios
      .get(`${url}/api/lessons/`, config)
      .then((response) => {
        //setLessons(response.data);
        //console.log(response);
      })
      .catch((err) => console.log("Error", err));
  };
  // const getStudents = async () => {
  //   const resp = await axios
  //     .get(`${url}/api/students/`, config)
  //     .then((response) => {
  //       //setStudents(response.data);
  //       console.log(response);
  //     })
  //     .catch((err) => console.log("Error", err));
  // };

  useEffect(() => {
    getHouses();
    //getLessons();
    //getStudents();
  }, []);

  return (
    <>
      <div className="lectureAnalysisWrapper d-flex justify-content-center">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div className="row">
              <BackButton className="col" />
              <h1 className="col title ml-2">Analiza - zajęcia</h1>
            </div>
            <WhichMonthFunc month={link_prop} />
          </div>
          <div className="card-columns" style={{ columnCount: 2 }}>
            {houses.map((house) => (
              <ContainerSmall className="card mb-3">
                <LectureAnalysisData
                  key={house.id}
                  title={house.name}
                  done={house.lessons_done}
                  canceled={house.lessons_canceled}
                />
              </ContainerSmall>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
