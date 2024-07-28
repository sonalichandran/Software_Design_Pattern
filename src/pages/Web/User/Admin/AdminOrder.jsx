import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { BellRing, Check, Edit, Plus, TrashIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const AdminOrders = () => {
  const [open, setOpen] = useState(false)
  const orders = [
    {
      order: "INV001",
      paymentStatus: "Paid",
      totalAmount: "Rs.250.00",
      paymentMethod: "Credit Card",
    },
    {
      order: "INV002",
      paymentStatus: "Pending",
      totalAmount: "Rs.150.00",
      paymentMethod: "PayPal",
    },
    {
      order: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "Rs.350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      order: "INV004",
      paymentStatus: "Paid",
      totalAmount: "Rs.450.00",
      paymentMethod: "Credit Card",
    },
    {
      order: "INV005",
      paymentStatus: "Paid",
      totalAmount: "Rs.550.00",
      paymentMethod: "PayPal",
    },
    {
      order: "INV006",
      paymentStatus: "Pending",
      totalAmount: "Rs.200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      order: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "Rs.300.00",
      paymentMethod: "Credit Card",
    },
  ]
  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Orders</CardTitle>
          {/* <Button onClick={() => setOpen(!open)}>
            <Plus className='h-10 w-10 mr-2' /> Add
          </Button> */}
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">order</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead >Amount</TableHead>
                <TableHead className="flex justify-center ">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.order}>
                  <TableCell className="font-medium">{order.order}</TableCell>
                  <TableCell>{order.paymentStatus}</TableCell>
                  <TableCell>{order.paymentMethod}</TableCell>
                  <TableCell >{order.totalAmount}</TableCell>
                  <TableCell>
                    <span className='w-full h-full flex justify-center items-center gap-3'>
                      <Edit className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md' />
                      <TrashIcon className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md' />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* <Sheet open={open}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add User</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input id="password" className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400' onClick={() => setOpen(!open)}>Cancel</Button>
            <Button type="submit" className='w-1/2'>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet> */}
    </div>
  )
}

export default AdminOrders