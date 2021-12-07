import ButtonEx from "./component/ButtonEx";
import CheckBoxEx from "./component/CheckBox";
import { GridEx } from "./component/GridEx";
import { RadioButton } from "./component/RadioButton";
import { RangeSlider } from "./component/RangeSlider";
///-------------------------------------------------

import { SliderEx } from "./component/SliderEx";
import { SwitchEx } from "./component/SwitchEx";
import TextFieldEx from "./component/TextField";
function App() {
  return (
    <>
    
    <h1>Hello To Material UI</h1>
    <GridEx/>
    <SwitchEx/>
  <RangeSlider/>  
  <TextFieldEx/>
    <SliderEx/>
      <RadioButton/>
    <CheckBoxEx/>
      <ButtonEx/>
    </>
  );
}

export default App;
