import React from 'react'
import { 
    SearchContainer,
    StyledInput,
    SearchDiv,
    StyledSelect
} from './SearchHeader.elements';
//import { DateRangePicker } from 'react-dates';


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
             <StyledSelect
                className="select"
                /* value={this.props.filters.sortBy}
                onChange={this.onSortChange}   */>
                    <option value="date">Remitente</option>
                    <option value="date">Laboratorios M</option>
                    <option value="amount">H-Trace Labs</option>
            </StyledSelect>
            <StyledSelect
                className="select"
                /* value={this.props.filters.sortBy}
                onChange={this.onSortChange}   */      >
                    <option value="date">Receptor</option>
                    <option value="date">Laboratorios M</option>
                    <option value="amount">H-Trace Labs</option>
            </StyledSelect>
            <StyledSelect
                className="select"
                /* value={this.props.filters.sortBy}
                onChange={this.onSortChange}   */      >
                    <option value="date">Alertas</option>
                    <option value="amount">Dudoso</option>
                    <option value="amount">Sin alerta</option>
            </StyledSelect>
             <StyledSelect
                className="select"
                /* value={this.props.filters.sortBy}
                onChange={this.onSortChange}   */      >
                    <option value="date">Laboratorios M</option>
                    <option value="amount">H-Trace Labs</option>
            </StyledSelect>
            <StyledSelect
                className="select"
                /* value={this.props.filters.sortBy}
                onChange={this.onSortChange}   */      >
                    <option value="date">Laboratorios M</option>
                    <option value="amount">H-Trace Labs</option>
            </StyledSelect>
            <StyledSelect
                className="select"
                /* value={this.props.filters.sortBy}
                onChange={this.onSortChange}   */      >
                    <option value="date">Alerta</option>
                    <option value="amount">Dudoso</option>
                    <option value="amount">Sin alerta</option>
            </StyledSelect>

            </SearchDiv>


        </SearchContainer>
    )
}

export default SearchHeader
