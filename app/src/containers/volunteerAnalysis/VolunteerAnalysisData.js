import { TextField } from "../../components/styledComponents/index";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const VolunteerAnalysisData = ({ month }) => {
  const url = "https://web-korki.edu.pl";
  const token = Cookies.get("access");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const [teachers, setTeachers] = useState([]);
  const getTeachers = async () => {
    const resp = await axios
      .get(`${url}/api/users/`, config)
      .then((response) => {
        setTeachers(response.data);
        //console.log(response.data);
      })
      .catch((err) => console.log("Error", err));
  };

  useEffect(() => {
    getTeachers();
  }, []);

  // const sortBy = (sort_by) => {
  //   teachers.sort((a, b) => {
  //     switch (sort_by) {
  //       case "canceled":
  //         console.log(a.lessons_canceled < b.lessons_canceled);
  //         if (a.lessons_canceled < b.lessons_canceled) return -1;
  //         break;
  //       case "taken":
  //         //if (a.lessons_taken < b.lessons_taken) return -1;
  //         break;
  //     }
  //   });
  // };

  return (
    <>
      <div>
        <h3>Korepetytor, który najczęściej potrzebował zastępstw</h3>
        <div className="row">
          {/* {sortBy("canceled")
            .slice(0, 5)
            .map((teacher) => (
              <div className="row col-6">
                <TextField className="col">{teacher.username}</TextField>
                <TextField className="col-2 text-center">
                  {teacher.lessons_canceled}
                </TextField>
              </div>
            ))} */}
        </div>
      </div>
      <div>
        <h3>
          Korepetytorzy, którzy przeprowadzili wszystkie lekcje w miesiącu
        </h3>
        <div className="row">
          {teachers.map((teacher) => {
            if (
              teacher.is_superuser === false &&
              (teacher.lessons_canceled === 0 ||
                teacher.lessons_canceled == null)
            ) {
              return (
                <div className="row col-6">
                  <TextField className="col">{teacher.username}</TextField>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div>
        <h3>Korepetytor, który przejął najwięcej zastępstw w miesiącu</h3>
        <div className="row">
          {/* {sortBy("taken")
            .slice(0, 5)
            .map((teacher) => (
              <div className="row col-6">
                <TextField className="col">{teacher.username}</TextField>
                <TextField className="col-2 text-center">
                  {teacher.lessons_taken}
                </TextField>
              </div>
            ))} */}
        </div>
      </div>
    </>
  );
};
