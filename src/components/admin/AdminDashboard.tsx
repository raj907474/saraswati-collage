
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FacultyManager from './FacultyManager';
import ManagementManager from './ManagementManager';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('faculty');
  
  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    window.location.reload();
    toast({
      title: "Logged out",
      description: "You have been logged out of the admin dashboard",
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-heading font-semibold">Manage College Data</h2>
        <Button 
          variant="outline" 
          onClick={handleLogout}
          className="flex items-center gap-2"
        >
          <LogOut size={16} />
          Logout
        </Button>
      </div>
      
      <Tabs 
        defaultValue="faculty" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="faculty">Faculty Management</TabsTrigger>
          <TabsTrigger value="management">Management Team</TabsTrigger>
        </TabsList>
        
        <TabsContent value="faculty" className="p-1">
          <FacultyManager />
        </TabsContent>
        
        <TabsContent value="management" className="p-1">
          <ManagementManager />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
