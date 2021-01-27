import React from 'react'
import BranchSelectDestination from './BranchSelectDestination';
import BranchSelectOrigin from './BranchSelectOrigin';
import { 
    SearchContainer,
    SearchDiv,
    StyledSelect
} from './SearchHeader.elements';
import UserSelectReceiver from './UserSelectReceiver';
import UserSelectSender from './UserSelectSender';


const SearchHeader = () => {
    return (
        <SearchContainer>
            <SearchDiv>
             <BranchSelectOrigin />
             <BranchSelectDestination />
            <UserSelectSender />
            <UserSelectReceiver />
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
