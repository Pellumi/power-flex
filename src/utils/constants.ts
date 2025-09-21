import type { ApplianceCategory } from "./types"

export const SAMPLE_STEP_TWO_RESPONSE = {
    "monthlySpend": 5000,
    "bandGroup": "Band A",
    "loadCoverage": 16,
    "batteryAutonomyHours": 6,
    "numberOfPanels": 2,
    "batterySize": 2.4,
    "systemConfiguration": {
        "inverterSize": 1.8,
        "inverterQuantity": 1,
        "panelType": 300,
        "panelQuantity": 2,
        "batteryType": "GEL_200AH_12V",
        "batteryQuantity": 1,
        "totalBatteryCapacity": 2.4
    },
    "costBreakdown": {
        "equipmentCost": 850800,
        "accessoriesAndInstallation": 255240,
        "subtotal": 1109040,
        "vat": 82953,
        "totalCost": 1188993
    },
    "paymentInfo": {
        "status": true,
        "message": "Authorization URL created",
        "data": {
            "authorization_url": "https://checkout.paystack.com/rzksldjh8y9e91e",
            "access_code": "rzksldjh8y9e91e",
            "reference": "lhznhbrodm"
        },
        "powerflexRef": "PF-1758395574899-221"
    },
    "packageInfo": {
        "customCalculationId": "cmfsnbp0m0bduo41r8w8z019x",
        "appliances": [],
        "monthlySpendInfo": {
            "monthlySpend": 5000,
            "bandGroup": "Band A"
        },
        "energyCoverage": {
            "loadCoverage": 16,
            "batteryAutonomyHours": 6,
            "batteryAutonomyDays": 0,
            "includeApplianceData": false,
            "appliances": []
        }
    },
    "recommendedAppliances": [
        {
            "name": "LED Bulbs",
            "quantity": 5
        },
        {
            "name": "LED Bulbs",
            "quantity": 5
        },
        {
            "name": "Fan",
            "quantity": 1
        },
        {
            "name": "TV",
            "quantity": 1
        },
        {
            "name": "Laptop",
            "quantity": 1
        },
        {
            "name": "Decoder/Home Theatre",
            "quantity": 1
        }
    ],
    "dailyPowerNeed": 0.768,
    "peakLoad": 0.2
}

export const SAMPLE_STEP_THREE_RESPONSE = {
    "monthlySpend": 3000,
    "bandGroup": "Band A",
    "loadCoverage": 41,
    "batteryAutonomyHours": 6,
    "numberOfPanels": 2,
    "batterySize": 2.4,
    "systemConfiguration": {
        "inverterSize": 1.8,
        "inverterQuantity": 1,
        "panelType": 300,
        "panelQuantity": 2,
        "batteryType": "GEL_200AH_12V",
        "batteryQuantity": 1,
        "totalBatteryCapacity": 2.4
    },
    "costBreakdown": {
        "equipmentCost": 850800,
        "accessoriesAndInstallation": 255240,
        "subtotal": 1106040,
        "vat": 82953,
        "totalCost": 1188993
    },
    "paymentInfo": {
        "status": true,
        "message": "Authorization URL created",
        "data": {
            "authorization_url": "https://checkout.paystack.com/xf4us0j7x4kh51z",
            "access_code": "xf4us0j7x4kh51z",
            "reference": "zmtoslibfb"
        },
        "powerflexRef": "PF-1758445876718-163"
    },
    "packageInfo": {
        "customCalculationId": "cmfth9u5o0btxo41rcv5lx54v",
        "appliances": [],
        "monthlySpendInfo": {
            "monthlySpend": 3000,
            "bandGroup": "Band A"
        },
        "energyCoverage": {
            "loadCoverage": 41,
            "batteryAutonomyHours": 6,
            "batteryAutonomyDays": 0,
            "includeApplianceData": false,
            "appliances": []
        }
    },
    "recommendedAppliances": [
        {
            "name": "LED Bulbs",
            "quantity": 5
        },
        {
            "name": "Fan",
            "quantity": 1
        },
        {
            "name": "TV",
            "quantity": 1
        },
        {
            "name": "Laptop",
            "quantity": 1
        },
        {
            "name": "Decoder/Home Theatre",
            "quantity": 1
        }
    ],
    "dailyPowerNeed": 1.1808,
    "peakLoad": 0.3075
}

