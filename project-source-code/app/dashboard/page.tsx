"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

// Icons
import { Leaf, Users, Award, BarChart3 } from 'lucide-react';

// Components (UI)
import { Button } from '@/components/ui/button';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

// Chart Library
import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts"



// Card Details
const data = {
    carbonFootprint: {
        value: 2.4,
        percentage: -12,
    },
    activeChallenges: {
        value: 3,
        completed: 2,
    },
    achievements: {
        value: 12,
        new: 2,
    },
    impactScore: {
        value: 456,
        points: 23,
    },
};

// Mock data for charts
const chartData = [
    { month: 'Jan', value: 2.8 },
    { month: 'Feb', value: 2.6 },
    { month: 'Mar', value: 2.4 },
    { month: 'Apr', value: 2.1 },
    { month: 'May', value: 1.9 },
    { month: 'Jun', value: 1.8 },
    { month: 'Jul', value: 1.7 },
    { month: 'Aug', value: 1.6 },
    { month: 'Sep', value: 1.5 },
    { month: 'Oct', value: 1.4 },
    { month: 'Nov', value: 1.3 },
    { month: 'Dec', value: 1.2 }
];
const impactData = [
    { name: 'Transport', value: 40 },
    { name: 'Energy', value: 30 },
    { name: 'Food', value: 20 },
    { name: 'Waste', value: 10 }
];

// Chart Config
const chartConfig = {
    value: {
        label: 'Carbon Footprint',
        color: '#059669',
    },
} satisfies ChartConfig;



const COLORS = ['#059669', '#10B981', '#34D399', '#6EE7B7'];


export default function DashboardPage() {
    const router = useRouter();

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
                <p className="text-muted-foreground">Welcome to your EcoImpact dashboard</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h2 className="font-medium mb-4">Quick Actions</h2>
                <div className="flex gap-4">
                    <Button
                        className="bg-emerald-200 hover:bg-emerald-300 text-emerald-800 cursor-pointer"
                        onClick={() => router.push('/calculator')}
                    >
                        Calculate Impact
                    </Button>
                    <Button
                        className="bg-orange-200 hover:bg-orange-300 text-orange-800 cursor-pointer"
                        onClick={() => router.push('/community')}
                    >
                        Join Challenges
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Carbon Footprint Card */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-gray-700 font-medium">Carbon footprint</h3>
                            <div className="mt-2">
                                <p className="text-3xl font-bold">{data.carbonFootprint.value} tons</p>
                                <p className="text-sm text-emerald-600">{data.carbonFootprint.percentage}% from last month</p>
                            </div>
                        </div>
                        <div className="p-2 text-emerald-500">
                            <Leaf className="size-8" />
                        </div>
                    </div>
                </div>

                {/* Active Challenges Card */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-gray-700 font-medium">Active challenges</h3>
                            <div className="mt-2">
                                <p className="text-3xl font-bold">{data.activeChallenges.value}</p>
                                <p className="text-sm text-emerald-600">{data.activeChallenges.completed} completed this month</p>
                            </div>
                        </div>
                        <div className="p-2 text-emerald-500">
                            <Users className="size-8" />
                        </div>
                    </div>
                </div>

                {/* Achievements Card */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-gray-700 font-medium">Achievements</h3>
                            <div className="mt-2">
                                <p className="text-3xl font-bold">{data.achievements.value}</p>
                                <p className="text-sm text-emerald-600">{data.achievements.new} new this week</p>
                            </div>
                        </div>
                        <div className="p-2 text-emerald-500">
                            <Award className="size-8" />
                        </div>
                    </div>
                </div>

                {/* Impact Score Card */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-gray-700 font-medium">Impact Score</h3>
                            <div className="mt-2">
                                <p className="text-3xl font-bold">{data.impactScore.value}</p>
                                <p className="text-sm text-emerald-600">+{data.impactScore.points} points this week</p>
                            </div>
                        </div>
                        <div className="p-2 text-emerald-500">
                            <BarChart3 className="size-8" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Carbon Trend Chart */}
            <Card className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <CardHeader>
                    <CardTitle>Carbon Footprint Trend</CardTitle>
                    <CardDescription>Monthly data</CardDescription>
                </CardHeader>
                <CardContent className="h-64">
                    <ChartContainer config={chartConfig} className="h-full w-full">
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="month"
                                tickMargin={10}
                                tickFormatter={(value) => value.toUpperCase()}
                            />
                            <YAxis />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent />}
                            />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#059669"
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>Carbon Footprint</span>
                    </div>
                </CardFooter>
            </Card>

            {/* Impact Distribution */}
            <Card className="bg-white p-6 rounded-xl shadow-sm">
                <CardHeader>
                    <CardTitle>Impact Distribution</CardTitle>
                    <CardDescription>By category</CardDescription>
                </CardHeader>
                <CardContent className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={impactData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label
                            >
                                {impactData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm mb-6">
                    <div className="flex items-center gap-2">
                        {impactData.map((entry, index) => (
                            <div key={index} className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                <span>{entry.name}</span>
                            </div>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}