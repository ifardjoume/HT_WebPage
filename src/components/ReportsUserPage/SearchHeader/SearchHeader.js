import React from 'react'
import BranchSelect from './BranchSelect';
import { 
    SearchContainer,
    SearchDiv,
    StyledSelect
} from './SearchHeader.elements';
import UserSelect from './UserSelect';


const SearchHeader = () => {
    return (
        <SearchContainer>
            <SearchDiv>
             <BranchSelect />
            <UserSelect />
            <StyledSelect
                className="select"
                /* value={this.props.filters.sortBy}
                onChange={this.onSortChange}   */      >
                    <option value="">Alertas</option>
                    <option value="alerta">Con Alertas</option>
                    <option value="dudoso">Dudoso</option>
                    <option value="no-alerta">Sin alerta</option>
            </StyledSelect>
            </SearchDiv>
        </SearchContainer>
    )
}

export default SearchHeader
