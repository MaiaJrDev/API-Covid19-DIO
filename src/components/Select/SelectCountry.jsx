import Icons from "../icons/Icons";
import { SelectCountryField } from "./styled";

export default function SelectCountry(props) {

    const bla = "<img class='grayscale email' src={Alemanha} />"

  return (
    <SelectCountryField>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(e) => props.handleSelect(e)}
      >
        <option selected value="brazil">
          Brasil
        </option>
        <option value="germany">Alemanha</option>
        <option value="china">China <Icons bandeira={'China'}/></option>
        <option value="usa">Estados Unidos</option>
        <option value="italy">Itália</option>
      </select>
    </SelectCountryField>
  );
}
