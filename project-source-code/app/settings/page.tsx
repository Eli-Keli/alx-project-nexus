// Settings page
"use client";

import React from 'react';

// Components (UI)
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SettingsPage() {
    const [notifications, setNotifications] = React.useState(true);
    const [darkMode, setDarkMode] = React.useState(false);
    const [challengeUpdates, setChallengeUpdates] = React.useState(true);
    const [achievementsAlerts, setAchievementsAlerts] = React.useState(true);
    const [communityMessages, setCommunityMessages] = React.useState(true);
    const [profilePublic, setProfilePublic] = React.useState(true);
    const [shareAchievements, setShareAchievements] = React.useState(true);
    const [communityTags, setCommunityTags] = React.useState(true);

    const handleSavePreferences = () => {
        toast('Preferences saved successfully', {
            description: 'Your preferences have been saved successfully',
            action: {
                label: 'Undo',
                onClick: () => {
                    toast('Preferences reverted', {
                        description: 'Your preferences have been reverted',
                    });
                }
            },
        })
    }

    const handleSaveNotifications = () => {
        toast('Notifications saved successfully', {
            description: 'Your notifications have been saved successfully',
            action: {
                label: 'Undo',
                onClick: () => {
                    toast('Notifications reverted', {
                        description: 'Your notifications have been reverted',
                    });
                }
            },
        })
    }

    const handleSavePrivacy = () => {
        toast('Privacy settings saved successfully', {
            description: 'Your privacy settings have been saved successfully',
            action: {
                label: 'Undo',
                onClick: () => {
                    toast('Privacy settings reverted', {
                        description: 'Your privacy settings have been reverted',
                    });
                }
            },
        })
    }

    const handleSaveProfile = () => {
        toast('Profile settings saved successfully', {
            description: 'Your profile settings have been saved successfully',
            action: {
                label: 'Undo',
                onClick: () => {
                    toast('Profile settings reverted', {
                        description: 'Your profile settings have been reverted',
                    });
                }
            },
        })
    }

    const handleChangePhoto = () => {
        toast('Photo changed successfully', {
            description: 'Your profile photo has been changed successfully',
            action: {
                label: 'Undo',
                onClick: () => {
                    toast('Photo reverted', {
                        description: 'Your profile photo has been reverted',
                    });
                }
            },
        })
    }

    return (
        <div >
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-foreground">Settings</h1>
                <p className="text-muted-foreground">Manage your account preferences</p>
            </div>

            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Profile Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col items-center md:items-start">
                            <Avatar className="w-24 h-24 mb-4">
                                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" />
                                <AvatarFallback>Y</AvatarFallback>
                            </Avatar>
                            <Button
                                variant="outline"
                                className="mt-2 bg-orange-500 hover:bg-orange-600 text-white cursor-pointer"
                                onClick={handleChangePhoto}
                            >
                                Change Photo
                            </Button>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Display Name</label>
                                <Input placeholder="Your name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input type="email" placeholder="your@email.com" />
                            </div>
                            <Button
                                className="bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer"
                                onClick={handleSaveProfile}
                            >
                                Save Changes
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Email Notifications</label>
                            <Switch
                                checked={notifications}
                                onCheckedChange={setNotifications}
                                className='cursor-pointer'
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Dark Mode</label>
                            <Switch
                                checked={darkMode}
                                onCheckedChange={setDarkMode}
                                className='cursor-pointer'
                            />
                        </div>
                        <Button
                            className="bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer"
                            onClick={handleSavePreferences}
                        >
                            Save Preferences
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Notifications</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Challenge Updates</label>
                            <Switch
                                checked={challengeUpdates}
                                onCheckedChange={setChallengeUpdates}
                                className='cursor-pointer'
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Achievements Alerts</label>
                            <Switch
                                checked={achievementsAlerts}
                                onCheckedChange={setAchievementsAlerts}
                                className='cursor-pointer'
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Community Messages</label>
                            <Switch
                                checked={communityMessages}
                                onCheckedChange={setCommunityMessages}
                                className='cursor-pointer'
                            />
                        </div>
                        <Button
                            className="bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer"
                            onClick={handleSaveNotifications}
                        >
                            Save Changes
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Privacy</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Profile Public</label>
                            <Switch
                                checked={profilePublic}
                                onCheckedChange={setProfilePublic}
                                className='cursor-pointer'
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Share Achievements</label>
                            <Switch
                                checked={shareAchievements}
                                onCheckedChange={setShareAchievements}
                                className='cursor-pointer'
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Community Tags</label>
                            <Switch
                                checked={communityTags}
                                onCheckedChange={setCommunityTags}
                                className='cursor-pointer'
                            />
                        </div>
                        <Button
                            className="bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer"
                            onClick={handleSavePrivacy}
                        >
                            Save Changes
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}