/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { calculateCustomQuote } from "@/utils/services";
import type {
  CustomQuoteRequestDto,
  PowerflexResponseDto,
} from "@/utils/types";

const StepTwo = ({
  formData,
  setFormData,
  updateResponse,
  nextStep,
}: {
  formData: CustomQuoteRequestDto;
  setFormData: (formData: CustomQuoteRequestDto) => void;
  updateResponse: (data: PowerflexResponseDto) => void;
  nextStep: () => void;
}) => {
  const [newMonthlySpend, setMonthlySpend] = useState<number | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (formData) {
      setMonthlySpend(formData.monthlySpendInfo.monthlySpend || undefined);
    }
  }, [formData]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!newMonthlySpend) {
      return;
    }

    setLoading(true);

    setFormData({
      contactInfo: {
        name: formData.contactInfo.name,
        email: formData.contactInfo.email,
        phone: formData.contactInfo.phone,
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

    try {
      const result = await calculateCustomQuote(formData);
      updateResponse(result);
      nextStep();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="max-w-[580px] w-full mx-auto py-6 space-y-6"
      >
        <div className="">
          <Label>
            Monthly Salary <span className="text-red-500">*</span>
          </Label>
          <Input
            type="number"
            value={newMonthlySpend}
            onChange={(e) => setMonthlySpend(parseInt(e.target.value))}
            placeholder="Enter your monthly spend"
            required
            min={1}
          />
        </div>
        {/* @ts-ignore */}
        <Button type="submit" loading={loading} className="w-full">
          Select coverage/autonomy
        </Button>
      </form>
    </div>
  );
};

export default StepTwo;
