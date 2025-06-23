import {
  DollarSign,
  Globe,
  FileBarChart
} from 'lucide-react';

export const aiApps = [
  {
    id: 1,
    name: 'Deal Qualifier',
    description: 'An AI-powered assistant that analyzes uploaded RFx documents to provide strategic insights and real-time answers',
    benefit:  ' Quickly assess and qualify bid opportunities, flag risks, and make informed go/no-go decisions',
    category: 'Sales',
    icon: DollarSign,
    gradient: 'bg-black',
    hoverGradient: 'bg-white',
    image: 'dealagent2.png', // ✅ add path to image
    url: 'https://dealgpt.vercel.app'
  },
  {
    id: 2,
    name: 'My Customers in News',
    description: 'Delivers personalized customer and industry updates with customizable frequency, keeping you informed about your key accounts',
    benefit: 'AI-curated timely business insights of your customers that helps have a meaningful conversation with your client',
    category: 'Data',
    icon: Globe,
    gradient: 'bg-black',
    hoverGradient: 'bg-white',
    image: 'newletter.png',
    url: 'https://example.com/deal-agent'
  },
  {
    id: 3,
    name: 'Financial Assessment Agent',
    description: 'AI-powered financial dashboard delivering real-time insights, industry comparisons and trends',
    benefit: 'Gain instant, accurate financial understanding of your customer prospect with live data and intuitive visualizations',
    category: 'Finance',
    icon: FileBarChart,
    gradient: 'bg-black',
    hoverGradient: 'bg-white',
    image: 'finacialreport.png',
    url: 'https://finance-frontend-nine-mu.vercel.app/'
  },
  {
    id: 4,
    name: 'Quarterly earnings digest',
    description: 'Insightful summary of quarterly earnings release of companies to reveal big bets and investment direction',
    benefit: 'Comprehensive assessment of quarterly earnings results and commentary to derive insights on technology and business bets of your customer',
    category: 'Support',
    icon: FileBarChart,
    gradient: 'bg-black',
    hoverGradient: 'bg-white',
    image: 'comapanyearings.png',
    url: 'https://v0-new-project-eep09ejmzrq.vercel.app/'
  }
];
