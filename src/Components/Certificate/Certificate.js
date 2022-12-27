import React, { useEffect } from "react";
import "./Certificate.css";
import { Button,Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { singleViewApi } from "../../Store/Student API/useApi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { map } from "lodash";

function Certificate() {
  const dispatch = useDispatch();
  const params = useParams();
  // const navigate = useNavigate();

  const { singleView } = useSelector((state) => ({
    singleView: state.StudentReducer.singleViewDetails,
  }));

  console.log(singleView);

  useEffect(() => {
    dispatch(singleViewApi(params.id));
  }, [dispatch]);

  const student_courses = singleView?.student_courses;

  const Totalstars = 10;

  const ratingTotalstars = 10;

  const progressArray = student_courses?.map((item) =>
    parseInt(item?.progress)
  );

  const Total = progressArray?.reduce((x, y) => x + y, 0);
  const length = singleView?.student_courses.length;
  const rating = (Total / length).toFixed(2);

  const HandlePrint = (e) => {
    e.preventDefault();
    window.print();
  };

  return (
    <div>
      {/* <Container> */}
      <div style={{ textAlign: "center", justifyContent: "center" }}>
        <div class="first-card">
          <img
            class="card-img"
            src={require("../img6.webp")}
            alt="Card image"
            style={{ height: "980px", padding: "10px" }}
          />
          <div class="card-img-overlay">
            <img
              style={{ marginTop: "150px", width: "10%" }}
              src={require("../xanthron.png")}
              className="img-fluid"
            />
            <div className="heading">
              <h1
                style={{
                  fontSize: "70px",
                  fontWeight: "600",
                  marginTop: "15px",
                  letterSpacing: "1px",
                  color: "rgb(47 147 208)",
                }}
              >
                Certificate
              </h1>
              <h6
                style={{
                  fontSize: "30px",
                  fontFamily: "Josefin Sans",
                  fontWeight: "400",
                  marginTop: "10px",
                }}
              >
                for Achievement
              </h6>
            </div>

            <div style={{ color: "black" }}>
              <h3
                style={{
                  fontSize: "40px",
                  marginTop: "70px",
                  fontFamily: "Merriweather",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  color: "rgb(68 111 176)",
                }}
              >
                {singleView.full_name}
              </h3>
              <p
                style={{
                  fontSize: "28px",
                  fontFamily: "Josefin Sans",
                  fontWeight: "400",
                }}
              >
                Completed the following Achievement
              </p>
              <h2
                style={{
                  fontSize: "35px",
                  fontFamily: "Merriweather",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  marginTop: "-12px",
                  color: "rgb(68 111 176)",
                }}
              >
                {singleView.designation}
              </h2>
              <p
                style={{
                  fontSize: "28px",
                  fontFamily: "Josefin Sans",
                  fontWeight: "400",
                  marginTop: "15px",
                }}
              >
                this certified that
                <span
                  style={{
                    fontWeight: "800",
                    fontFamily: "Merriweather",
                    letterSpacing: "1px",
                    marginLeft: "10px",
                  }}
                >
                  {singleView.full_name}
                </span>{" "}
                has Successfully  Completed
                <span
                  style={{
                    fontWeight: "700",
                    fontFamily: "Merriweather",
                    letterSpacing: "1px",
                    marginTop: "15px",
                    marginLeft: "10px",
                  }}
                >
                  {singleView.designation}
                </span>
                ,started on{" "}
                <span style={{ fontWeight: "500",fontSize:"28px" }}>
                  {singleView.start_date}
                </span>
              </p>
              <p
                style={{
                  fontSize: "28px",
                  fontFamily: "Josefin Sans",
                  fontWeight: "400",
                  marginTop: "60px",
                }}
              >
                We wish you the best for your future endeavours
              </p>
            </div>
            <h1
              style={{
                fontSize: "25px",
                fontFamily: "Josefin Sans",
                fontWeight: "400",
                marginTop: "70px",
              }}
            >
              CEO
            </h1>
          </div>
        </div>
      </div>

      <div
        class="card"
        style={{ textAlign: "center", justifyContent: "center" }}
      >
        <img
          class="card-img"
          src={require("../img6.webp")}
          alt="Card image"
          style={{ height: "980px", padding: "10px" }}
        />
        <div class="card-img-overlay">
          <h1
            class="card-title"
            style={{
              marginTop: "100px",
              fontFamily: "Josefin Sans",
              color: "rgb(68 111 176)",
            }}
          >
            Score Card
          </h1>
          <p
            class="card-text"
            style={{ fontSize: "30px", fontFamily: "Josefin Sans" }}
          >
            (Based on Practices and Assenssement)
          </p>
          <h3
            style={{
              fontSize: "35px",
              color: "rgb(68 111 176)",
              fontWeight: "700",
              fontFamily: "Merriweather",
              letterSpacing: "1px",
              marginTop: "15px",
              marginLeft: "10px",
            }}
          >
            {singleView.designation}
          </h3>
          <h3 style={{ marginTop: "20px" }}>{rating}/10</h3>
          <div style={{ marginTop: "20px" }}>
            {[...new Array(ratingTotalstars)].map((Array, index) => {
              return index < Math.floor(rating) ? (
                <AiFillStar size={30} color="black" />
              ) : (
                <AiOutlineStar size={30} color="black" />
              );
            })}
          </div>

          <div style={{ marginTop: "100px" }}>
            {map(student_courses, (item, key) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                  fontFamily: "Josefin Sans",
                }}
              >
                <h3 style={{ color: "black", minWidth: "50%" }}>
                  {item.course.course_name}
                </h3>
                <div style={{ minWidth: "50%" }}>
                  {[...Array(Totalstars)].map((star, index) => {
                    return index < item.progress ? (
                      <AiFillStar className="star" color="#053240" size={30} />
                    ) : (
                      <AiOutlineStar color="#053240" size={30} />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <Button id = 'print'
      onClick={HandlePrint} type="button"
      style={{border: 'none'}}>
            print
          </Button>
          
        </div>
      </div>
      

      {/* </Container> */}
    </div>
  );
}

export default Certificate;
