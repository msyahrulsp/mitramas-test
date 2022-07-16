import {
  Stack,
  Input, 
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Checkbox,
  Button
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export const SearchBar = ({ onChange, value, handleTrue, handleFalse, trueVal, falseVal }) => {
  return (
    <Stack direction="row" gap="2">
      <Input
        bg="white"
        value={value}
        placeholder="Keyword"
        onChange={onChange}
        type="search"
        boxShadow= "4px 5px 5px -2px lightgray"
      />
      <Menu>
        <MenuButton as={Button}>
          Filter
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Checkbox isChecked={trueVal} onChange={handleTrue}>Active</Checkbox>
          </MenuItem>
          <MenuItem>
            <Checkbox isChecked={falseVal} onChange={handleFalse}>Inactive</Checkbox>
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  )
}