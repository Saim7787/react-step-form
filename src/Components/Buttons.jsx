import React from 'react';
import { Button, IconButton, ButtonGroup,
	ButtonToolbar } from 'rsuite';



const Buttons = ({onNext,previous}) => (
  <>
   <ButtonGroup>
				<Button onClick={previous}
					disabled={step === 0}>
					Previous
				</Button>
				<Button onClick={onNext}
					disabled={step === 3} >
					Next
				</Button>
			</ButtonGroup>
  
   
  </>
);

export default Buttons;