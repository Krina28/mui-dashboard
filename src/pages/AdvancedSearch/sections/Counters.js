import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MKBox from "components/MKBox";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={10}
              suffix="+"
              title="Enrolled"
              description="Enrolled in the portal"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider
              orientation="vertical"
              sx={{ display: { xs: "none", md: "block" }, mx: 0 }}
            />
            <DefaultCounterCard
              count={20}
              suffix="+"
              title="Processed"
              description="Processed with the doctors"
            />
            <Divider
              orientation="vertical"
              sx={{ display: { xs: "none", md: "block" }, ml: 0 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={25}
              title="Unprocessed"
              description="Unprocessed due to issue"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
