// Community Challenges & Leaderboard page
"use client";

import React from "react";

// Components (UI)
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Types
type Post = {
    id: number
    author: string
    avatar: string
    content: string
    likes: number
    comments: number
}

type LeaderboardUser = {
    id: number
    name: string
    avatar: string
    impact_score: number
    contributions: number
    rank: number
}

// Data
const initialPosts: Post[] = [
    {
        id: 1,
        author: "Emma Green",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
        content: "Just installed solar panels! My carbon footprint is down by 50%! 🌞",
        likes: 24,
        comments: 5,
    },
    {
        id: 2,
        author: "Mike Rivers",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
        content: "Started composting this month. It's amazing how much waste we can reduce! 🌱",
        likes: 18,
        comments: 3,
    },
    {
        id: 3,
        author: "Sarah Woods",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        content: "Tips for reducing plastic use: bring your own bags, use reusable water bottles, and buy in bulk! 🌍",
        likes: 32,
        comments: 8,
    },
]

const leaderboardData: LeaderboardUser[] = [
    {
        id: 1,
        name: "Emma Green",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
        impact_score: 2500,
        contributions: 45,
        rank: 1
    },
    {
        id: 2,
        name: "Mike Rivers",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
        impact_score: 2100,
        contributions: 38,
        rank: 2
    },
    {
        id: 3,
        name: "Sarah Woods",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        impact_score: 1800,
        contributions: 32,
        rank: 3
    },
    {
        id: 4,
        name: "John Lake",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
        impact_score: 1500,
        contributions: 28,
        rank: 4
    },
    {
        id: 5,
        name: "Lisa Sky",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
        impact_score: 1200,
        contributions: 25,
        rank: 5
    }
]

export default function CommunityPage() {
    const [posts, setPosts] = React.useState<Post[]>(initialPosts)
    const [newPost, setNewPost] = React.useState<string>("")

    const handlePost = () => {
        if (newPost.trim()) {
            const post: Post = {
                id: posts.length + 1,
                author: "You",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=You",
                content: newPost,
                likes: 0,
                comments: 0,
            }
            setPosts([post, ...posts])
            setNewPost("")
        }
    }

    return (
        <div className="grid gap-6 md:grid-cols-2">
            {/* Posts Section */}
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Community</h1>
                    <p className="text-muted-foreground">
                        Connect with other environmentally conscious individuals
                    </p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Share Your Journey</CardTitle>
                        <CardDescription>
                            Share your sustainable living experiences with the community
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex gap-4">
                            <Input
                                placeholder="What's on your mind?"
                                value={newPost}
                                onChange={(e) => setNewPost(e.target.value)}
                            />
                            <Button
                                className="bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer"
                                onClick={handlePost}
                            >
                                Post
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-4">
                    {posts.map((post) => (
                        <Card key={post.id}>
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <Avatar>
                                        <AvatarImage src={post.avatar} />
                                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 space-y-2">
                                        <div>
                                            <span className="font-semibold">{post.author}</span>
                                        </div>
                                        <p className="text-md text-muted-foreground">{post.content}</p>
                                        <div className="flex gap-4 text-sm text-muted-foreground">
                                            <button className="flex items-center gap-1 hover:text-primary">
                                                ❤️ {post.likes}
                                            </button>
                                            <button className="flex items-center gap-1 hover:text-primary">
                                                💬 {post.comments}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Leaderboard Section */}
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Community Leaderboard</CardTitle>
                        <CardDescription>Top contributors making an impact</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {leaderboardData.map((user) => (
                                <div
                                    key={user.id}
                                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors"
                                >
                                    <div className="flex items-center justify-center w-8 h-8 text-lg font-bold">
                                        {user.rank === 1 && "🥇"}
                                        {user.rank === 2 && "🥈"}
                                        {user.rank === 3 && "🥉"}
                                        {user.rank > 3 && `#${user.rank}`}
                                    </div>
                                    <Avatar>
                                        <AvatarImage src={user.avatar} />
                                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="font-semibold">{user.name}</p>
                                        <p className="text-md text-muted-foreground">
                                            {user.contributions} contributions
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold">{user.impact_score}</p>
                                        <p className="text-md text-muted-foreground">impact points</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}