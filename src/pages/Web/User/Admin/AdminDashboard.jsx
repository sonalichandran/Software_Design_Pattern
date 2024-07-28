import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BarChart, DollarSign, Package, ShoppingBag, User, Users } from 'lucide-react'
const AdminDashboard = () => {
    return (
        <div className="flex flex-row p-4 gap-4">
            <Card className='w-1/4 shadow-lg shadow-slate-700'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Users
                    </CardTitle>
                    <Users className="h-6 w-6 text-gray/100" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">10000</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 shadow-lg shadow-slate-700'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Active Users
                    </CardTitle>
                    <Users className="h-6 w-6 text-gray/100" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">9999</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 shadow-lg shadow-slate-700 '>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Products
                    </CardTitle>
                    <ShoppingBag className="h-6 w-6 text-gray/100" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">10,000</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 shadow-lg shadow-slate-700'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                       Total Orders
                    </CardTitle>
                    <DollarSign className="h-6 w-6 text-gray/100" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">10,000,00</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 shadow-lg shadow-slate-700'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                       Total Vendors
                    </CardTitle>
                    <BarChart className="h-6 w-6 text-gray/100" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">200+</div>
                </CardContent>
            </Card>
        </div>
    )
}

export default AdminDashboard