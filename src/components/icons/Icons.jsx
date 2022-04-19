import Alemanha from "../../assets/iconAlemanha.png";
import China from "../../assets/iconeChina.png";
import Brasil from '../../assets/iconeBrasil.png'
import Italia from '../../assets/iconeItalia.png'
import Eua from '../../assets/iconeEUA.png'
import styled from "styled-components";

const IconBandeira = styled.img`
  width: 100px;
`;

export default function Icons(props) {

  const renderBandeira = () => {
    switch (props.bandeira) {
      case "germany":
        return <IconBandeira src={Alemanha} />;
      case "china":
        return <IconBandeira src={China} />;
      case "usa":
        return <IconBandeira src={Eua} />;
      case "italy":
        return <IconBandeira src={Italia} />;
      case "brazil":
          return <IconBandeira src={Brasil} />;
  }
};


  return (
    <>
      {renderBandeira()}
    </>
  );

}
