import {
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js'
import { Bubble } from 'react-chartjs-2'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

export const defaultOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}

export const defaultData = {
  datasets: [
    {
      label: 'Red dataset',
      data: [
        { x: 17, y: -9, r: 11 },
        { x: -83, y: -14, r: 17 },
        { x: -41, y: -94, r: 12 },
        { x: 53, y: 47, r: 7 },
        { x: 24, y: -64, r: 20 },
        { x: 59, y: 95, r: 13 },
        { x: 69, y: 33, r: 16 },
        { x: 36, y: 35, r: 20 },
        { x: -51, y: 15, r: 20 },
        { x: 33, y: -37, r: 17 },
        { x: -55, y: -28, r: 15 },
        { x: -76, y: 64, r: 10 },
        { x: 35, y: 70, r: 14 },
        { x: -27, y: 1, r: 8 },
        { x: -21, y: -81, r: 14 },
        { x: 11, y: 16, r: 12 },
        { x: 1, y: -84, r: 19 },
        { x: 14, y: -82, r: 15 },
        { x: 72, y: -59, r: 17 },
        { x: -45, y: 28, r: 13 },
        { x: -83, y: -88, r: 20 },
        { x: -100, y: -18, r: 17 },
        { x: -25, y: 44, r: 8 },
        { x: 8, y: -13, r: 11 },
        { x: 33, y: 27, r: 5 },
        { x: 97, y: 61, r: 6 },
        { x: -97, y: -92, r: 20 },
        { x: -63, y: -14, r: 9 },
        { x: 38, y: -9, r: 12 },
        { x: 93, y: -100, r: 11 },
        { x: -44, y: -17, r: 16 },
        { x: 71, y: -10, r: 9 },
        { x: 78, y: -75, r: 5 },
        { x: 73, y: -4, r: 19 },
        { x: -81, y: 50, r: 13 },
        { x: 79, y: -79, r: 9 },
        { x: 13, y: 71, r: 17 },
        { x: 71, y: 31, r: 15 },
        { x: -97, y: -78, r: 8 },
        { x: -84, y: 76, r: 19 },
        { x: -55, y: -19, r: 9 },
        { x: -41, y: 19, r: 9 },
        { x: 25, y: 9, r: 6 },
        { x: -47, y: 57, r: 9 },
        { x: 3, y: 81, r: 19 },
        { x: 79, y: -14, r: 15 },
        { x: 18, y: 36, r: 15 },
        { x: -44, y: 83, r: 12 },
        { x: 98, y: -83, r: 11 },
        { x: 36, y: 74, r: 15 },
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Blue dataset',
      data: [
        { x: -48, y: -48, r: 19 },
        { x: 88, y: -39, r: 10 },
        { x: 22, y: 25, r: 13 },
        { x: 95, y: 4, r: 10 },
        { x: -87, y: -38, r: 13 },
        { x: -74, y: -47, r: 16 },
        { x: -68, y: -79, r: 5 },
        { x: 67, y: -96, r: 14 },
        { x: -78, y: -89, r: 14 },
        { x: 89, y: 33, r: 15 },
        { x: 1, y: 98, r: 9 },
        { x: 90, y: -17, r: 17 },
        { x: -69, y: -36, r: 18 },
        { x: -61, y: 60, r: 17 },
        { x: -84, y: -19, r: 9 },
        { x: 78, y: 31, r: 13 },
        { x: 3, y: -56, r: 13 },
        { x: -37, y: 9, r: 7 },
        { x: 96, y: -46, r: 9 },
        { x: -61, y: 52, r: 12 },
        { x: -73, y: 3, r: 8 },
        { x: -21, y: -31, r: 16 },
        { x: -70, y: -10, r: 20 },
        { x: -73, y: 94, r: 6 },
        { x: 75, y: -52, r: 6 },
        { x: 41, y: -72, r: 20 },
        { x: 62, y: 74, r: 6 },
        { x: -61, y: 82, r: 16 },
        { x: -11, y: 47, r: 13 },
        { x: -66, y: -11, r: 8 },
        { x: -58, y: -80, r: 12 },
        { x: 99, y: 34, r: 19 },
        { x: 3, y: -7, r: 15 },
        { x: 42, y: -33, r: 16 },
        { x: 29, y: -22, r: 18 },
        { x: -69, y: 65, r: 7 },
        { x: 92, y: -75, r: 7 },
        { x: 68, y: 62, r: 13 },
        { x: -49, y: -22, r: 20 },
        { x: -91, y: 36, r: 8 },
        { x: -65, y: -74, r: 9 },
        { x: 35, y: -86, r: 8 },
        { x: -10, y: 54, r: 13 },
        { x: -71, y: -37, r: 14 },
        { x: 96, y: 52, r: 14 },
        { x: 57, y: 3, r: 11 },
        { x: 31, y: 26, r: 8 },
        { x: -79, y: -63, r: 15 },
        { x: 46, y: 58, r: 20 },
        { x: -48, y: 21, r: 14 },
      ],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

type BubbleChartProp = {
  options?: any
  data?: any
}

const BubbleChart = ({
  options = {},
  data = {},
}: BubbleChartProp): JSX.Element => {
  const chartOptions = { ...defaultOptions, ...options }
  const chartData = { ...defaultData, ...data }
  return <Bubble options={chartOptions} data={chartData} />
}

export default BubbleChart
