import { Button, ButtonGroup } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete"
function ButtonEx() {
  return (
    <>
    {/* <h1>hello To material UI</h1> */}
    <li>first install @material-ui/icons for using delete icone</li>
    <li>import Delete @material-ui/icons/Delete </li>
    {/* <li> </li> */}

    <Button color="secondary"
     variant="contained"
     startIcon={<Delete/>}//endIcon={<Delete/>}
     >Click</Button>
     <h1>Button Group</h1>
     <sapn>
       <li>import Button,ButtonGroup from @material-ui/core"</li>
       <li>any prop applied on ButtonGroup will be applicable to all button 
         inside the Button group
       </li>
       </sapn>
     <ButtonGroup variant="contained"
                  color="primary"
                  orientation="vertical"//orientation="horizontal"
                  >
       <Button>One</Button>
       <Button>Two</Button>
       <Button>Three</Button>
     </ButtonGroup>
    
    </>
  );
}

export default ButtonEx;
