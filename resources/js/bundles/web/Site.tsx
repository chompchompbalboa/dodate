//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import SiteHeader from '@web/Site/SiteHeader'
import SiteSplash from '@web/Site/SiteSplash'
import SiteRow from '@web/Site/SiteRow'
import SiteRowContent from '@web/Site/SiteRowContent'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Site = () => {
  return (
      <Container>
        <SiteHeader />
        <SiteSplash />
        <SiteRow>
          <SiteRowContent>
            Focus on the current day's to-dos
          </SiteRowContent>
          <SiteRowContent>
          </SiteRowContent>
        </SiteRow>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div``

//-----------------------------------------------------------------------------
// Mount to DOM
//-----------------------------------------------------------------------------
if (document.getElementById('react-container')) {
	ReactDOM.render(<Site />, document.getElementById('react-container'))
}
