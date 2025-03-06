// Achievements page

// Icons
import { Medal } from "lucide-react";

// Data
const achievementCategories = [
    {
        title: 'Total Achievements',
        count: 12,
    },
    {
        title: 'In Progress',
        count: 5,
    },
    {
        title: 'Completed',
        count: 7,
    },
]

const achievements = [
    {
        title: 'Carbon Reducer',
        description: 'Reduce your carbon footprint by 25%',
        progress: 75,
    },
    {
        title: 'Community Leader',
        description: 'Complete 5 community challenges',
        progress: 60,
    },
    {
        title: 'Zero Waste Hero',
        description: 'Maintain zero waste for 30 days',
        progress: 40,
    },
    {
        title: 'Green Transport',
        description: 'Use eco-friendly transport for 50 trips',
        progress: 90,
    },
]

// Prop Interface
interface AchievementProps {
    title: string;
    description: string;
    progress: number;
}

const Achievement = ({ title, description, progress }: AchievementProps) => (
    <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-start gap-4">
            <div className="p-2 bg-green-100 rounded-lg">
                <Medal className="text-green-600" size={24} />
            </div>
            <div className="flex-1">
                <h3 className="font-medium text-gray-800">{title}</h3>
                <p className="text-sm text-gray-500 mb-2">{description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    </div>
);

export default function AchievementsPage() {
    return (
        <div >
            <div>
                <h1 className="text-4xl font-bold text-foreground">Achievements</h1>
                <p className="text-muted-foreground">Track your environmental milestones</p>
            </div>

            {/* Achievement Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                {achievementCategories.map((category, index) => (
                    <div key={index} className="bg-emerald-50 p-4 rounded-lg text-center">
                        <h3 className="text-3xl font-bold text-emerald-600">{category.count}</h3>
                        <p className="text-md text-gray-600">{category.title}</p>
                    </div>
                ))}
            </div>

            {/* Achievement List */}
            <div className="space-y-4">
                {achievements.map((achievement, index) => (
                    <Achievement 
                        key={index}
                        title={achievement.title}
                        description={achievement.description}
                        progress={achievement.progress}
                    />
                ))}
            </div>
        </div>
    )
}