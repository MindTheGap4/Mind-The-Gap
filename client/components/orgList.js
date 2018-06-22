import React from 'react'

const OrgList = props => {
  const {data} = props.orgInfo
  if (data && data.data) {
    return (
      <div className="row">
        {data.data.map(org => (
          <div key={org.url}>
            <li>{org.charityName}</li>,
            <li>{org.url}</li>,
            <li>{org.donationUrl}</li>,
            <li>{org.state}</li>,
            <li>{org.city}</li>
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default OrgList
