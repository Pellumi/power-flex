import StepFive from "@/components/quote/step-five";
import StepFour from "@/components/quote/step-four";
import StepOne from "@/components/quote/step-one";
import StepSix from "@/components/quote/step-six";
import StepThree from "@/components/quote/step-three";
import StepTwo from "@/components/quote/step-two";
import { Button } from "@/components/ui/button";
import type {
  CustomQuoteRequestDto,
  PowerflexResponseDto,
} from "@/utils/types";
import { useState } from "react";

const QuotePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;
  const [formData, setFormData] = useState<CustomQuoteRequestDto>({
    contactInfo: {
      name: "",
      email: "",
      phone: "",
    },
    monthlySpendInfo: { monthlySpend: 0, bandGroup: "" },
    energyCoverage: {
      appliances: [],
      loadCoverage: 16,
      batteryAutonomyHours: 6,
      batteryAutonomyDays: 0,
      includeApplianceData: false,
    },
    callbackUrl: `${window.location.href}/payment/validate-outright-pay`,
  });

  const [response, setResponse] = useState<PowerflexResponseDto>();

  const updateFormData = (newData: CustomQuoteRequestDto) => {
    setFormData({ ...formData, ...newData });
  };

  const updateResponse = (data: PowerflexResponseDto) => {
    setResponse((prev) => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen pt-[120px] bg-[#F1F1F1]">
      <div className="">
        <div className="flex justify-center mb-2">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === step
                      ? "bg-primary-main text-white"
                      : step < currentStep
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step}
                </div>
                <div
                  className={`w-16 max-md:w-10 h-1 ${
                    step < 6
                      ? step < currentStep
                        ? "bg-green-500"
                        : "bg-gray-200"
                      : "hidden"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="pb-4">
          {currentStep === 1 && (
            <StepOne
              formData={formData}
              setFormData={updateFormData}
              nextStep={handleNext}
            />
          )}
          {currentStep === 2 && (
            <StepTwo
              formData={formData}
              setFormData={updateFormData}
              updateResponse={updateResponse}
              nextStep={handleNext}
            />
          )}
          {currentStep === 3 && (
            <StepThree
              formData={formData}
              setFormData={updateFormData}
              response={response}
              updateResponse={updateResponse}
              nextStep={handleNext}
            />
          )}
          {currentStep === 4 && (
            <StepFour
              formData={formData}
              setFormData={updateFormData}
              response={response}
              updateResponse={updateResponse}
              nextStep={handleNext}
            />
          )}
          {currentStep === 5 && (
            <StepFive
              response={response}
            />
          )}
          {currentStep === 6 && <StepSix />}
          <div className="flex w-full justify-end gap-6 mt-8 max-w-[580px] mx-auto">
            {currentStep === 1 ? (
              <Button variant="outline" className="w-1/5 mr-auto" asLink to="/">
                Cancel
              </Button>
            ) : (
              <Button
                variant="outline"
                className="w-1/5 mr-auto"
                onClick={handleBack}
              >
                Previous
              </Button>
            )}

            {/* {currentStep === 6 ? (
              <div className="flex gap-3 ml-auto">
                <Button>Publish</Button>
              </div>
            ) : (
              currentStep != 1 && (
                <Button
                  className="bg-primary-main hover:bg-blue-700"
                  onClick={handleNext}
                  variant="default"
                >
                  Next
                </Button>
              )
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
