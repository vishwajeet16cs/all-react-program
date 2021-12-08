import { BoxComponent } from "./component/BoxComponent";
import ButtonEx from "./component/ButtonEx";
import CheckBoxEx from "./component/CheckBox";
import { ContainerEx } from "./component/ContainerEx";
import { GridEx } from "./component/GridEx";
import { RadioButton } from "./component/RadioButton";
import { RangeSlider } from "./component/RangeSlider";
///-------------------------------------------------

import { SliderEx } from "./component/SliderEx";
import { SwitchEx } from "./component/SwitchEx";
import TextFieldEx from "./component/TextField";
import {MUICssInJs} from "./component/MUICssInJs"
import {Typography} from '@material-ui/core'

function App() {
  return (
    <>
    <Typography color="blue" variant="h2" align="center">Hello To Material UI World</Typography>
    <Typography color="blue" variant="h4" align="center">Be Responsive And MAke Responsive</Typography>
    
    <ContainerEx/>
    <MUICssInJs/>
    <BoxComponent/>
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
