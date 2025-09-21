import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import type {
  CustomQuoteRequestDto,
  PowerflexResponseDto,
} from "@/utils/types";
import { calculateCustomQuote } from "@/utils/services";
import { Spinner } from "../ui/loader";

const StepThree = ({
  formData,
  setFormData,
  response,
  updateResponse,
  nextStep,
}: {
  formData: CustomQuoteRequestDto;
  setFormData: (formData: CustomQuoteRequestDto) => void;
  response?: PowerflexResponseDto;
  updateResponse: (data: PowerflexResponseDto) => void;
  nextStep: () => void;
}) => {
  const [loadCoverage, setLoadCoverage] = useState([0]);
  const [hours, setHours] = useState([0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (formData) {
      setLoadCoverage([formData.energyCoverage.loadCoverage]);
      setHours([formData.energyCoverage.batteryAutonomyHours]);
    }
  }, [formData]);

  const handleLoadCoverageChange = async (value: number[]) => {
    setLoading(true)
    setLoadCoverage(value);
    const updatedFormData = {
      ...formData,
      energyCoverage: {
        ...formData.energyCoverage,
        loadCoverage: value[0],
      },
    };
    setFormData(updatedFormData);

    try {
      const result = await calculateCustomQuote(formData);
      updateResponse(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleHoursChange = async (value: number[]) => {
    setLoading(true)
    setHours(value);
    const updatedFormData = {
      ...formData,
      energyCoverage: {
        ...formData.energyCoverage,
        batteryAutonomyHours: value[0],
      },
    };
    setFormData(updatedFormData);

    try {
      const result = await calculateCustomQuote(formData);
      updateResponse(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form className="max-w-[580px] w-full mx-auto py-6 pb-0 space-y-6">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-gray-800">
                Solar Load Coverage <span className="text-sm">(%)</span>
              </h2>
              <div className="px-2">
                <div className="mb-2 flex justify-between text-sm text-gray-500">
                  <span></span>
                  <span className="font-medium text-blue-600"></span>
                  <span className="font-medium text-blue-600">
                    {loadCoverage[0]}%
                  </span>
                  <span className="font-medium text-blue-600"></span>
                  <span></span>
                </div>
                <Slider
                  value={loadCoverage}
                  onValueChange={handleLoadCoverageChange}
                  max={100}
                  min={0}
                  step={1}
                  className="w-full"
                />
                <div className="mt-2 flex justify-between text-sm text-gray-500">
                  <span>0%</span>
                  <span className="font-medium text-blue-600">25%</span>
                  <span className="font-medium text-blue-600"></span>
                  <span className="font-medium text-blue-600">71%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-gray-800">
                Battery Autonomy <span className="text-sm">(hours)</span>
              </h2>
              <div className="px-2">
                <div className="mb-2 flex justify-between text-sm text-gray-500">
                  <span></span>
                  <span className="font-medium text-blue-600"></span>
                  <span className="font-medium text-blue-600">{hours[0]}h</span>
                  <span className="font-medium text-blue-600"></span>
                  <span></span>
                </div>
                <Slider
                  value={hours}
                  onValueChange={handleHoursChange}
                  max={12}
                  min={0}
                  step={1}
                  className="w-full"
                />
                <div className="mt-2 flex justify-between text-sm text-gray-500">
                  <span>0h</span>
                  <span className="font-medium text-blue-600">3h</span>
                  <span className="font-medium text-blue-600"></span>
                  <span className="font-medium text-blue-600">9h</span>
                  <span>12h</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-gray-800">
              Estimation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Inverter Size</span>
              <p className="font-medium text-gray-800 relative">{!loading ? `${response?.peakLoad} KW` : <Spinner />}</p>
            </div>

            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Energy Need</span>
              <p className="font-medium text-gray-800 relative">{!loading ? `${response?.dailyPowerNeed} KWH/day` : <Spinner />}</p>
            </div>

            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Load Coverage</span>
              <span className="font-medium text-gray-800 relative">{loadCoverage}%</span>
            </div>

            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Battery Autonomy</span>
              <span className="font-medium text-gray-800 relative">{hours[0]}hrs</span>
            </div>

            <div className="flex justify-between items-center py-2 pt-4 border-t border-gray-100">
              <span className="text-gray-800 relative font-medium">Total Cost</span>
              <p className="font-semibold text-gray-800 relative">{!loading ? `₦${response?.costBreakdown.subtotal.toLocaleString()}.00` : <Spinner />}</p>
            </div>
          </CardContent>
        </Card>
        <Button onClick={nextStep} className="w-full py-3 text-base font-medium">Next</Button>
      </form>
    </div>
  );
};

export default StepThree;
