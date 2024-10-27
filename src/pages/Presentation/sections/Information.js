// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";

function Information(updateShowTable) {
  const cardData = [
    { title: 'Submitted ENC', value: 34 },
    { title: 'Accepted ENC', value: 17 },
    { title: 'Rejected ENC', value: 3 },
    { title: 'Errored ENC', value: 5 }
  ]

  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
              <div
                  onClick={updateShowTable?.updateShowTable}
                  style={{ cursor: "pointer" , flexDirection: 'row', justifyContent: 'space-evenly', display: 'flex'}}
              >
                {cardData?.map((cardVal) => {
                  return (
                    <Grid item xs={12} md={12} className="card-border" rowSpacing={2}>
                      <RotatingCard>
                        <RotatingCardFront
                          icon="health_and_safety_icon"
                          title={cardVal.title}
                          description={cardVal.value}
                        />
                        <RotatingCardBack description={cardVal.value} />
                      </RotatingCard>
                     </Grid>
                  )
                })}
              </div>
      </Container>
    </MKBox>
  );
}

Information.defaultProps = {
  updateShowTable: function () {},
};

export default Information;
