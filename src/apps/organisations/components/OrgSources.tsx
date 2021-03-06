import React from "react";
import { Grid, Paper, Typography, List } from "@material-ui/core";
import {OrgSource} from "../types";
interface Props {
  sources: OrgSource[];
}

const OrganisationSources: React.FC<Props> = ({ sources }) => {
  return (
    <Grid item xs={12} component='div'>
      <Paper className='fieldsetParent'>
        <fieldset>
          <Typography component='legend' variant='h5' gutterBottom>
              Sources
          </Typography>
          <List>
            <ul>
              {sources?.length ?
                sources.map(s => <li key={s.short_code}>{s.name}</li>) :
                <li>No sources found!</li>}
            </ul>
          </List>
        </fieldset>
      </Paper>
    </Grid>
  );
};

export default OrganisationSources;
