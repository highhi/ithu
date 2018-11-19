import { Link } from '@reach/router'
import * as React from 'react'
import { SiteName } from '../../selectors/SiteName/SiteName'
import { Grid } from '../Grid/Grid'

const rows = ['auto']
const columns = ['auto', '1fr', 'auto']
const areas = ['title', 'from', 'sort']

const Header: React.SFC = ({ children }) => {
  return (
    <Grid as="header" rows={rows} columns={columns} areas={areas} columnGap="30px">
      <SiteName>
        <Link to="/">iThu</Link>
      </SiteName>
      {children}
      <Link to="/login">login</Link>
    </Grid>
  )
}

export default Header
