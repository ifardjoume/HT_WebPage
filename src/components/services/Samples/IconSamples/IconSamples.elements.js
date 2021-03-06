import styled from 'styled-components';

export const AspectContainer = styled.div`
    color: black;
    background:#fafafa;
  align-items:center;
  display:flex;
  padding:70px 0;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  width:100%;
`

export const AspectWrapper = styled.div`
    display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  width:100%;

  @media screen and (max-width:620px) {
    flex-direction:column;
    text-align:center;
  }

`

export const ListItem = styled.div`
  line-height: 1.1;
  font-weight: 600;
  color: #333;
  display:flex;
  text-align:center;
  flex-direction:column;
  align-items: center;
  font-size:1rem;
  margin-bottom:60px;
  padding:10px;
  margin:20px;
  justify-content:center;

  @media screen and (max-width:768px) {
    flex-direction:column;
  }
`

export const AspectList = styled.div`
    padding:20px;
    display:flex;
    justify-content:center;
    flex-direction:row;

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

export const IconImage = styled.img`
  width:100px;
  height:100px;
`

export const PdfDiv = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  background:#e4f4fd;
  width:100%;
  padding:70px 0;
`


export const PdfH1 = styled.h1`
    padding: 20px;
    font-size: 25px;
    line-height: 1.1;
    font-weight: 600;
    color: #333;
`