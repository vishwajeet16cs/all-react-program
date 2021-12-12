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
import { PaperEx } from "./component/PaperEx";
import { ColorsUseMui } from "./component/ColorsUseMui";
import { IconsEx } from "./component/IconsEx";
import { ButtonEx2M } from "./component/ButtonEx2M";
import { UtilityFunction } from "./component/UtilityFunction";
import { GridSysetm } from "./component/GridSystem";
import { GridSysetm2 } from "./component/GredSystem2";
import { FloatingActionButton } from "./component/FloatingActionButton";
import { CardEx } from "./component/CardEx";
import { TextFieldEx2 } from "./component/TextFieldEx2";
import { RadioButtonEx } from "./component/inputComponent/RadioButtonEx";
import { CheckBoxEx2 } from "./component/inputComponent/CheckBoxEx2";

function App() {
  return (
    <>
    <Typography color="primary" variant="h2" align="center">Hello To Material UI World</Typography>
    <Typography color="blue" variant="h4" align="center">Be Responsive And Make Responsive</Typography>
    
    <ContainerEx/>
    <hr/>
    <TextFieldEx2/>
    <hr/>
    <CheckBoxEx2/>
    <hr/>
    <RadioButtonEx/>
    <hr/>
    <CardEx/>
    <hr/>
    <ButtonEx2M/>
    <hr/>
    <FloatingActionButton/>
    <hr/>
    <GridSysetm2/>
    <hr/>
    <GridSysetm/>
    <hr/>
    <UtilityFunction/>
    <hr/>
    <ColorsUseMui/> 
    <hr/>
    <IconsEx/>
    <hr/>
    <PaperEx/>
    <hr/>
    <MUICssInJs/>
    <hr/>
    <BoxComponent/>
    <hr/>
    <GridEx/>
    <hr/>
    <SwitchEx/>
    <hr/>
  <RangeSlider/>
  <hr/>  
  <TextFieldEx/>
  <hr/>
    <SliderEx/><hr/>
      <RadioButton/><hr/>
    <CheckBoxEx/><hr/>
      <ButtonEx/><hr/>
    </>
  );
}

export default App;
