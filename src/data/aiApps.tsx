import {
  DollarSign,
  Globe,
  FileBarChart
} from 'lucide-react';

export const aiApps = [
  {
    id: 1,
    name: 'DealAgent',
    description: 'Advanced AI-powered deal analysis and negotiation assistant that helps you close better deals faster.',
    benefit: 'Increase deal closure rate by 40% and negotiate better terms',
    category: 'Sales',
    icon: DollarSign,
    gradient: 'bg-black',
    hoverGradient: 'bg-white',
    image: '../images/dealagent.jpg' // ✅ add path to image
  },
  {
    id: 2,
    name: 'Web Scraping Agent',
    description: 'Intelligent web scraping tool that extracts and analyzes data from websites automatically.',
    benefit: 'Gather market intelligence 10x faster with automated data collection',
    category: 'Data',
    icon: Globe,
    gradient: 'bg-black',
    hoverGradient: 'bg-white',
    image: '/images/newletter.png'
  },
  {
    id: 3,
    name: 'Financial Report Agent',
    description: 'AI-driven financial analysis and reporting system that generates comprehensive insights.',
    benefit: 'Create detailed financial reports in minutes, not hours',
    category: 'Finance',
    icon: FileBarChart,
    gradient: 'bg-black',
    hoverGradient: 'bg-white',
    image: '/images/financialreport.png'
  },
  {
    id: 4,
    name: 'Support Assistant',
    description: 'Virtual customer service assistant that handles tickets and improves support satisfaction.',
    benefit: 'Automate up to 60% of support tickets',
    category: 'Support',
    icon: FileBarChart,
    gradient: 'bg-black',
    hoverGradient: 'bg-white',
    image: '/images/supportagent.png'
  }
];
