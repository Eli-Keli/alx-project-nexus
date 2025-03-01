import React from 'react';


const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="h-screen flex">
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;