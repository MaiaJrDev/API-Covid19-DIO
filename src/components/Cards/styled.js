import styled from 'styled-components'

export const GridCards = styled.div`
   
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   align-content: center;
   gap: 10px;
   margin: 0 auto;
   width: 80%;

   @media (max-width: 600px) {
      grid-template-columns: 1fr;
  }

`