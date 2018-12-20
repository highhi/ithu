import { Link } from '@reach/router'
import * as React from 'react'
import Nav from '../../../containers/Nav/Nav'
import User from '../../../containers/User/User'
import { SiteName } from '../../selectors/SiteName/SiteName'
import { Grid } from '../Grid/Grid'

const rows = ['auto']
const columns = ['auto', '1fr', 'auto', 'auto']
const areas = ['title', 'from', 'sort']

const Header: React.SFC = ({ children }) => {
  return (
    <Grid as="header" alignItems="center" rows={rows} columns={columns} areas={areas} columnGap="30px">
      <SiteName>
        <Link to="/">iThu</Link>
      </SiteName>
      <div>{children}</div>
      <Nav />
      <User />
    </Grid>
  )
}

export default Header
