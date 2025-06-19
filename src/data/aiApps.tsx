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
    image: 'dealagent2.png', // ✅ add path to image
    url: 'https://dealgpt.vercel.app'
  },
  {
    id: 2,
    name: 'NewsDigest',
    description: 'News Digest delivers personalized industry updates with customizable frequency, keeping you informed about your favorite companies effortlessly',
    benefit: 'Get AI-curated business insights on your schedule—smarter, faster, and tailored just for you.',
    category: 'Data',
    icon: Globe,
    gradient: 'bg-black',
    hoverGradient: 'bg-white',
    image: 'newletter.png',
    url: 'https://example.com/deal-agent'
  },
  {
    id: 3,
    name: 'Financial Report Agent',
    description: 'An AI-powered financial dashboard delivering real-time insights, industry comparisons, trends, and interactive charts',
    benefit: 'Gain instant, accurate financial understanding with live data and intuitive visualizations.',
    category: 'Finance',
    icon: FileBarChart,
    gradient: 'bg-black',
    hoverGradient: 'bg-white',
    image: 'finacialreport.png',
    url: 'https://example.com/deal-agent'
  },
  {
    id: 4,
    name: 'Quarterly company earnings',
    description: 'Quarterly newsletter generation automates the creation and distribution of updates and insights to your audience every three months.',
    benefit: 'This approach fosters consistent engagement, enhances brand visibility, and efficiently keeps stakeholders informed about key developments, saving both time and resources',
    category: 'Support',
    icon: FileBarChart,
    gradient: 'bg-black',
    hoverGradient: 'bg-white',
    image: 'comapanyearings.png',
    url: 'https://example.com/deal-agent'
  }
];
