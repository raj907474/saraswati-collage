
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

interface AdminAuthProps {
  onAuthenticated: () => void;
}

const AdminAuth: React.FC<AdminAuthProps> = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // For simplicity, we're using a hardcoded password
  // In production, use environment variables or a backend service
  const ADMIN_PASSWORD = 'saraswati123';
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        // Set a flag in localStorage to persist the login
        localStorage.setItem('adminAuthenticated', 'true');
        onAuthenticated();
        toast({
          title: "Authentication successful",
          description: "Welcome to the admin dashboard",
        });
      } else {
        toast({
          title: "Authentication failed",
          description: "Invalid password. Please try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className="flex justify-center py-8">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>
            Please enter your admin password to access the dashboard
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <Input 
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter admin password"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full bg-saraswati-700 hover:bg-saraswati-800"
              disabled={isLoading}
            >
              {isLoading ? "Authenticating..." : "Login"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default AdminAuth;
