

interface ResultsPanelProps {
    results: {
        totalImpact: number;
        breakdown: Record<string, number>;
        tips: string[];
    };
}

export function ResultsPanel({ results }: ResultsPanelProps) {
    return (
        <div className="space-y-4">
            <div className="text-center p-6 bg-primary/10 rounded-lg">
                <div className="text-5xl font-bold text-primary">
                    {results.totalImpact.toFixed(2)}
                    <span className="text-sm font-normal text-muted-foreground ml-2">
                        kg CO₂
                    </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                    Total estimated carbon footprint
                </p>
            </div>

            <div className="grid gap-3">
                <h4 className="text-md font-medium">Impact Breakdown</h4>
                {Object.entries(results.breakdown).map(([category, impact]) => (
                    <div key={category} className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                            <span className="text-sm capitalize">{category}</span>
                        </div>
                        <span className="text-sm font-medium">{impact.toFixed(2)} kg CO₂</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
