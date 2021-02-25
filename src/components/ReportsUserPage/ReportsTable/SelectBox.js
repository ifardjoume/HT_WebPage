import { 
    StyledSelect
} from '../SearchHeader/SearchHeader.elements';

export const SelectBox = ({ children, onChange, value }) => (
    <StyledSelect onChange={onChange} value={value}>
      {children}
    </StyledSelect>
);

export const Option = ({ value, description }) => (
    <option value={value}>{description}</option>
);