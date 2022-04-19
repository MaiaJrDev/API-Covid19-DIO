import useRequestData from "../../request/request";
import React, { useState } from "react";
import SelectCountry from "../Select/SelectCountry";
import Cards from "../Cards/Cards";
import { TitleHome, DateAndCountry} from "./styled";
import Icons from "../icons/Icons";

function InitialPage() {
  const [estado, setEstado] = useState("brazil");
  const data = useRequestData(estado);

  const handleSelect = (e) => {
    setEstado(e.target.value);
  };

  const updateAt = new Date().toLocaleString();

  return (
    <>
      <TitleHome>Dados Covid-19</TitleHome>
      <SelectCountry handleSelect={handleSelect} />
      <DateAndCountry>
        <p>Atualizado Em : {updateAt}</p>
        <Icons bandeira={estado} />
      </DateAndCountry>
      <Cards
        mortesTotal={data.deaths}
        totalCasos={data.cases}
        obitosHoje={data.todayDeaths}
        casosHoje={data.todayCases}
        recuperados={data.recovered}
      />
    </>
  );
}

export default InitialPage;
