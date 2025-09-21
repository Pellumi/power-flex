import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Zap, Battery, Sun, Clock, ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"
import { PackageCardSkeleton, PackageDetailSkeleton } from "@/components/package-skeleton"
import type { PackageDto } from "@/utils/types"
import { getPackages } from "@/utils/services"

type SolarPackage = PackageDto

function formatPrice(price: number): string {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0,
    }).format(price)
}

const NewProductPlans = () => {
    const [selectedPackage, setSelectedPackage] = useState<SolarPackage | null>(null)
    const [packages, setPackages] = useState<SolarPackage[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                setIsLoading(true)
                setError(null)
                console.log("Starting to fetch packages...")
                const data = await getPackages()
                console.log("Packages fetched successfully:", data.length, "packages")
                setPackages(data)
            } catch (err) {
                console.log("Error fetching packages:", err)
                setError("Failed to load packages. Please try again.")
            } finally {
                setIsLoading(false)
                console.log("Loading state set to false")
            }
        }

        fetchPackages()
    }, [])
    return (
        <div className="bg-white py-20 md:py-28" id="products">
            <div className="mx-auto grid w-full grid-cols-12 gap-4 px-4 lg:gap-8 lg:px-10 xl:w-[1280px] xl:px-2">
                <div className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-12 md:col-start-3 md:col-end-11 lg:pb-10">
                    <div className="mb-12 px-4 text-center sm:px-8 lg:px-0">
                        <h1 className="break-normal pb-1 leading-24 mb-5 text-[30px] font-extralight sm:text-[3rem] md:text-[3.25rem] lg:text-[5rem] text-jump-gradient">
                            Tailored Energy Solutions for Every Need!
                        </h1>
                        <div className="mx-10 mt-10">
                            <p className="text-[1rem] leading-tight md:text-[1.25rem]">
                                Explore our packages{" "}
                                <span className="font-semibold">designed to meet</span> your
                                energy requirements and help you{" "}
                                <span className="font-semibold">save</span> on costs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">

                {error && (
                    <Card className="mb-8 border-destructive">
                        <CardContent className="pt-6">
                            <p className="text-destructive text-center">{error}</p>
                            <Button onClick={() => window.location.reload()} className="w-full mt-4" variant="outline">
                                Retry
                            </Button>
                        </CardContent>
                    </Card>
                )}

                {/* Package Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {isLoading
                        ? Array.from({ length: 4 }).map((_, index) => <PackageCardSkeleton key={index} />)
                        : packages.map((pkg, index) => (
                            <Card key={pkg.id} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                {index === 1 && (
                                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">Popular</Badge>
                                )}

                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl font-bold text-card-foreground">{pkg.name}</CardTitle>
                                    <CardDescription className="text-sm text-muted-foreground">{pkg.description}</CardDescription>
                                    <div className="pt-2">
                                        <span className="text-3xl font-bold text-primary">{formatPrice(pkg.totalCost)}</span>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    {/* Key Specs */}
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Zap className="h-4 w-4 text-primary" />
                                            <span>{pkg.specifications.inverterSize}KW</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Sun className="h-4 w-4 text-primary" />
                                            <span>{pkg.specifications.panelQuantity} Panels</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Battery className="h-4 w-4 text-primary" />
                                            <span>{pkg.specifications.batteryCapacity}kWh</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-primary" />
                                            <span>{pkg.estimatedRuntime}h Runtime</span>
                                        </div>
                                    </div>

                                    <Separator />

                                    {/* Equipment List */}
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2 text-card-foreground">Equipment Included:</h4>
                                        <ul className="space-y-1 text-xs text-muted-foreground">
                                            {pkg.equipmentList.map((equipment, idx) => (
                                                <li key={idx} className="flex justify-between">
                                                    <span>
                                                        {equipment.quantity}x {equipment.name}
                                                    </span>
                                                    {/* <span>{formatPrice(equipment.totalPrice)}</span> */}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Separator />

                                    {/* Recommended Appliances */}
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2 text-card-foreground">Can Power:</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {pkg.recommendedAppliances.slice(0, 3).map((appliance, idx) => (
                                                <Badge key={idx} variant="secondary" className="text-xs">
                                                    {appliance}
                                                </Badge>
                                            ))}
                                            {pkg.recommendedAppliances.length > 3 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{pkg.recommendedAppliances.length - 3} more
                                                </Badge>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pt-2 space-y-2">
                                        <Button
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                                            onClick={() => setSelectedPackage(pkg)}
                                        >
                                            View Details
                                        </Button>
                                        <Button asLink to="/quotation/details" variant="outline" className="w-full bg-transparent">
                                            Get Started
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                </div>

                {isLoading ? (
                    <PackageDetailSkeleton />
                ) : selectedPackage ? (
                    <Card className="overflow-hidden">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setSelectedPackage(null)}
                                    className="flex items-center gap-2"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Back to Packages
                                </Button>
                                <div>
                                    <CardTitle className="text-2xl font-bold">{selectedPackage.name}</CardTitle>
                                    <CardDescription className="text-base">{selectedPackage.description}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            {/* Pricing Breakdown */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 text-card-foreground">Pricing Breakdown</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Equipment Cost:</span>
                                            <span className="font-medium">{formatPrice(selectedPackage.equipmentCost)}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Accessories & Installation:</span>
                                            <span className="font-medium">{formatPrice(selectedPackage.accessoriesAndInstallation)}</span>
                                        </div>
                                        <Separator />
                                        <div className="flex justify-between items-center text-lg">
                                            <span className="font-semibold">Total Cost:</span>
                                            <span className="font-bold text-primary">{formatPrice(selectedPackage.totalCost)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Technical Specifications */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 text-card-foreground">Technical Specifications</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Inverter Size:</span>
                                            <span className="font-medium">{selectedPackage.specifications.inverterSize}KW</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Solar Panels:</span>
                                            <span className="font-medium">
                                                {selectedPackage.specifications.panelQuantity}x {selectedPackage.specifications.panelType}W
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Battery Capacity:</span>
                                            <span className="font-medium">{selectedPackage.specifications.batteryCapacity}kWh</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Battery Type:</span>
                                            <span className="font-medium">
                                                {selectedPackage.specifications.batteryType.replace(/_/g, " ")}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Estimated Runtime:</span>
                                            <span className="font-medium">{selectedPackage.estimatedRuntime} hours</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Equipment List */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4 text-card-foreground">Complete Equipment List</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-muted">
                                            <tr>
                                                <th className="text-left p-3 font-semibold">Equipment</th>
                                                <th className="text-center p-3 font-semibold">Quantity</th>
                                                <th className="text-right p-3 font-semibold">Unit Price</th>
                                                <th className="text-right p-3 font-semibold">Total Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedPackage.equipmentList.map((equipment, idx) => (
                                                <tr key={idx} className="border-b border-border">
                                                    <td className="p-3 font-medium">{equipment.name}</td>
                                                    <td className="text-center p-3">{equipment.quantity}</td>
                                                    <td className="text-right p-3">{formatPrice(equipment.unitPrice)}</td>
                                                    <td className="text-right p-3 font-semibold">{formatPrice(equipment.totalPrice)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Recommended Appliances */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4 text-card-foreground">Recommended Appliances</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                    {selectedPackage.recommendedAppliances.map((appliance, idx) => (
                                        <Badge key={idx} variant="secondary" className="justify-center py-2">
                                            {appliance}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-4">
                                <Button asLink to="/quotation/details" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">Get Quote</Button>
                                <a href="#contact-us" data-discover="true" className="flex-1">
                                    <span className="h-10 rounded-md px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring w-full focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-black bg-transparent shadow-xs text-black hover:bg-accent hover:text-black dark:bg-input/30 dark:border-input dark:hover:bg-input/50 has-[&gt;svg]:px-4">
                                        Contact Sales
                                    </span>
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <Card className="text-center py-12">
                        <CardContent>
                            <h3 className="text-xl font-semibold mb-2">Select a Package</h3>
                            <p className="text-muted-foreground">
                                Click "View Details" on any package above to see complete specifications and pricing breakdown.
                            </p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default NewProductPlans