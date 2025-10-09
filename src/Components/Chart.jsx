import React from "react";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const Chart = ({ ratings }) => {
  console.log(ratings);
  return (
    <div>
      <div>
        <div className="bg-base-100 border rounded-xl p-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              layout="vertical"
              width={500}
              height={400}
              data={ratings}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <XAxis type="number" />
              <YAxis
                dataKey="name"
                type="category"
                scale="band"
                reversed={true}
              />
              <Tooltip />

              <Bar dataKey="count" fill="#FF8811" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart;
