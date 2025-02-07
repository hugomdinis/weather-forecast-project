import styled from "styled-components";


export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: black;
  background-color: white;

  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  margin-left: 10px;
  margin-bottom: 15px;
  background-color: rgba(21, 101, 192, 0.5);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;