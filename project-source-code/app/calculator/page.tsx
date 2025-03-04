// Carbon Calculator page
"use client";

import React from "react";

// Icons
import { Droplets, Fuel, Gauge, Leaf, Lightbulb, Recycle } from "lucide-react";

// Components (UI)
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// Helpers
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Components (Custom)
import { CategoryDetails } from "@/components/calculator/CategoryDetails";
import { ResultsPanel } from "@/components/calculator/ResultsPanel";

import { calculationFactors } from "@/utils";


export default function CalculatorPage() {

    // BASIC CALCULATOR
    const [category, setCategory] = React.useState("");
    const [consumption, setConsumption] = React.useState("");
    const [result, setResult] = React.useState<number | null>(null);

    // ADVANCED CALCULATOR
    const [currentStep, setCurrentStep] = React.useState<number>(1); // Step tracking
    const [selectedCategory, setSelectedCategory] = React.useState<string>("electricity"); // Category selection
    const [advancedConsumption, setAdvancedConsumption] = React.useState<Record<string, number>>({
        electricity: 100,
        water: 2000,
        fuel: 20,
        transportation: 100,
        diet: 3,
        waste: 5
    }); // Consumption values for different categories
    const [advancedResults, setAdvancedResults] = React.useState<{
        totalImpact: number;
        breakdown: Record<string, number>;
        tips: string[];
    } | null>(null); // Result of the calculation


    // Handle category selection
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
    }

    // Handle consumption change
    const handleConsumptionChange = (value: number[]) => {
        setAdvancedConsumption({
            ...advancedConsumption,
            [selectedCategory]: value[0]
        })
    }

    // Calculate impact for the current selection (basic calculator)
    const calculateImpactBasic = () => {
        // Basic calculation logic - this can be expanded based on specific requirements
        const baseNumber = parseFloat(consumption) || 0
        let multiplier = 0

        switch (category) {
            case "electricity":
                multiplier = 0.85 // kWh to CO2 kg
                break
            case "water":
                multiplier = 0.376 // Liters to CO2 kg
                break
            case "fuel":
                multiplier = 2.31 // Liters to CO2 kg
                break
            // Add more categories here
            case "other":
                multiplier = 1.5 // Default multiplier for other categories
                break
            default:
                multiplier = 1
        }

        setResult(baseNumber * multiplier)
    }

    // Calculate impact for the current selection (advanced calculator)
    const calculateImpactAdvanced = () => {
        let totalImpact = 0
        const breakdown: Record<string, number> = {}
        const tips: string[] = []

        // Calculate impact for each category with consumption data
        Object.entries(consumption).forEach(([category, value]) => {
            const factor = calculationFactors[category]
            const impact = Number(value) * factor.multiplier
            breakdown[category] = impact
            totalImpact += impact

            // Add random tip from the category
            if (factor.tips && factor.tips.length > 0) {
                const randomTip = factor.tips[Math.floor(Math.random() * factor.tips.length)]
                tips.push(randomTip)
            }
        })

        setAdvancedResults({
            totalImpact,
            breakdown,
            tips: tips.slice(0, 3) // Limit to 3 tips
        })

        // Move to the results step
        setCurrentStep(3)
    }

    // Move to next step
    const goToNextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1)
        }
    }

    // Go back to previous step
    const goToPreviousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }



    // Get icon for category
    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "electricity":
                return <Lightbulb className="size-5" />
            case "water":
                return <Droplets className="size-5" />
            case "fuel":
                return <Fuel className="size-5" />
            case "transportation":
                return <Gauge className="size-5" />
            case "diet":
                return <Leaf className="size-5" />
            case "waste":
                return <Recycle className="size-5" />
            default:
                return <Leaf className="size-5" />
        }
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-4xl font-bold text-foreground">Carbon Impact Calculator</h1>
                <p className="text-muted-foreground">
                    Calculate your environmental impact across different categories
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">
                            Basic Carbon Calculator
                        </CardTitle>
                        <CardDescription>
                            Select a category and enter your consumption to calculate the environmental impact
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Category</label>
                            <Select value={category} onValueChange={setCategory}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="electricity">Electricity (kWh)</SelectItem>
                                    <SelectItem value="water">Water (Liters)</SelectItem>
                                    <SelectItem value="fuel">Fuel (Liters)</SelectItem>
                                    {/* Suggest more categories */}
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Consumption</label>
                            <Input
                                type="number"
                                placeholder="Enter amount"
                                value={consumption}
                                onChange={(e) => setConsumption(e.target.value)}
                            />
                        </div>

                        <Button
                            onClick={calculateImpactBasic}
                            className="w-full bg-emerald-500 hover:bg-emerald-600 text-emerald-900 cursor-pointer"
                        >
                            Calculate
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Results</CardTitle>
                        <CardDescription>Your environmental impact calculation</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {result !== null ? (
                            <div className="space-y-4">
                                <div className="text-4xl font-bold text-emerald-700">
                                    {result.toFixed(2)}
                                    <span className="text-sm font-normal ml-2 ">
                                        kg CO₂
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    This is your estimated carbon dioxide equivalent impact based on your
                                    consumption.
                                </p>
                                <Button
                                    onClick={() => {
                                        setResult(null)
                                        setCategory("")
                                        setConsumption("")
                                    }}
                                    className="bg-orange-500 hover:bg-orange-600 text-orange-900 cursor-pointer"
                                >
                                    Clear
                                </Button>
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">
                                Enter your consumption details to see the calculation results.
                            </p>
                        )}
                    </CardContent>
                </Card>
            </div>

            <div className="text-sm text-muted-foreground">
                <p>
                    Note: The calculation is based on a basic formula and may not be accurate for all scenarios.
                    For more accurate calculations, consider using specialized tools or consulting experts.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-5 mt-14">
                {/* Left Panel - Input Section */}
                <div className="col-span-5 md:col-span-3 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">
                                Advanced Carbon Calculator
                            </CardTitle>
                            <CardDescription>
                                Follow the steps below to calculate your carbon footprint
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {/* Step Progress */}
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <span className={`text-sm font-medium ${currentStep >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>Choose Category</span>
                                    <span className={`text-sm font-medium ${currentStep >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>Enter Consumption</span>
                                    <span className={`text-sm font-medium ${currentStep >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>View Results</span>
                                </div>
                                <div className="w-full bg-emerald-100 h-2 rounded-full">
                                    <div
                                        className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${(currentStep / 3) * 100}%` }}
                                    />
                                </div>
                            </div>

                            {/* Step 1: Select Category */}
                            {currentStep === 1 && (
                                <div className="space-y-4 animate-in">
                                    <h3 className="text-lg font-medium">Step 1: Select Activity Type</h3>
                                    <p className="text-muted-foreground mb-4">Choose the category you want to calculate your impact for.</p>

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {Object.keys(calculationFactors).map((category) => (
                                            <Button
                                                key={category}
                                                variant={selectedCategory === category ? "default" : "outline"}
                                                className={`h-20 flex flex-col items-center justify-center cursor-pointer ${selectedCategory === category ? "bg-emerald-500 hover:bg-emerald-600" : ""}`}
                                                onClick={() => handleCategoryChange(category)}
                                            >
                                                {getCategoryIcon(category)}
                                                <span className="capitalize">{category}</span>
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Enter Consumption Details */}
                            {currentStep === 2 && (
                                <div className="space-y-4 animate-fade-in">
                                    <h3 className="text-lg font-medium">Step 2: Enter Consumption Details</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Adjust the slider based on your {selectedCategory} usage.
                                    </p>

                                    <CategoryDetails
                                        category={selectedCategory}
                                        value={advancedConsumption[selectedCategory]}
                                        onChange={handleConsumptionChange}
                                    />
                                </div>
                            )}

                            {/* Step 3: Results & Insights */}
                            {currentStep === 3 && advancedResults && (
                                <div className="animate-fade-in">
                                    <h3 className="text-lg font-medium mb-4">Step 3: Your Results & Insights</h3>
                                    <ResultsPanel results={advancedResults} />
                                </div>
                            )}
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            {currentStep > 1 && (
                                <Button
                                    variant="outline"
                                    className="bg-orange-500 hover:bg-orange-600 text-orange-900 cursor-pointer"
                                    onClick={goToPreviousStep}
                                >
                                    Back
                                </Button>
                            )}

                            <div className="flex-1" />

                            {currentStep < 3 ? (
                                <Button
                                    className="bg-emerald-500 hover:bg-emerald-600 text-emerald-900 cursor-pointer"
                                    onClick={goToNextStep}
                                >
                                    Continue
                                </Button>
                            ) : currentStep === 2 ? (
                                <Button onClick={calculateImpactAdvanced}>
                                    Calculate Results
                                </Button>
                            ) : (
                                <Button
                                    className="bg-emerald-500 hover:bg-emerald-600 text-emerald-900 cursor-pointer"
                                    onClick={() => setCurrentStep(1)}
                                >
                                    Start New Calculation
                                </Button>
                            )}
                        </CardFooter>
                    </Card>

                    {/* Did You Know Section */}
                    <Card className="bg-secondary/30">
                        <CardHeader>
                            <CardTitle className="flex items-center text-xl">
                                <Lightbulb className="mr-2 h-5 w-5" />
                                Did you know?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-md">
                                Reducing your electricity usage by just 10% can save approximately
                                {calculationFactors.electricity.multiplier * 0.1 * advancedConsumption.electricity} kg CO₂ per month,
                                equivalent to planting {Math.round((calculationFactors.electricity.multiplier * 0.1 * advancedConsumption.electricity) / 20)} trees!
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Panel - Visualization */}
                <div className="col-span-5 md:col-span-2">
                    <Tabs defaultValue="charts" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="charts">Impact Charts</TabsTrigger>
                            <TabsTrigger value="tips">Eco Tips</TabsTrigger>
                        </TabsList>
                        <TabsContent value="charts" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Your Carbon Footprint</CardTitle>
                                    <CardDescription>
                                        Visualization of your environmental impact
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="h-[300px] flex items-center justify-center">
                                    {advancedResults ? (
                                        <div className="text-center space-y-4">
                                            <div className="text-5xl font-bold text-primary">
                                                {advancedResults.totalImpact.toFixed(2)}
                                                <span className="text-sm font-normal text-muted-foreground ml-2">
                                                    kg CO₂
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                                                This is your estimated carbon dioxide equivalent impact based on your provided consumption data.
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="text-muted-foreground text-center">
                                            Complete the steps to see your carbon footprint visualization
                                        </p>
                                    )}
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Compare Your Impact</CardTitle>
                                    <CardDescription>
                                        How you compare to the average
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="h-[200px] flex items-center justify-center">
                                    {advancedResults ? (
                                        <div className="w-full">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm">Your Impact</span>
                                                <span className="text-sm font-medium">{advancedResults.totalImpact.toFixed(2)} kg CO₂</span>
                                            </div>
                                            <div className="w-full bg-secondary h-4 rounded-full mb-4">
                                                <div
                                                    className="bg-primary h-4 rounded-full"
                                                    style={{ width: `${Math.min((advancedResults.totalImpact / 500) * 100, 100)}%` }}
                                                />
                                            </div>

                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm">Average Person</span>
                                                <span className="text-sm font-medium">300 kg CO₂</span>
                                            </div>
                                            <div className="w-full bg-secondary h-4 rounded-full">
                                                <div
                                                    className="bg-muted-foreground h-4 rounded-full"
                                                    style={{ width: '60%' }}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="text-muted-foreground text-center">
                                            Complete the steps to compare your impact
                                        </p>
                                    )}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="tips">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Eco-Friendly Actions</CardTitle>
                                    <CardDescription>
                                        Personalized tips to reduce your footprint
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {advancedResults ? (
                                        <ul className="space-y-4">
                                            {advancedResults.tips.map((tip, index) => (
                                                <li key={index} className="flex items-start gap-3 pb-3 border-b border-border last:border-0">
                                                    <Leaf className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <p className="text-sm">{tip}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className="text-center py-8">
                                            <Leaf className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-20" />
                                            <p className="text-muted-foreground">
                                                Complete your calculation to receive personalized eco-tips
                                            </p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}