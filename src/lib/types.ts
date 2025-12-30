export interface Feature {
  id: number;
  title: string;
  emoji: string;
  description: string;
  inputs: string[];
  outputs: string[];
  architecture: string[];
}

export interface FormData {
  [key: string]: any;
}

export interface APIResponse {
  success: boolean;
  data: any;
  message?: string;
}

export interface ResourceTableEntry {
  resource: string;
  priority: 'High' | 'Medium' | 'Low';
  quantity: number;
  location: string;
  eta: string;
}

export interface SpeciesEntry {
  name: string;
  confidence: number;
  count: number;
  status: 'Endangered' | 'Vulnerable' | 'Stable';
}

export interface TimelineEntry {
  date: string;
  event: string;
  impact: 'Positive' | 'Negative' | 'Neutral';
  severity: number;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
  }[];
}

