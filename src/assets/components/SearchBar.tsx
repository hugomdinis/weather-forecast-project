import { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
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

const Button = styled.button`
  padding: 10px;
  margin-left: 10px;
  background-color: rgba(21, 101, 192, 0.5);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

type Props = {
  onSearch: (city: string) => void;
};

export const SearchBar = ({ onSearch }: Props) => {
  const [city, setCity] = useState("");

  return (
    <SearchContainer>
      <Input 
        type="text" 
        placeholder="Enter the city..." 
        value={city} 
        onChange={(e) => setCity(e.target.value)}
      />
      <Button onClick={() => onSearch(city)}>Search</Button>
    </SearchContainer>
  );
};
