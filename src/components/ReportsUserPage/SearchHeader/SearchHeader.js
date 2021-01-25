import React from 'react'
import BranchSelect from './BranchSelect';
import { 
    SearchContainer,
    StyledInput,
    SearchDiv,
    StyledSelect
} from './SearchHeader.elements';
import UserSelect from './UserSelect';


const SearchHeader = () => {
    return (
        <SearchContainer>
            <SearchDiv>
            <StyledInput
            className="text-input"
            placeholder="Buscar reportes"
            type="text"
            /* value={}
            onChange={} */
            />
            </SearchDiv>
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
            {/* <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
            /> */}
            </SearchDiv>
        </SearchContainer>
    )
}

export default SearchHeader
