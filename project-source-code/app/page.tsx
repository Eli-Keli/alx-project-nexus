// Landing page for the platform
"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BarChart, Leaf, Users } from "lucide-react";

export default function LandingPage() {
    const router = useRouter();

    return (
        <main className="h-screen">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-emerald-400/10 -z-10 h-screen" />
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-8">
                        <div className="inline-block">
                            <div className="p-3 rounded-full bg-emerald-400/10">
                                <Leaf className="w-8 h-8 text-emerald-500" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                            Track Your
                            <span className="text-emerald-400"> Environmental Impact</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg">
                            Join our community of eco-conscious individuals and discover how your daily choices
                            impact the environment. Calculate, track, and improve your carbon footprint.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                size="lg"
                                className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer"
                                onClick={() => router.push("/dashboard")}
                            >
                                Start Calculating
                                <ArrowRight />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="cursor-pointer"
                                onClick={() => router.push("/dashboard")}
                            >
                                Join Community
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="mb-4">
                                <BarChart className="w-8 h-8 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Calculate Your Impact</h3>
                            <p className="text-muted-foreground">Get detailed insights into your carbon footprint based on your lifestyle choices and daily activities.</p>
                        </div>

                        <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="mb-4">
                                <Users className="w-8 h-8 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Join Challenges</h3>
                            <p className="text-muted-foreground">Participate in community challenges and compete with others to create positive environmental change.</p>
                        </div>

                        <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="mb-4">
                                <Award className="w-8 h-8 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Earn Achievements</h3>
                            <p className="text-muted-foreground">Track your progress and earn badges as you reach sustainability milestones on your eco-friendly journey.</p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}


{/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
