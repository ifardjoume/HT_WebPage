import styled from 'styled-components';

export const AspectContainer = styled.div`
    color: black;
    background:#949cdf;
  align-items:center;
  display:flex;
  padding-top:40px;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  width:100%;
`

export const AspectWrapper = styled.div`
    display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:row;
  width:100%;

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
  text-align:center;
  flex-direction:column;
  align-items: center;
  font-size:1rem;
  color:black;
  margin-bottom:60px;
  padding:10px;
  justify-content:center;

  @media screen and (max-width:768px) {
    flex-direction:column;
  }
`

export const AspectList = styled.ul`
    padding:20px;
    list-style-type:none;
    align-items:center;

    @media screen and (max-width:620px) {
    flex-direction:column;
  }
`

export const Separator = styled.div`
    height:450px;
    width:50px;
    @media screen and (max-width:600px) {
    display:none;
    }

`
export const ListIcon = styled.div`
padding:15px;
`
