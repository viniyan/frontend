import { Select } from "@chakra-ui/react";

const SelectWithIcon = ({ options }) => {
  return (
    <Select bg={"white"} placeholder="Select option">
      {options?.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
};

export default SelectWithIcon;