export const INITIAL_CATEGORY_DATA: ApplianceCategory[] = [{
    id: "essential",
    name: "Essential Appliances",
    expanded: true,
    appliances: [
        {
            id: "led-bulb",
            name: "LED Bulb",
            wattage: 15,
            quantity: 0,
            selected: false,
        },
        {
            id: "standing-fan",
            name: "Standing Fan",
            wattage: 90,
            quantity: 0,
            selected: false,
        },
        {
            id: "ceiling-fan",
            name: "Ceiling Fan",
            wattage: 80,
            quantity: 0,
            selected: false,
        },
        {
            id: "table-fan",
            name: "Table Fan",
            wattage: 65,
            quantity: 0,
            selected: false,
        },
        {
            id: "television",
            name: "Television (LED)",
            wattage: 120,
            quantity: 0,
            selected: false,
        },
        {
            id: "dstv-decoder",
            name: "DSTV/Decoder",
            wattage: 25,
            quantity: 0,
            selected: false,
        },
        {
            id: "home-theatre",
            name: "Home Theatre System",
            wattage: 180,
            quantity: 0,
            selected: false,
        },
        {
            id: "phone-charger",
            name: "Phone Charger",
            wattage: 15,
            quantity: 0,
            selected: false,
        },
    ],
},
{
    id: "cooling",
    name: "Cooling Appliances",
    expanded: false,
    appliances: [
        {
            id: "standing-ac-1.5",
            name: "Standing AC(1.5 HP)",
            wattage: 1800,
            quantity: 0,
            selected: false,
        },
        {
            id: "split-ac-1",
            name: "Split AC(1 HP)",
            wattage: 1400,
            quantity: 0,
            selected: false,
        },
        {
            id: "split-ac-1.5",
            name: "Split AC (1.5 HP)",
            wattage: 2000,
            quantity: 0,
            selected: false,
        },
        {
            id: "inverter-ac-1.5",
            name: "Inverter AC (1.5HP)",
            wattage: 1400,
            quantity: 0,
            selected: false,
        },
        {
            id: "split-ac-2",
            name: "Split AC (2HP)",
            wattage: 2500,
            quantity: 0,
            selected: false,
        },
    ],
},
{
    id: "kitchen",
    name: "Kitchen Appliances",
    expanded: false,
    appliances: [
        {
            id: "refrigerator-medium",
            name: "Refrigerator (medium size)",
            wattage: 250,
            quantity: 0,
            selected: false,
        },
        {
            id: "refrigerator-large",
            name: "Refrigerator (large size)",
            wattage: 600,
            quantity: 0,
            selected: false,
        },
        {
            id: "deep-freezer",
            name: "Deep Freezer (large size)",
            wattage: 500,
            quantity: 0,
            selected: false,
        },
        {
            id: "microwave",
            name: "Microwave Oven",
            wattage: 1300,
            quantity: 0,
            selected: false,
        },
        {
            id: "electric-kettle",
            name: "Electric Kettle",
            wattage: 2200,
            quantity: 0,
            selected: false,
        },
        {
            id: "blender",
            name: "Blender",
            wattage: 600,
            quantity: 0,
            selected: false,
        },
        {
            id: "toaster",
            name: "Toaster",
            wattage: 1100,
            quantity: 0,
            selected: false,
        },
    ],
},
{
    id: "laundry",
    name: "Laundry Appliances",
    expanded: false,
    appliances: [
        {
            id: "washing-machine",
            name: "Washing Machine",
            wattage: 1400,
            quantity: 0,
            selected: false,
        },
        {
            id: "clothes-iron",
            name: "Clothes Iron",
            wattage: 1800,
            quantity: 0,
            selected: false,
        },
        {
            id: "vacuum-cleaner",
            name: "Vacuum Cleaner",
            wattage: 1200,
            quantity: 0,
            selected: false,
        },
    ],
},
{
    id: "miscellaneous",
    name: "Miscellaneous Appliances",
    expanded: false,
    appliances: [
        {
            id: "water-dispenser",
            name: "Water Dispenser",
            wattage: 700,
            quantity: 0,
            selected: false,
        },
        {
            id: "electric-sewing",
            name: "Electric Sewing Machine",
            wattage: 120,
            quantity: 0,
            selected: false,
        },
        {
            id: "cctv-dvr",
            name: "CCTV & DVR",
            wattage: 80,
            quantity: 0,
            selected: false,
        },
        {
            id: "air-clipper",
            name: "Air Clipper",
            wattage: 20,
            quantity: 0,
            selected: false,
        },
        {
            id: "electric-shower",
            name: "Electric Shower Heater",
            wattage: 3000,
            quantity: 0,
            selected: false,
        },
        {
            id: "laptop",
            name: "Laptop",
            wattage: 90,
            quantity: 0,
            selected: false,
        },
        {
            id: "wifi-router",
            name: "WiFi Router",
            wattage: 15,
            quantity: 0,
            selected: false,
        },
    ],
},]


