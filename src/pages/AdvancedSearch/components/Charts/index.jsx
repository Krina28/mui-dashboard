import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import MKBox from "components/MKBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { mobileAndDesktopOS } from "./data";

export default function PieAnimation() {
  return (
    <>
      <MKBox component="section" py={5}>
        <Container>
          <Grid
            container
            item
            xs={12}
            sx={{ width: "100%" }}
            justifyContent={"space-between"}
            style={{ flex: 1, flexDirection: "row" }}
          >
            <div style={{ flex: 1, borderColor: "red", borderWidth: 2 }}>
              <PieChart
                colors={['#1a3fe8', '#6bd3f1','#1A73E8']}
                height={300}
                width={600}
                series={[
                  {
                    data: mobileAndDesktopOS.slice(0, 4),
                    innerRadius: 100,
                    // arcLabel: (params) => params.label ?? "",
                    // arcLabelMinAngle: 20,
                    // valueFormatter,
                  },
                ]}
                skipAnimation={false}
              />
            </div>

            <div
              style={{
                flex: 1,
                alignSelf: "center",
              }}
            >
              <SparkLineChart
                colors={["#1A73E8"]}
                plotType="bar"
                data={[10000, 8000, 1000, 1000]}
                height={100}
                showTooltip={true}
                showHighlight={true}
              />
            </div>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}
