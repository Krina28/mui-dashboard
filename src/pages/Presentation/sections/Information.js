// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";

function Information(updateShowTable) {
  const cardData = [
    { title: 'Submitted Encounter', value: 10000 },
    { title: 'Accepted Encounter', value: 8000 },
    { title: 'Rejected Encounter', value: 1000 },
    { title: 'Errored Encounter', value: 1000 }
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
                    <Grid item xs={12} md={12} className="card-border" rowSpacing={2} style={{ marginRight: '20px' }}>
                      <RotatingCard>
                        <RotatingCardFront
                          icon="health_and_safety_icon"
                          title={cardVal.title}
                          description={cardVal.value}
                        />
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