export const PRODUCT_PLANS = [
    {
        id: "cme9p59vt0000zm9yew0m0br1",
        name: "PF 1.8kva Mini",
        description: "Perfect for studio apartments with light power needs like fans, TV, and lighting.",
        price: 1106040,
        equipmentList: [
            {
                name: "300W Solar Panel",
                quantity: 2,
                unitPrice: 102000,
                totalPrice: 204000,
            },
            {
                name: "1.8KW Inverter/12V",
                quantity: 1,
                unitPrice: 298800,
                totalPrice: 298800,
            },
            {
                name: "Gel Battery 200Ah/12V",
                quantity: 1,
                unitPrice: 348000,
                totalPrice: 348000,
            },
        ],
        equipmentCost: 850800,
        accessoriesAndInstallation: 255240,
        totalCost: 1106040,
        recommendedAppliances: ["Lighting (5 LED Bulbs)", "1 Fan", "1 TV set", "1 Laptop", "1 Decoder/Home Theatre"],
        estimatedRuntime: 6,
        specifications: {
            inverterSize: 1.8,
            panelQuantity: 2,
            batteryCapacity: 2.4,
            panelType: 300,
            batteryType: "GEL_200AH_12V",
            batteryQuantity: 1,
        },
    },
    {
        id: "cmcq8orq00000juccfaj0a9qz",
        name: "PF 4kva Midi",
        description: "Ideal for small homes running essential appliances like a fridge, TV, and lighting.",
        price: 2889216,
        equipmentList: [
            {
                name: "500W Solar Panel",
                quantity: 8,
                unitPrice: 159960,
                totalPrice: 1279680,
            },
            {
                name: "4KW Inverter/24V",
                quantity: 1,
                unitPrice: 432000,
                totalPrice: 432000,
            },
            {
                name: "Gel Battery 200Ah/12V",
                quantity: 2,
                unitPrice: 348000,
                totalPrice: 696000,
            },
        ],
        equipmentCost: 2407680,
        accessoriesAndInstallation: 481536,
        totalCost: 2889216,
        recommendedAppliances: [
            "Lighting (10 LED Bulbs)",
            "2 Fans",
            "2 TV sets",
            "2 Laptops",
            "1 Refrigerator",
            "1 Decoder/Home Theatre",
        ],
        estimatedRuntime: 6,
        specifications: {
            inverterSize: 4,
            panelQuantity: 8,
            batteryCapacity: 4.8,
            panelType: 500,
            batteryType: "GEL_200AH_12V",
            batteryQuantity: 2,
        },
    },
    {
        id: "cmcq8p2qu0003juccusoud306",
        name: "PF 4kva Midi Pro",
        description: "Great for 2–3 bedroom homes with extended runtime needs.",
        price: 3544416,
        equipmentList: [
            {
                name: "500W Solar Panel",
                quantity: 8,
                unitPrice: 159960,
                totalPrice: 1279680,
            },
            {
                name: "4KW Inverter/24V",
                quantity: 1,
                unitPrice: 432000,
                totalPrice: 432000,
            },
            {
                name: "5KW Lithium Battery/24V",
                quantity: 1,
                unitPrice: 1242000,
                totalPrice: 1242000,
            },
        ],
        equipmentCost: 2953680,
        accessoriesAndInstallation: 590736,
        totalCost: 3544416,
        recommendedAppliances: [
            "Lighting (15 LED Bulbs)",
            "2 Fans",
            "2 TV sets",
            "4 Laptops",
            "1 Refrigerator",
            "1 Decoder/Home Theatre",
        ],
        estimatedRuntime: 6,
        specifications: {
            inverterSize: 4,
            panelQuantity: 8,
            batteryCapacity: 5,
            panelType: 500,
            batteryType: "LITHIUM_5KWH_24V",
            batteryQuantity: 1,
        },
    },
    {
        id: "cmcq8p7yi0006jucc3kecrz2c",
        name: "PF 6kva Max",
        description: "Best suited for full homes or small offices running heavy-duty appliances.",
        price: 5492124,
        equipmentList: [
            {
                name: "500W Solar Panel",
                quantity: 8,
                unitPrice: 159960,
                totalPrice: 1279680,
            },
            {
                name: "6KW Inverter/48V",
                quantity: 1,
                unitPrice: 685890,
                totalPrice: 685890,
            },
            {
                name: "10KWH Lithium Battery/48V",
                quantity: 1,
                unitPrice: 2611200,
                totalPrice: 2611200,
            },
        ],
        equipmentCost: 4576770,
        accessoriesAndInstallation: 915354,
        totalCost: 5492124,
        recommendedAppliances: [
            "Lighting (20 LED bulbs)",
            "1 Refrigerator",
            "2 Fans",
            "2 TV sets",
            "4 Laptops",
            "1 AC 1.5hp",
            "1 Decoder/Home Theatre",
        ],
        estimatedRuntime: 8,
        specifications: {
            inverterSize: 6,
            panelQuantity: 8,
            batteryCapacity: 10,
            panelType: 500,
            batteryType: "LITHIUM_10KWH_48V",
            batteryQuantity: 1,
        },
    },
]