// Helper Functions

export const calculationFactors: Record<string, {
    multiplier: number;
    unit: string;
    min: number;
    max: number;
    step: number;
    description: string;
    tips: string[];
}> = {
    electricity: {
        multiplier: 0.85,
        unit: "kWh/month",
        min: 0,
        max: 1000,
        step: 10,
        description: "The average household uses 900 kWh of electricity per month.",
        tips: [
            "Replace incandescent bulbs with LED lights to reduce electricity consumption by up to 80%.",
            "Unplug electronics when not in use to avoid phantom energy usage.",
            "Use a programmable thermostat to reduce heating and cooling when you're away."
        ]
    },
    water: {
        multiplier: 0.376,
        unit: "Liters/day",
        min: 0,
        max: 5000,
        step: 100,
        description: "The average person uses about 150 liters of water per day.",
        tips: [
            "Install low-flow showerheads to reduce water consumption while showering.",
            "Fix leaky faucets promptly - they can waste up to 3,000 gallons per year.",
            "Collect rainwater for gardening to reduce your water footprint."
        ]
    },
    fuel: {
        multiplier: 2.31,
        unit: "Liters/month",
        min: 0,
        max: 200,
        step: 5,
        description: "The average car consumes about 120 liters of fuel per month.",
        tips: [
            "Maintain proper tire pressure to improve fuel efficiency by up to 3%.",
            "Remove excess weight from your vehicle to reduce fuel consumption.",
            "Consider carpooling or using public transport for regular commutes."
        ]
    },
    transportation: {
        multiplier: 0.14,
        unit: "km/week",
        min: 0,
        max: 1000,
        step: 10,
        description: "The average person travels about 250 km per week.",
        tips: [
            "Consider biking or walking for short trips under 2 km.",
            "Use public transportation when possible to reduce your carbon footprint.",
            "Combine multiple errands into a single trip to save fuel and reduce emissions."
        ]
    },
    diet: {
        multiplier: 7.1,
        unit: "meat meals/week",
        min: 0,
        max: 21,
        step: 1,
        description: "The average person consumes about 14 meat meals per week.",
        tips: [
            "Try 'Meatless Mondays' to reduce your dietary carbon footprint.",
            "Choose locally-sourced foods to reduce transportation emissions.",
            "Reduce food waste by planning meals and properly storing leftovers."
        ]
    },
    waste: {
        multiplier: 5.2,
        unit: "kg/week",
        min: 0,
        max: 30,
        step: 1,
        description: "The average person produces about 10 kg of waste per week.",
        tips: [
            "Start composting food scraps to reduce landfill waste and methane emissions.",
            "Use reusable bags, bottles, and containers to minimize single-use plastic waste.",
            "Recycle properly - contaminated recycling often ends up in landfills."
        ]
    }
}
