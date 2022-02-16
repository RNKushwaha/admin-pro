import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const defaultOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Line Chart',
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

type LineChartProp = {
  options?: any
  data?: any
}

const LineChart = ({ options = {}, data = {} }: LineChartProp): JSX.Element => {
  const chartOptions = { ...defaultOptions, ...options }
  const chartData = { ...defaultData, ...data }
  return <Line options={chartOptions} data={chartData} />
}

export default LineChart
