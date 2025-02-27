
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import AdminAuth from '../components/admin/AdminAuth';
import AdminDashboard from '../components/admin/AdminDashboard';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Saraswati College</title>
      </Helmet>
      <Navbar />
      <main className="pt-24 pb-16 min-h-[calc(100vh-80px)]">
        <div className="container">
          <h1 className="text-3xl font-heading font-bold mb-8">Admin Dashboard</h1>
          
          {isAuthenticated ? (
            <AdminDashboard />
          ) : (
            <AdminAuth onAuthenticated={() => setIsAuthenticated(true)} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Admin;
