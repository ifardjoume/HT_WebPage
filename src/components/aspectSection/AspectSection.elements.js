import styled from 'styled-components';

export const AspectContainer = styled.div`
    color: black;
    background:#949cdf;
  align-items:center;
  padding: 70px 70px;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`

export const AspectWrapper = styled.div`
    display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:row;

  @media screen and (max-width:620px) {
    flex-direction:column;
    text-align:center;
  }

`

export const ListItem = styled.li`
  line-height: 1.1;
  font-weight: 300;
  color: #1c2237;
  display:flex;
  flex-direction:row;
  align-items: center;
  font-size:1rem;
  color:black;
  margin-bottom:64px;
  padding:10px;

  @media screen and (max-width:768px) {
    flex-direction:column;
  }
`

export const AspectList = styled.ul`
    padding:20px;
    list-style-type:none;

    @media screen and (max-width:620px) {
    flex-direction:column;
  }
`

export const Separator = styled.div`
    height:450px;
    border: 1px ridge black;
    width:3px;
    background:black;
    @media screen and (max-width:600px) {
    display:none;
    }

`
export const ListIcon = styled.div`
padding:15px;
`
