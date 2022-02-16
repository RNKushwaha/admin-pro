import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const defaultOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Bar Chart',
    },
  },
}

const defaultData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [569, 890, 390, 700, 200, 300, 400],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [519, 290, 390, 900, 300, 200, 800],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

type BarChartProp = {
  options?: any
  data?: any
}

const BarChart = ({ options = {}, data = {} }: BarChartProp): JSX.Element => {
  const chartOptions = { ...defaultOptions, ...options }
  const chartData = { ...defaultData, ...data }
  return <Bar options={chartOptions} data={chartData} />
}

export default BarChart
