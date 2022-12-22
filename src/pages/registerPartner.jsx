import React, { useState } from 'react';
import Background from '../assets/shoes.jpg'
import RegisterFour from '../components/RegisterFour';
import RegisterOne from '../components/RegisterOne';
import RegisterTree from '../components/RegisterTree';
import RegisterTwo from '../components/RegisterTwo';

function RegisterPartner() {

  const [steps, setSteps] = useState([
    { key: 'firstStep', isDone: true, component: <RegisterOne/> },
    { key: 'secondStep', isDone: false, component:<RegisterTwo/> },
    { key: 'thirdStep', isDone: false, component: <RegisterTree/> },
    { key: 'finalStep', isDone: false, component: <RegisterFour/> },
  ]);

  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert('You have completed all steps.');
      return;
    }

    const index = steps.findIndex(x => x.key === activeStep.key);
    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = true;
      return x;
    }))
    setActiveStep(steps[index + 1]);
  }

  const handleBack = () => {
    const index = steps.findIndex(x => x.key === activeStep.key);
    if (index === 0) return;

    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = false;
      return x;
    }))
    setActiveStep(steps[index - 1]);
  }

  return (
    <div className={`h-screen w-screen relative`}>
        <img src={Background} className='w-full h-full object-fill relative'/>         
        <div className="absolute top-0 px-32 py-10 w-[100%] h-full">
            <div className='card rounded-xl w-full bg-bozz-five px-12 py-5 h-full'>
                <h1 className='text-center font-bold text-3xl text-bozz-one mb-3'>REGISTER</h1>
                <div className='flex justify-start ml-[-100px]'>
                    <ul className="steps w-[90%]">
                        {steps.map((step, i) => {
                        return <li key={i} className={`flex items-center justify-end`}> 
                                    <div className={`h-1 w-full ${activeStep.key === step.key || step.isDone ? 'bg-bozz-one' : 'bg-bozz-four'} ${ i + 1 !== 1 ? `block` : `hidden`}`} value="100" max="100"></div>
                                    <div className={`text-bozz-six text-lg w-6 h-6 flex justify-center items-center rounded-full p-5 ${activeStep.key === step.key || step.isDone ? 'bg-bozz-one' : 'bg-bozz-four'}`}>
                                        <span>{i + 1}</span></div>
                                </li>
                        })}
                    </ul>
                </div>
                <div className="step-component">
                    {activeStep.component}
                </div>
                <div className="btn-component mt-3 flex justify-between pr-16 bottom-0">
                    <input type="button" className='w-[170px] h-[44px] bg-bozz-one rounded-xl text-lg text-bozz-six bottom-10' value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} />
                    <input type="button" className='w-[170px] h-[44px] bg-bozz-one rounded-xl text-lg text-bozz-six bottom-10' value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Submit'} onClick={handleNext} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default RegisterPartner;