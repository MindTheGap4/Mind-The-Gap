import React from 'react';

const OrgList = props => {
  console.log("ORG LIST PROPS", props)
  console.log("ORG LIST PROPS PLUS", props.orgInfo.data)
  const {data} = props.orgInfo
  // console.log("ORG LIST DATA", data)
  if (data && data.data) {
    console.log('DATAAAAAA',data.data)
    return (
      <div className='row'>
        {data.data.map(org=>
          <div key={org.url}>
            <li>{org.charityName}</li>,
            <li>{org.url}</li>,
            <li>{org.donationUrl}</li>,
            <li>{org.state}</li>,
           <li>{org.city}</li>
           </div>
          )}
      </div>
    )
  } else {
    return null
  }

}

export default OrgList;
