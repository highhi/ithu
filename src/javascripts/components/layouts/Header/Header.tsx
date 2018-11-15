import * as React from 'react'
import { ConditionForm } from '../../../containers/ConditionForm/ConditionForm'
import { SiteName } from '../../selectors/SiteName/SiteName'
import { Grid } from '../Grid/Grid'

const rows = ['auto']
const columns = ['auto', '1fr', 'auto']
const areas = ['title', 'from', 'sort']

export const Header: React.SFC = () => {
  return (
    <Grid as="header" rows={rows} columns={columns} areas={areas} columnGap="30px">
      <SiteName>iThu</SiteName>
      <ConditionForm />
    </Grid>
  )
}
