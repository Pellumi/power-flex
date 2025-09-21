/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { CustomBlurBgDialog } from "../ui/dialog";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import type { CustomQuoteRequestDto } from "@/utils/types";

const StepOne = ({
  formData,
  setFormData,
  nextStep,
}: {
  formData: CustomQuoteRequestDto;
  setFormData: (formData: CustomQuoteRequestDto) => void;
  nextStep: () => void;
}) => {
  const [newName, setName] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newPhone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (formData) {
      setName(formData.contactInfo.name || "");
      setEmail(formData.contactInfo.email || "");
      setPhone(formData.contactInfo.phone || "");
    }
  }, [formData]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormData({
      contactInfo: {
        name: newName,
        email: newEmail,
        phone: newPhone,
      },
      monthlySpendInfo: {
        monthlySpend: formData.monthlySpendInfo.monthlySpend,
        bandGroup: formData.monthlySpendInfo.bandGroup,
      },
      energyCoverage: {
        appliances: formData.energyCoverage.appliances,
        loadCoverage: formData.energyCoverage.loadCoverage,
        batteryAutonomyHours: formData.energyCoverage.batteryAutonomyHours,
        batteryAutonomyDays: formData.energyCoverage.batteryAutonomyDays,
        includeApplianceData: formData.energyCoverage.includeApplianceData,
      },
      callbackUrl: formData.callbackUrl,
    });
    nextStep();
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="max-w-[580px] w-full mx-auto py-6 space-y-6"
      >
        <div className="">
          <Label>
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            value={newName}
            onChange={(e) => setName(e.target.value)}
            placeholder="First name Last name"
            required
          />
        </div>
        <div className="">
          <Label>
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            value={newEmail}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email Address"
            required
          />
        </div>
        <div className="">
          <Label>
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input
            value={newPhone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your Phone Number"
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="Terms"
            checked={accepted}
            onCheckedChange={(value: boolean) => setAccepted(!!value)}
          />
          <Label htmlFor="Terms" className="text-sm font-medium leading-none">
            I agree to the{" "}
          </Label>
          <span
            onClick={(e) => {
              e.stopPropagation();
              setShow(true);
            }}
            className="underline cursor-pointer"
          >
            Terms and Conditions
          </span>
        </div>
        {/* @ts-ignore */}
        <Button type="submit" className="w-full" disabled={!accepted}>
          Continue to Quote
        </Button>
      </form>
      <CustomBlurBgDialog open={show} onOpenChange={setShow} maxWidth="800px">
        <CardHeader className="text-left">
          <CardTitle className="text-2xl">
            Powerflex Energy Calculator - Terms and Conditions
          </CardTitle>
          <p className="">
            Welcome to Powerflex! Please review the terms before proceeding:
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="space-y-2 opacity-70 text-[16.5px]">
            <li>
              <strong>Estimate Purpose:</strong> The calculator provides a{" "}
              <strong>final estimate</strong> of energy system requirements and
              costs based on your provided data.
            </li>
            <li>
              <strong>Data Accuracy:</strong> Estimates rely on the{" "}
              <strong>accuracy of your provided data</strong> (usage, location,
              preferences).
            </li>
            <li>
              <strong>Factors Affecting Implementation:</strong> Location,
              energy patterns, cabling, installation complexity, and
              site-specific findings may affect system setup.
            </li>
            <li>
              <strong>Estimate Validity:</strong> The estimate is{" "}
              <strong>final</strong>, but adjustments may arise after a detailed{" "}
              <strong>site assessment</strong>.
            </li>
            <li>
              <strong>Financing:</strong> Approval depends on{" "}
              <strong>eligibility checks</strong> and may require additional
              documentation.
            </li>
            <li>
              <strong>Privacy:</strong> Your data is securely processed per our{" "}
              <strong>Privacy Policy</strong>
            </li>
            <li>
              <strong>User Agreement:</strong> By proceeding, you confirm your
              data's accuracy, understand adjustment may occur after.
            </li>
          </ul>
          <div className="flex w-full gap-4 justify-end">
            <Button
              variant={"outline"}
              className="w-[100px]"
              onClick={() => setShow(false)}
            >
              Cancel
            </Button>
            <Button
              variant={"default"}
              className="w-[150px]"
              onClick={() => {
                setAccepted(true);
                setShow(false);
              }}
            >
              Agree
            </Button>
          </div>
        </CardContent>
      </CustomBlurBgDialog>
    </div>
  );
};

export default StepOne;
