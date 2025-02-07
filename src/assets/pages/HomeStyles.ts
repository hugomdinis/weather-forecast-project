// HomeStyles.ts
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  justify-content: center;
  width: 100vw;
`;

export const CardSearchBar = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 1%;
  margin-bottom: 20px;
  border-radius: 16px;
  width: 80%;
  max-width: 8s0%;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RowSearchBar = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 80%;
  margin: 0 auto; 

  @media (max-width: 768px) {
    flex-direction: column; 
    text-align: center;
  }
`;

export const ColumnSearchTitle = styled.div`
  flex: 1; 
  display: flex;
  justify-content: center; 
  align-items: center;
  padding-top: 15px;
`;

export const ColumnSearchBar = styled.div`
  flex: 1; 
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 100%;
`;

export const RowWeather = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: stretch; 
  width: 80%;
  margin: 0 auto;
  gap: 20px; 

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;

export const ColumnCharMap = styled.div`
  flex: 7.5;
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  gap: 20px;
`;

export const ColumnList = styled.div`
  flex: 2.5;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
`;

export const RowChart = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RowMap = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Card = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 16px;
  width: 100%;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const WeatherList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const WeatherItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
`;

export const ToggleButton = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  background-color: rgba(21, 101, 192, 0.5);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8x;
  transition: background 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;