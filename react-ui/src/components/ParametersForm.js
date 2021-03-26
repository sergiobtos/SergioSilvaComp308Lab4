import React, { useState } from "react";
import { Form, Button, Container, Spinner } from "react-bootstrap";
import axios from "axios";
const ParametersForm = (props) => {
  const [state, setState] = useState({
    sepalLength: "",
    sepalWidth: "",
    petalLength: "",
    petalWidth: "",
    epoch: "",
    lr: "",
  });

  //
  const [showLoading, setShowLoading] = useState(false);

  const handleOnSubmit = (event) => {
    setShowLoading(true);
    event.preventDefault();
    console.log(state);
        props.history.push({
          pathname: "/results",
          state,
        });
  };

  const onChange = (e) => {
    e.persist();
    setState({ ...state, [e.target.name]: e.target.value });
  };
  //
  return (
    <div>
      <Container>
        <div className="text-center">
          <div
            style={{
              position: "absolute",
              top: "3vw",
              bottom: "0",
              left: "0",
              right: "0",
              margin: "auto",
              width: "30vw",
              height: "auto",
            }}
          >
            <h1>TEST PARAMETERS FORM</h1>
            {showLoading && (
              <Spinner animation="border" role="status"></Spinner>
            )}
            <Form onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Control
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  type="number"
                  step=".1"
                  name="sepalLength"
                  id="sepalLength"
                  placeholder="Enter Sepal Length"
                  value={state.sepalLength}
                  onChange={onChange}
                  required
                />
              </Form.Group>
              {/* */}
              <Form.Group>
                <Form.Control
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  type="number"
                  step=".1"
                  name="sepalWidth"
                  id="sepalWidth"
                  placeholder="Enter Sepal Width"
                  value={state.sepalWidth}
                  onChange={onChange}
                  required
                />
              </Form.Group>
              {/* */}
              <Form.Group>
                <Form.Control
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  type="number"
                  step=".1"
                  name="petalLength"
                  id="petalLength"
                  placeholder="Enter Petal Length"
                  value={state.petalLength}
                  onChange={onChange}
                  required
                />
              </Form.Group>
              {/* */}
              <Form.Group>
                <Form.Control
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  type="number"
                  step=".1"
                  name="petalWidth"
                  id="petalWidth"
                  placeholder="Enter Petal Width"
                  value={state.petalWidth}
                  onChange={onChange}
                  required
                />
              </Form.Group>
              {/* */}
              <Form.Group>
                <Form.Control
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  type="number"
                  step="any"
                  name="epoch"
                  id="epoch"
                  placeholder="Enter Epoch"
                  value={state.epoch}
                  onChange={onChange}
                  required
                />
              </Form.Group>
              {/* */}
              <Form.Group>
                <Form.Control
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  type="number"
                  step=".01"
                  name="lr"
                  id="lr"
                  placeholder="Enter Lr (number from 0 to 1)"
                  value={state.lr}
                  onChange={onChange}
                  required
                />
              </Form.Group>
              <Button
                style={{
                  border: "none",
                  color: "white",
                  padding: "15px 32px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "15px",
                  fontWeight: "bold",
                  margin: "10px",
                }}
                variant="primary"
                type="submit"
              >
                EVALUATE
              </Button>
            </Form>
          </div>
        </div>
      </Container>
      </div>
  );
};
export default ParametersForm;
