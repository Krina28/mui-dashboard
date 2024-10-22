// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information(updateShowTable) {
  console.log("props", updateShowTable);

  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid
          container
          item
          xs={11}
          spacing={3}
          alignItems="center"
          sx={{ mx: "auto" }}
        >
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Your health,
                    <br />
                    cared for.
                  </>
                }
                description="All the healthcare facilities by best professionals."
              />
              <RotatingCardBack
                image={bgBack}
                title="Explore our Facilities"
                description="You will save a lot of time by taking our treatment and feeling like a home."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Start treatment",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                md={6}
                className="card-border"
                width={400}
                // marginRight={5}
              >
                <div
                  onClick={updateShowTable?.updateShowTable}
                  style={{ cursor: "pointer" }}
                >
                  <DefaultInfoCard
                    icon="health_and_safety_icon"
                    title="Submitted ENC"
                    description="34k"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6} className="card-border">
                <div
                  onClick={updateShowTable?.updateShowTable}
                  style={{ cursor: "pointer" }}
                >
                  <DefaultInfoCard
                    icon="health_and_safety_icon"
                    title="Accepted ENC"
                    description="17k"
                  />
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6} className="card-border">
                <div
                  onClick={updateShowTable?.updateShowTable}
                  style={{ cursor: "pointer" }}
                >
                  <DefaultInfoCard
                    icon="health_and_safety_icon"
                    title="Rejected ENC"
                    description="3k"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6} className="card-border">
                <DefaultInfoCard
                  icon="health_and_safety_icon"
                  title="Errored ENC"
                  description="5k"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

Information.defaultProps = {
  updateShowTable: function () {},
};

export default Information;
