import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Container, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Results = (props) => {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "http://localhost:5000/run";
  const dataFrom = {
    sepalLength: parseFloat(props.location.state.sepalLength),
    sepalWidth: parseFloat(props.location.state.sepalWidth),
    petalLength: parseFloat(props.location.state.petalLength),
    petalWidth: parseFloat(props.location.state.petalWidth),
    epoch: parseInt(props.location.state.epoch),
    lr: parseFloat(props.location.state.lr),
  };
  console.log("Sergio",dataFrom);
  //runs once after the first rendering of page
  useEffect(() => {
    const fetchData = async () => {
      axios
        .post(apiUrl,dataFrom)
        .then((result) => {
          setData(result.data);
          setShowLoading(false);
        })
        .catch((error) => {
          console.log("error in fetchData:", error);
        });
    };
    fetchData();
  }, []);
  return (
    <>
      <Container>
        <div className="text-center">
          <div>
            {showLoading === false ? (
              <div className="text-center">
                            
                {showLoading && (
                  <Spinner animation="border" role="status"></Spinner>
                )}
               <h1>Prediction Results</h1>
           <h2> the values for species will be:</h2>
           <li>setosa: 1,0,0</li>              
           <li>virginica: 0,1,0</li>
           <li>versicolor: 0,0,1 </li>
                <ListGroup>
                  {data.row1.map((item, idx) => (
                    <ListGroup.Item
                      style={{
                        width: "100%",
                        padding: "12px 20px",
                        margin: "8px 0",
                        display: "inline-block",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                      }}
                      key={idx}
                    >
                      {item}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                            
                <div className="text-center">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to="/"
                    activeClassName="active"
                  >
                    GO BACK
                  </NavLink>
                </div>
                                         
              </div>
            ) : (
              <div>
                          
                {showLoading && (
                  <Spinner animation="border" role="status"></Spinner>
                )}
                        
              </div>
            )}
               
          </div>
        </div>
         
      </Container>
    </>
  );
};
export default Results;
