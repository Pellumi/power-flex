/* eslint-disable @typescript-eslint/ban-ts-comment */
import { INITIAL_CATEGORY_DATA } from "@/utils/constants";
import type {
  ApplianceCategory,
  ApplianceComponent,
  ApplianceDto,
  CustomQuoteRequestDto,
  PowerflexResponseDto,
} from "@/utils/types";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Minus, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { calculateCustomQuote } from "@/utils/services";
import { Spinner } from "../ui/loader";

const StepFour = ({
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
  const [includeAppliances, setIncludeAppliances] = useState(
    formData.energyCoverage?.includeApplianceData || false
  );
  const [autonomyHours, setAutonomyHours] = useState([
    formData.energyCoverage?.batteryAutonomyHours || 0
  ]);
  const [categories, setCategories] = useState<ApplianceCategory[]>(
    INITIAL_CATEGORY_DATA
  );
  const [newAppliances, setNewAppliances] = useState<ApplianceDto[]>(
    formData.energyCoverage?.appliances || []
  );
  const [loading, setLoading] = useState(false);

  // Update formData whenever autonomyHours changes
  useEffect(() => {
    setFormData({
      ...formData,
      energyCoverage: {
        ...formData.energyCoverage,
        batteryAutonomyHours: autonomyHours[0],
      }
    });
    handleRequest()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autonomyHours]);

  // Update formData whenever newAppliances changes
  useEffect(() => {
    setFormData({
      ...formData,
      energyCoverage: {
        ...formData.energyCoverage,
        appliances: newAppliances,
        includeApplianceData: includeAppliances,
      }
    });
    handleRequest()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newAppliances, includeAppliances]);

  useEffect(() => {
    if (!includeAppliances) {
      setNewAppliances([]);
      setCategories(INITIAL_CATEGORY_DATA);
      return;
    }

    const updatedNewAppliances: ApplianceDto[] = [];

    categories.forEach((category) => {
      category.appliances.forEach((appliance) => {
        if (appliance.selected && appliance.quantity > 0) {
          updatedNewAppliances.push({
            applianceName: appliance.name,
            wattage: appliance.wattage.toString(),
            quantity: appliance.quantity,
          });
        }
      });
    });

    setNewAppliances(updatedNewAppliances);
  }, [categories, includeAppliances]);

  const toggleCategory = (categoryId: string) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId ? { ...cat, expanded: !cat.expanded } : cat
      )
    );
  };

  const updateAppliance = (
    categoryId: string,
    applianceId: string,
    updates: Partial<ApplianceComponent>
  ) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? {
            ...cat,
            appliances: cat.appliances.map((app) =>
              app.id === applianceId ? { ...app, ...updates } : app
            ),
          }
          : cat
      )
    );
  };

  const incrementQuantity = (categoryId: string, applianceId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    const appliance = category?.appliances.find(
      (app) => app.id === applianceId
    );
    if (appliance) {
      updateAppliance(categoryId, applianceId, {
        quantity: appliance.quantity + 1,
        selected: true,
      });
    }
  };

  const decrementQuantity = (categoryId: string, applianceId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    const appliance = category?.appliances.find(
      (app) => app.id === applianceId
    );
    if (appliance && appliance.quantity > 0) {
      const newQuantity = appliance.quantity - 1;
      updateAppliance(categoryId, applianceId, {
        quantity: newQuantity,
        selected: newQuantity > 0,
      });
    }
  };

  const toggleAppliance = (
    categoryId: string,
    applianceId: string,
    checked: boolean
  ) => {
    updateAppliance(categoryId, applianceId, {
      selected: checked,
      quantity: checked
        ? Math.max(
          1,
          categories
            .find((cat) => cat.id === categoryId)
            ?.appliances.find((app) => app.id === applianceId)?.quantity || 0
        )
        : 0,
    });
  };

  const handleRequest = async () => {
    setLoading(true)
    try {
      const result = await calculateCustomQuote(formData);
      updateResponse(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <div className="max-w-[580px] w-full mx-auto py-6 space-y-6">
        {/* Include Appliances Toggle */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
          <span className="text-gray-700">Include Appliances? (Optional)</span>
          <Switch
            checked={includeAppliances}
            onCheckedChange={setIncludeAppliances}
          />
        </div>

        {/* Appliance Categories */}
        {includeAppliances && (
          <>
            {categories.map((category) => (
              <Card key={category.id} className="shadow-sm">
                <CardHeader
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleCategory(category.id)}
                >
                  <CardTitle className="flex items-center justify-between text-blue-600">
                    {category.name}
                    {category.expanded ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </CardTitle>
                </CardHeader>

                {category.expanded && (
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Table Header */}
                      <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600 border-b pb-2">
                        <div className="col-span-5">Appliance</div>
                        <div className="col-span-3 text-center">Wattage</div>
                        <div className="col-span-4 text-center">Quantity</div>
                      </div>

                      {/* Appliances */}
                      {category.appliances.map((appliance) => (
                        <div
                          key={appliance.id}
                          className="grid grid-cols-12 gap-4 items-center py-2"
                        >
                          <div className="col-span-5 flex items-center space-x-3">
                            <Checkbox
                              checked={appliance.selected}
                              onCheckedChange={(checked) =>
                                toggleAppliance(
                                  category.id,
                                  appliance.id,
                                  checked as boolean
                                )
                              }
                            />
                            <span className="text-sm text-blue-700">
                              {appliance.name}
                            </span>
                          </div>

                          <div className="col-span-3 text-center text-sm">
                            {appliance.wattage} W
                          </div>

                          <div className="col-span-4 flex items-center justify-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 p-0 bg-transparent"
                              onClick={() =>
                                decrementQuantity(category.id, appliance.id)
                              } //@ts-ignore
                              disabled={appliance.quantity === 0}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>

                            <input
                              type="number"
                              value={appliance.quantity}
                              onChange={(e) => {
                                const value = Math.max(
                                  0,
                                  Number.parseInt(e.target.value) || 0
                                );
                                updateAppliance(category.id, appliance.id, {
                                  quantity: value,
                                  selected: value > 0,
                                });
                              }}
                              className="w-12 h-8 text-center border rounded text-sm"
                              min="0"
                            />

                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 p-0 bg-transparent"
                              onClick={() =>
                                incrementQuantity(category.id, appliance.id)
                              }
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}

            {/* Autonomy Hours Slider */}
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-700">
                    Slide Autonomy Hours
                  </h3>
                  <div className="px-2">
                    <Slider
                      value={autonomyHours}
                      onValueChange={setAutonomyHours}
                      max={12}
                      min={0}
                      step={1}
                      disabled={newAppliances.length == 0}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0hrs</span>
                      <span className="font-medium">{autonomyHours[0]}hrs</span>
                      <span>24hrs</span>
                    </div>
                  </div>
                  {newAppliances.length == 0 && <p className="text-xs text-gray-400">You need to select at least one appliance to modify this.</p>}
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Estimation Card */}
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
              <span className="text-gray-600">Battery Autonomy</span>
              <span className="font-medium text-gray-800 relative">{autonomyHours[0]}hrs</span>
            </div>

            <div className="flex justify-between items-center py-2 pt-4 border-t border-gray-100">
              <span className="text-gray-800 relative font-medium">Total Cost</span>
              <p className="font-semibold text-gray-800 relative">{!loading ? `₦${response?.costBreakdown.subtotal.toLocaleString()}.00` : <Spinner />}</p>
            </div>
          </CardContent>
        </Card>

        <Button
          onClick={() => {
            console.log(response)
            nextStep()
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepFour;