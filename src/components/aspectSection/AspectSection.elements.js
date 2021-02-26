import styled from 'styled-components';

export const AspectContainer = styled.div`
    color: black;
    background:#e4f4fd;
  align-items:center;
  display:flex;
  padding:20px 0;
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

  @media screen and (max-width:900px) {
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
export const ListItemBottom = styled.div`
  line-height: 1.1;
  font-weight: 600;
  color: #333;
  display:flex;
  text-align:center;
  flex-direction:column;
  align-items: center;
  font-size:1rem;
  margin-bottom:60px;
  padding:10px 20px;
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
    @media screen and (max-width:900px) {
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
  width:85px;
  height:90px;
  object-fit: contain;
`
export const IconImageGeo = styled.img`
  width:85px;
  height:95px;
  object-fit: contain;
`