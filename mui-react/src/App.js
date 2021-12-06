import { TextField } from "@material-ui/core";
import ButtonEx from "./component/ButtonEx";
import CheckBoxEx from "./component/CheckBox";
import { RadioButton } from "./component/RadioButton";
import { RangeSlider } from "./component/RangeSlider";
///-------------------------------------------------

import { SliderEx } from "./component/SliderEx";
function App() {
  return (
    <>
    
    <h1>Hello To Material UI</h1>
  {/* <RangeSlider/> */}
  <TextField/>
    <SliderEx/>
      <RadioButton/>
    <CheckBoxEx/>
      <ButtonEx/>
    </>
  );
}

export default App;
