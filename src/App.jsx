import React, { useState } from 'react';
import 'rsuite/dist/rsuite.min.css';
import Steps from 'rsuite/Steps';
import { Button, IconButton, ButtonGroup,
	ButtonToolbar } from 'rsuite';
import { Panel, PanelGroup } from 'rsuite';
import StepLast from './Components/StepLast'
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
export default function App() {
	const [step, setStep] = React.useState(0)
	const onChange = nextStep => {
		setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
	};




	



	const onNext = () => onChange(step + 1);
	const onPrevious = () => onChange(step - 1);
	return (
		<div className='container'>
		
			<Steps current={step} className="container">
				<Steps.Item title="In progress"
					 />
				<Steps.Item title="In Progress"
					 />
				<Steps.Item title="Waiting"
					 />
				<Steps.Item title="Waiting"
					 />
			</Steps>
			<Panel header={`Step: ${step + 1}`}>
				<Paragraph value={step} />
			</Panel>
			<hr />
			<ButtonGroup>
				<Button onClick={onPrevious}
					disabled={step === 0}>
					Previous
				</Button>
				<Button onClick={onNext}
					disabled={step === 3} >
					Next
				</Button>
			</ButtonGroup>
		</div>
	)
}
function Paragraph({value}) {
	if (value == '0') {
		return (<div>
			<Step1></Step1>
		</div>)
	}
	else if (value == '1') 
    {
			return (<div >
				<Step2></Step2>
			</div>)
    }
    else if (value == '2') 
    {
			return (<div >
				<Step3></Step3>
			</div>)
    }

		
		else {
			return (<div >
				<StepLast></StepLast>
			</div>)
		}
	}

