import React, { useState } from 'react';
import './step.scss';

const Order = () => {
    const steps = ["Cart Products", "Address", "Payment", "Shipping"];

    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    console.log("steps ", currentStep)

    return (
        <div className='stepscon'>
            <div className='steps'>
                {steps.map((step, i) => (
                    <div key={i} className={`step ${currentStep === i ? 'active' : currentStep > i ? 'complete' : ''}`}>
                        <div className={`stepdiv ${currentStep > i ? 'completed' : ''}`}>
                            {currentStep > i ? "" : i + 1}
                        </div>
                        <p>{step}</p>
                    </div>
                ))}
            </div>
            <div className="stepbtns">
                <button className='stepbtn' onClick={handleBack} disabled={currentStep === 0}>
                    Back
                </button>
                <button className='stepbtn' onClick={handleNext} disabled={currentStep === steps.length - 1}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Order;
