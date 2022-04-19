import styled from 'styled-components'

export const TitleHome = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
  color: white;
  text-shadow: 1px 1px 5px green;
  font-size: 4em;

  @media (max-width: 600px) {
      font-size: 2em;
  }
`

export const DateAndCountry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  margin: 2% auto;


  p{
    color: white;
    font-size: 1.3em;
  }

  @media (max-width: 600px) {
      flex-direction: column;
      width: 90%;

      p{
        font-size: 1em;
      }
  }
`