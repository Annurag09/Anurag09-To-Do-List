import React from "react";
import Board from "./components/Board";
import styled from "styled-components";
import trello from "./img/Trello-Logo.png";
import "./css/reset.css";
import "./css/global.css";

const App = () => {
  return (
    <Container>
      <Heading>
        <img src={trello} alt="" />
        <span>To Do List</span>
      </Heading>
      <Board></Board>
    </Container>
  );
}

export default App;

const Heading = styled.div`
  font-family: roboto;
  color: white;
  margin: 15px;
  text-align: center;
  font-weight: 600;
  font-size: 40px;
  position: relative;
  & img {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 3px;
    height: 100%;
    width: 10%;
    padding: 3px;
  }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
