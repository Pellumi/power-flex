import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import type { PowerflexResponseDto } from "@/utils/types"

const StepFive = ({
  response
}: {
  // formData: CustomQuoteRequestDto;
  // setFormData: (formData: CustomQuoteRequestDto) => void;
  response?: PowerflexResponseDto;
  // updateResponse: (data: PowerflexResponseDto) => void;
  // nextStep: () => void;
}) => {
  const [customerType, setCustomerType] = useState<"business" | "individual">("individual")

  return (
    <div className="w-full">
      <div className="max-w-[580px] w-full mx-auto py-6 pb-0 space-y-6">
        <div className="max-w-4xl mx-auto px-4">
          {/* Overview Section */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-center mb-6">Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Monthly Spend</span>
                  <span className="font-semibold">₦{response?.costBreakdown.subtotal.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Coverage Percentage</span>
                  <span className="font-semibold">{response?.loadCoverage}%</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Battery Autonomy</span>
                  <span className="font-semibold">{response?.batteryAutonomyHours}hrs</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Inverter Size</span>
                  <span className="font-semibold">{response?.peakLoad}KW</span>
                </div>
                <div className="flex justify-between py-2 md:col-span-2">
                  <span className="text-gray-600">Energy Need</span>
                  <span className="font-semibold">{response?.dailyPowerNeed}kWh/day</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your System Section */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Your System</h2>

              {/* Solar Panels */}
              <Collapsible className="mb-4">
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <span className="text-blue-500 font-medium">Solar panels</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">2 Units</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <Card>
                    <CardContent className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-gray-600">Model</span>
                        </div>
                        <div>
                          <span className="text-blue-500 font-medium">Solar Panel 300W</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Warranty (Years)</span>
                        </div>
                        <div>
                          <span className="text-blue-500 font-medium">25 Years</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>

              {/* Inverter */}
              <Collapsible className="mb-4">
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <span className="text-blue-500 font-medium">Inverter</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">1 Unit</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <Card>
                    <CardContent className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-gray-600">Model</span>
                        </div>
                        <div>
                          <span className="text-blue-500 font-medium">Inverter 1.8kVA 12V</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Warranty (Years)</span>
                        </div>
                        <div>
                          <span className="text-blue-500 font-medium">3 Years</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>

              {/* Batteries */}
              <Collapsible className="mb-4">
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <span className="text-blue-500 font-medium">Batteries</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">1 Unit</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <Card>
                    <CardContent className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-gray-600">Model</span>
                        </div>
                        <div>
                          <span className="text-blue-500 font-medium">Battery GEL 200AH 12V</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Warranty (Years)</span>
                        </div>
                        <div>
                          <span className="text-blue-500 font-medium">3 Years</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>

              {/* Recommended Appliances */}
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <span className="text-blue-500 font-medium">Recommended Appliances</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">{response?.recommendedAppliances.length} Items</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <Card>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4 font-medium text-gray-700 border-b pb-2">
                          <span>Appliance</span>
                          <span>Quantity</span>
                        </div>
                        {response?.recommendedAppliances.map((appliance) => (
                          <div className="grid grid-cols-2 gap-4">
                            <span>{appliance.name}</span>
                            <span>{appliance.quantity}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Pricing and Payment Section */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <p className="text-sm text-gray-500 mb-6 text-center">
                Cabling and installation costs are approximate estimates and may vary based on actual installation
              </p>

              <Tabs defaultValue="outright" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="outright">Outright Purchase</TabsTrigger>
                  <TabsTrigger value="financing">Financing</TabsTrigger>
                </TabsList>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Equipment Cost with VAT:</span>
                    <span className="font-semibold">₦{response?.costBreakdown.equipmentCost.toLocaleString()}.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Installation & Accessories:</span>
                    <span className="font-semibold">₦{response?.costBreakdown.accessoriesAndInstallation.toLocaleString()}.00</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t pt-4">
                    <span>Total:</span>
                    <span>₦{response?.costBreakdown.subtotal.toLocaleString()}.00</span>
                  </div>
                </div>

                <TabsContent value="outright">
                  <Button className="w-full">Proceed to Payment</Button>
                </TabsContent>

                <TabsContent value="financing" className="space-y-6">
                  <div>
                    <p className="text-gray-700 mb-4">Are you a business or individual?</p>
                    <div className="flex space-x-6">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="business"
                          checked={customerType === "business"}
                          onCheckedChange={(checked) => {
                            if (checked) setCustomerType("business")
                          }}
                        />
                        <label htmlFor="business" className="text-gray-700">
                          Business
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="individual"
                          checked={customerType === "individual"}
                          onCheckedChange={(checked) => {
                            if (checked) setCustomerType("individual")
                          }}
                        />
                        <label htmlFor="individual" className="text-gray-700">
                          Individual
                        </label>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">
                    Start Your Loan Application
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StepFive;
