import React from "react";
import Typography from "@material-ui/core/Typography";
import fakeData from "../../data/fakeData";
import Grid from "@material-ui/core/Grid";
import CompanyCards from "./CompanyCards";
import Pagination from "@material-ui/lab/Pagination";
import { Divider, Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";

function CompaniesPage(props) {
  const itemsPerPage = 9;
  const [page, setPage] = React.useState(1);
  const [numberOfPages] = React.useState(
    Math.ceil(fakeData.length / itemsPerPage)
  );

  /* Slice the data and show number of Cards in one Page */
  const currentCards = fakeData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Change page
  const handleChange = (event, value) => {
    setPage(value);
  };
  const { t } = useTranslation();

  return (
    <>
      <Typography
        component="h4"
        variant="h4"
        color="primary"
        style={{ textAlign: "center" }}
      >
        {t("Companies.title")}
      </Typography>

      {/* Map Company Cards */}
      <CompanyCards cards={currentCards} />

      <Grid container style={{ justifyContent: "center", marginBottom: 20 }}>
        <Grid item>
          <Divider />
          <Box component="span">
            <Pagination
              count={numberOfPages}
              page={page}
              onChange={handleChange}
              defaultPage={1}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default CompaniesPage;
