import type React from "react"

interface ChartProps {
  data: { name: string; value: number }[]
  categories: string[]
  index: string
  colors: string[]
  valueFormatter?: (value: number) => string
  className?: string
}

export const BarChart: React.FC<ChartProps> = ({ data, categories, index, colors, valueFormatter, className }) => {
  const maxValue = Math.max(...data.map((item) => item.value))

  return (
    <div className={`${className} w-full`}>
      <div className="flex flex-col h-full">
        <div className="flex-1 flex items-end space-x-2">
          {data.map((item, i) => {
            const height = (item.value / maxValue) * 100
            return (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div className="w-full flex justify-center mb-1">
                  <span className="text-xs font-medium">
                    {valueFormatter ? valueFormatter(item.value) : item.value}
                  </span>
                </div>
                <div
                  className="w-full rounded-t-sm"
                  style={{
                    height: `${height}%`,
                    backgroundColor: colors[0] || "#14b8a6",
                    minHeight: "4px",
                  }}
                />
              </div>
            )
          })}
        </div>
        <div className="mt-2 flex justify-between space-x-2">
          {data.map((item, i) => (
            <div key={i} className="flex-1 text-center">
              <span className="text-xs text-gray-500 truncate block">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const LineChart: React.FC<ChartProps> = ({ data, categories, index, colors, valueFormatter, className }) => {
  const maxValue = Math.max(...data.map((item) => item.value))
  const minValue = Math.min(...data.map((item) => item.value))
  const range = maxValue - minValue

  // Calculate points for the SVG path
  const points = data
    .map((item, i) => {
      const x = (i / (data.length - 1)) * 100
      const y = 100 - ((item.value - minValue) / (range || 1)) * 100
      return `${x},${y}`
    })
    .join(" ")

  return (
    <div className={`${className} w-full`}>
      <div className="relative h-full w-full">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-500">
          <div>{valueFormatter ? valueFormatter(maxValue) : maxValue}</div>
          <div>{valueFormatter ? valueFormatter(minValue) : minValue}</div>
        </div>

        {/* Chart area */}
        <div className="absolute left-12 right-0 top-0 bottom-6 bg-white border-b border-l">
          {/* Grid lines */}
          <div className="absolute inset-0">
            <div className="border-b border-dashed border-gray-200 h-1/4"></div>
            <div className="border-b border-dashed border-gray-200 h-1/4"></div>
            <div className="border-b border-dashed border-gray-200 h-1/4"></div>
            <div className="border-b border-dashed border-gray-200 h-1/4"></div>
          </div>

          {/* Line chart */}
          <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none">
            <polyline
              points={points}
              fill="none"
              stroke={colors[0] || "#14b8a6"}
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            {data.map((item, i) => {
              const x = (i / (data.length - 1)) * 100
              const y = 100 - ((item.value - minValue) / (range || 1)) * 100
              return (
                <circle
                  key={i}
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r="4"
                  fill="white"
                  stroke={colors[0] || "#14b8a6"}
                  strokeWidth="2"
                />
              )
            })}
          </svg>
        </div>

        {/* X-axis labels */}
        <div className="absolute left-12 right-0 bottom-0 h-6 flex justify-between text-xs text-gray-500">
          {data.map((item, i) => (
            <div key={i} className="text-center" style={{ width: `${100 / data.length}%` }}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const PieChart: React.FC<ChartProps> = ({ data, index, categories, valueFormatter, colors, className }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  let currentAngle = 0

  return (
    <div className={`${className} w-full`}>
      <div className="relative h-full w-full flex justify-center">
        <svg viewBox="0 0 100 100" className="w-3/4 h-3/4">
          {data.map((item, i) => {
            const percentage = (item.value / total) * 100
            const angle = (percentage / 100) * 360

            // Calculate the SVG arc path
            const startAngle = currentAngle
            const endAngle = currentAngle + angle
            currentAngle = endAngle

            const startX = 50 + 50 * Math.cos((startAngle - 90) * (Math.PI / 180))
            const startY = 50 + 50 * Math.sin((startAngle - 90) * (Math.PI / 180))
            const endX = 50 + 50 * Math.cos((endAngle - 90) * (Math.PI / 180))
            const endY = 50 + 50 * Math.sin((endAngle - 90) * (Math.PI / 180))

            const largeArcFlag = angle > 180 ? 1 : 0

            const pathData = [
              `M 50 50`,
              `L ${startX} ${startY}`,
              `A 50 50 0 ${largeArcFlag} 1 ${endX} ${endY}`,
              `Z`,
            ].join(" ")

            return (
              <path
                key={i}
                d={pathData}
                fill={colors[i % colors.length] || `hsl(${i * 45}, 70%, 50%)`}
                stroke="white"
                strokeWidth="1"
              />
            )
          })}
        </svg>

        {/* Legend */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-center gap-4">
          {data.map((item, i) => (
            <div key={i} className="flex items-center">
              <div
                className="w-3 h-3 mr-1 rounded-sm"
                style={{ backgroundColor: colors[i % colors.length] || `hsl(${i * 45}, 70%, 50%)` }}
              />
              <span className="text-xs">
                {item.name} ({valueFormatter ? valueFormatter(item.value) : item.value})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

