"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn, formatPercentage } from "@/lib/utils"
import { motion } from "framer-motion"
import { 
  DollarSign, 
  Users, 
  Target, 
  TrendingUp, 
  TrendingDown,
  ArrowUp,
  ArrowDown
} from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  change: number
  icon: string
  color: string
  index: number
}

const iconMap = {
  DollarSign,
  Users,
  Target,
  TrendingUp
}

export function MetricCard({ title, value, change, icon, color, index }: MetricCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap]
  const isPositive = change > 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          <div className={cn("p-2 rounded-lg bg-opacity-10", color.replace('text-', 'bg-'))}>
            <IconComponent className={cn("h-4 w-4", color)} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-2">{value}</div>
          <div className="flex items-center text-xs">
            {isPositive ? (
              <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
            ) : (
              <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
            )}
            <span className={cn(
              "font-medium",
              isPositive ? "text-green-600" : "text-red-600"
            )}>
              {formatPercentage(Math.abs(change))}
            </span>
            <span className="text-muted-foreground ml-1">from last month</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}