import {
  DollarSign,
  Globe,
  FileBarChart
} from 'lucide-react';

export const aiApps = [
  {
    id: 1,
    name: 'DealAgent',
    description: 'Deal Agent is an AI-powered assistant that analyzes uploaded RFP documents to provide strategic insights and real-time answers',
    benefit: ' It helps teams quickly assess bid opportunities, flag risks, and make informed go/no-go decisions',
    category: 'Sales',
    icon: DollarSign,
    gradient: 'bg-black',
    hoverGradient: 'bg-white',
    image: 'dealagent2.png' // ✅ add path to image
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
    image: 'newletter.png'
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
    image: 'finacialreport.png'
  },
  {
    id: 4,
    name: 'comapany earings',
    description: 'Quarterly newsletter generation automates the creation and distribution of updates and insights to your audience every three months.',
    benefit: 'This approach fosters consistent engagement, enhances brand visibility, and efficiently keeps stakeholders informed about key developments, saving both time and resources',
    category: 'Support',
    icon: FileBarChart,
    gradient: 'bg-black',
    hoverGradient: 'bg-white',
    image: 'comapanyearings.png'
  }
];
