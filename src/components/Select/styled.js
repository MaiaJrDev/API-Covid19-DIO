import styled from 'styled-components'

export const SelectCountryField = styled.div`
  display: flex;
  justify-content: center;

  .form-select{
      margin-top: 5%;
      width: 30%;
  }

  @media (max-width: 600px) {
    .form-select{
      width: 80%;
  }
  }
`