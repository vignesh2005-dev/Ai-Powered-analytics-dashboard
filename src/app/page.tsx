"use client"

import { useState, useEffect, useCallback } from "react"
import { Header } from "@/components/ui/header"
import { MetricCard } from "@/components/ui/metric-card"
import { RevenueChart, UserGrowthChart, ChannelDistributionChart } from "@/components/ui/charts"
import { DataTable } from "@/components/ui/data-table"
import { MetricCardSkeleton, ChartSkeleton, TableSkeleton } from "@/components/ui/loading-skeleton"
import { motion } from "framer-motion"
import { 
  metricsData, 
  revenueData, 
  channelData, 
  campaignData 
} from "@/lib/data"

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(new Date())

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date())
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
            <div className="h-4 w-96 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <MetricCardSkeleton key={i} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ChartSkeleton />
            <ChartSkeleton />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ChartSkeleton />
            <div className="space-y-4">
              <ChartSkeleton />
            </div>
          </div>
          
          <TableSkeleton />
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back! Here's what's happening with your campaigns today.
          </p>
        </motion.div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metricsData.map((metric, index) => (
            <MetricCard
              key={metric.title}
              {...metric}
              index={index}
            />
          ))}
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <RevenueChart 
            data={revenueData} 
            title="Revenue Trend" 
          />
          <UserGrowthChart 
            data={revenueData} 
            title="User Growth" 
          />
        </div>

        {/* Secondary Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChannelDistributionChart 
            data={channelData} 
            title="Traffic Sources" 
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Performance Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-blue-100 text-sm">This Month</p>
                  <p className="text-2xl font-bold">$847K</p>
                  <p className="text-blue-100 text-sm">+12.5% vs last month</p>
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Active Campaigns</p>
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-blue-100 text-sm">3 new this week</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Avg. CTR</span>
                  <span className="font-semibold">3.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Cost per Click</span>
                  <span className="font-semibold">$1.24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</span>
                  <span className="font-semibold">4.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">ROAS</span>
                  <span className="font-semibold text-green-600">7.2x</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Data Table */}
        <DataTable 
          data={campaignData} 
          title="Campaign Performance" 
        />
      </main>
    </div>
  )
}