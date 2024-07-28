import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, Tooltip, Legend } from 'recharts';
import { DollarSign, Package, ShoppingBag, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { month: 'January', desktop: 4000, mobile: 2400 },
  { month: 'February', desktop: 3000, mobile: 1398 },
  { month: 'March', desktop: 2000, mobile: 9800 },
  { month: 'April', desktop: 2780, mobile: 3908 },
  { month: 'May', desktop: 1890, mobile: 4800 },
  { month: 'June', desktop: 2390, mobile: 3800 },
  { month: 'July', desktop: 3490, mobile: 4300 },
];

const AdminDashboard = () => {
  return (
    <>
      <div className="flex flex-wrap p-4 gap-4">
        <Card className='w-full md:w-1/4 shadow-lg shadow-slate-700'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Users
            </CardTitle>
            <Users className="h-6 w-6" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10000</div>
          </CardContent>
        </Card>
        <Card className='w-full md:w-1/4 shadow-lg shadow-slate-700'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Users
            </CardTitle>
            <Users className="h-6 w-6 " />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9999</div>
          </CardContent>
        </Card>
        <Card className='w-full md:w-1/4 shadow-lg shadow-slate-700'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Products
            </CardTitle>
            <ShoppingBag className="h-6 w-6 " />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10,000</div>
          </CardContent>
        </Card>
        <Card className='w-full md:w-1/4 shadow-lg shadow-slate-700'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Orders
            </CardTitle>
            <DollarSign className="h-6 w-6 " />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10,000,00</div>
          </CardContent>
        </Card>
        <Card className='w-full md:w-1/4 shadow-lg shadow-slate-700'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Vendors
            </CardTitle>
            <Package className="h-6 w-6 " />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">200+</div>
          </CardContent>
        </Card>
      </div>
      <div className="p-4">
        <BarChart
          width={600}
          height={300}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <Tooltip />
          <Legend />
          <Bar dataKey="desktop" fill="#8884d8" />
          <Bar dataKey="mobile" fill="#82ca9d" />
        </BarChart>
      </div>
    </>
  );
}

export default AdminDashboard;
