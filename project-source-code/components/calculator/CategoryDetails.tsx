import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { calculationFactors } from "@/utils";
import { useState, useEffect } from "react"

interface CategoryDetailsProps {
    category: string;
    value: number;
    onChange: (value: number[]) => void;
}

export function CategoryDetails({ category, value, onChange }: CategoryDetailsProps) {
    const [inputValue, setInputValue] = useState<string>(value.toString())
    const factor = calculationFactors[category]

    // Update input value when slider changes
    useEffect(() => {
        setInputValue(value.toString())
    }, [value])

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        const numValue = parseFloat(e.target.value) || 0
        onChange([numValue])
    }

    return (
        <div className="space-y-6">
            <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="text-lg font-medium mb-2 capitalize">{category}</h4>
                <p className="text-md text-muted-foreground mb-4">{factor.description}</p>

                <div className="flex gap-3 items-center mb-6">
                    <Input
                        type="number"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="w-24"
                    />
                    <span className="text-md text-muted-foreground">{factor.unit}</span>
                </div>

                <Slider
                    value={[value]}
                    min={factor.min}
                    max={factor.max}
                    step={factor.step}
                    onValueChange={onChange}
                    className="my-4"
                />

                <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">{factor.min} {factor.unit}</span>
                    <span className="text-sm text-muted-foreground">{factor.max} {factor.unit}</span>
                </div>
            </div>

            <div className="space-y-3">
                <h4 className="text-lg font-medium">Impact Preview</h4>
                <div className="flex justify-between items-center">
                    <span className="text-md">Estimated Impact:</span>
                    <span className="text-md font-medium">{(value * factor.multiplier).toFixed(2)} kg CO₂</span>
                </div>
                <div className="w-full bg-emerald-100 h-2 rounded-full">
                    <div
                        className="bg-emerald-500 h-2 rounded-full"
                        style={{ width: `${Math.min((value / factor.max) * 100, 100)}%` }}
                    />
                </div>
            </div>
        </div>
    )
}