import React from 'react'
import { ScrollView } from 'react-native'
import Card from '.'
import { widthScale } from '../utils/size'
import DropIcon from '../assets/droplet.svg'
import { LineChart } from 'react-native-chart-kit'
import { useTheme } from '../context/theme'

const MoistureCard = () => {
  const theme = useTheme()
  return (
    <Card icon={DropIcon} title="Moisture">
      <ScrollView horizontal>
        <LineChart
          data={{
            labels: [
              '12:00',
              '13:00',
              '14:00',
              '15:00',
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
              '21:00',
              '22:00',
              '23:00',
              '00:00',
            ],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={widthScale(200)} // from react-native
          height={220}
          yAxisSuffix="%"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            decimalPlaces: 1, // optional, defaults to 2dp
            color: () => theme.colors.blue,
            labelColor: (opacity = 1) => theme.colors.generateBlack(opacity),
            style: {
              borderRadius: 16,
            },
            propsForBackgroundLines: {
              strokeWidth: 1,
              opacity: 0.2,
            },
            propsForDots: {
              r: '4',
              strokeWidth: '2',
            },
            fillShadowGradientFrom: theme.colors.blue,
            fillShadowGradientTo: theme.colors.blue,
            strokeWidth: 1,
          }}
          bezier
          getDotColor={() => theme.colors.blue}
          withScrollableDot={false}
          transparent
        />
      </ScrollView>
    </Card>
  )
}

export default MoistureCard
