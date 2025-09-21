export interface ContactInfoDto {
  name: string;
  email: string;
  phone: string;
}

export interface ApplianceDto {
  applianceName: string;
  wattage: string;
  quantity: number;
}

export interface RecommendedApplianceDto {
  name: string;
  quantity: number;
}

export interface MonthlySpendInfoDto {
  monthlySpend: number;
  bandGroup: "Band A" | "Band B" | "Band C" | string;
}

export interface EnergyCoverageDto {
  loadCoverage: number;
  batteryAutonomyHours: number;
  batteryAutonomyDays: number;
  includeApplianceData: boolean;
  appliances?: ApplianceDto[];
}

export interface CustomQuoteRequestDto {
  contactInfo: ContactInfoDto;
  monthlySpendInfo: MonthlySpendInfoDto;
  energyCoverage: EnergyCoverageDto;
  callbackUrl?: string;
}

export type PackageQuoteRequestDto = CustomQuoteRequestDto;

export interface VerifyPurchaseDto {
  reference: string;
}

export interface ContactFormDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
}

export interface SystemConfigurationDto {
  inverterSize: number;
  inverterQuantity: number;
  panelType: number;
  panelQuantity: number;
  batteryType: string;
  batteryQuantity: number;
  totalBatteryCapacity: number;
}

export interface CostBreakdownDto {
  equipmentCost: number;
  accessoriesAndInstallation: number;
  subtotal: number;
  vat: number;
  totalCost: number;
}

// export interface PaymentInfoDto {
//   payLink: string;
//   payReference: string;
//   payAccessCode: string;
//   powerflexRef: string;
// }

interface PaymentData {
  authorization_url: string;
  access_code: string;
  reference: string;
}

interface PaymentInfoDto {
  status: boolean;
  message: string;
  data: PaymentData;
  powerflexRef: string;
}

export interface EquipmentItemDto {
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

// export interface PackageInfoDto {
//   id: string;
//   name: string;
//   description: string;
//   recommendedAppliances: string[];
//   estimatedRuntime: number;
//   equipmentList: EquipmentItemDto[];
// }

interface PackageInfoDto {
  customCalculationId: string;
  appliances: ApplianceDto[];
  monthlySpendInfo: MonthlySpendInfoDto;
  energyCoverage: EnergyCoverageDto;
}


export interface PowerflexResponseDto {
  monthlySpend: number;
  bandGroup: string;
  loadCoverage: number;
  batteryAutonomyHours: number;
  numberOfPanels: number;
  batterySize: number;
  peakLoad: number;
  dailyPowerNeed: number;
  systemConfiguration: SystemConfigurationDto;
  costBreakdown: CostBreakdownDto;
  paymentInfo: PaymentInfoDto;
  packageInfo?: PackageInfoDto;
  recommendedAppliances: RecommendedApplianceDto[];
}

export interface PackageDto {
  id: string
  name: string
  description: string
  price: number
  equipmentList: {
    name: string
    quantity: number
    unitPrice: number
    totalPrice: number
  }[]
  equipmentCost: number
  accessoriesAndInstallation: number
  totalCost: number
  recommendedAppliances: string[]
  estimatedRuntime: number
  specifications: {
    inverterSize: number
    panelQuantity: number
    batteryCapacity: number
    panelType: number
    batteryType: string
    batteryQuantity: number
  }
}

export interface DropoffAnalyticsResponse {
  page: number;
  limit: number;
  total: number;
  data: Array<{
    id: string;
    userEmail: string;
    dropoffStage: string;
    timestamp: string;
  }>;
}

export interface ApplianceComponent {
  id: string
  name: string
  wattage: number
  quantity: number
  selected: boolean
}

export interface ApplianceCategory {
  id: string
  name: string
  appliances: ApplianceComponent[]
  expanded: boolean
}