export interface MetricCard {
  title: string
  value: string
  change: number
  icon: string
  color: string
}

export interface ChartData {
  name: string
  value: number
  revenue?: number
  users?: number
  conversions?: number
}

export interface TableData {
  id: string
  campaign: string
  impressions: number
  clicks: number
  ctr: number
  cost: number
  conversions: number
  revenue: number
  status: 'active' | 'paused' | 'completed'
}

export const metricsData: MetricCard[] = [
  {
    title: 'Total Revenue',
    value: '$847,392',
    change: 12.5,
    icon: 'DollarSign',
    color: 'text-green-600'
  },
  {
    title: 'Active Users',
    value: '24,847',
    change: 8.2,
    icon: 'Users',
    color: 'text-blue-600'
  },
  {
    title: 'Conversions',
    value: '3,247',
    change: -2.1,
    icon: 'Target',
    color: 'text-purple-600'
  },
  {
    title: 'Growth Rate',
    value: '15.3%',
    change: 4.7,
    icon: 'TrendingUp',
    color: 'text-orange-600'
  }
]

export const revenueData: ChartData[] = [
  { name: 'Jan', revenue: 65000, users: 2400, conversions: 240 },
  { name: 'Feb', revenue: 78000, users: 2800, conversions: 280 },
  { name: 'Mar', revenue: 82000, users: 3200, conversions: 320 },
  { name: 'Apr', revenue: 95000, users: 3800, conversions: 380 },
  { name: 'May', revenue: 88000, users: 3500, conversions: 350 },
  { name: 'Jun', revenue: 102000, users: 4200, conversions: 420 },
  { name: 'Jul', revenue: 118000, users: 4800, conversions: 480 },
  { name: 'Aug', revenue: 125000, users: 5200, conversions: 520 },
  { name: 'Sep', revenue: 132000, users: 5600, conversions: 560 },
  { name: 'Oct', revenue: 145000, users: 6200, conversions: 620 },
  { name: 'Nov', revenue: 158000, users: 6800, conversions: 680 },
  { name: 'Dec', revenue: 172000, users: 7400, conversions: 740 }
]

export const channelData: ChartData[] = [
  { name: 'Google Ads', value: 35, color: '#4285F4' },
  { name: 'Facebook', value: 28, color: '#1877F2' },
  { name: 'Instagram', value: 18, color: '#E4405F' },
  { name: 'LinkedIn', value: 12, color: '#0A66C2' },
  { name: 'Twitter', value: 7, color: '#1DA1F2' }
]

export const deviceData: ChartData[] = [
  { name: 'Desktop', value: 45 },
  { name: 'Mobile', value: 38 },
  { name: 'Tablet', value: 17 }
]

export const campaignData: TableData[] = [
  {
    id: '1',
    campaign: 'Summer Sale 2024',
    impressions: 125000,
    clicks: 3750,
    ctr: 3.0,
    cost: 2500,
    conversions: 187,
    revenue: 18700,
    status: 'active'
  },
  {
    id: '2',
    campaign: 'Brand Awareness Q4',
    impressions: 89000,
    clicks: 2670,
    ctr: 3.0,
    cost: 1800,
    conversions: 134,
    revenue: 13400,
    status: 'active'
  },
  {
    id: '3',
    campaign: 'Holiday Promotion',
    impressions: 156000,
    clicks: 4680,
    ctr: 3.0,
    cost: 3200,
    conversions: 234,
    revenue: 23400,
    status: 'paused'
  },
  {
    id: '4',
    campaign: 'Product Launch',
    impressions: 78000,
    clicks: 2340,
    ctr: 3.0,
    cost: 1600,
    conversions: 117,
    revenue: 11700,
    status: 'completed'
  },
  {
    id: '5',
    campaign: 'Retargeting Campaign',
    impressions: 45000,
    clicks: 1800,
    ctr: 4.0,
    cost: 900,
    conversions: 108,
    revenue: 10800,
    status: 'active'
  }
]