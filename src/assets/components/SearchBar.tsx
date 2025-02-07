import { useState } from "react";
import { SearchContainer, Input, Button} from "./SearchBarStyle";

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
