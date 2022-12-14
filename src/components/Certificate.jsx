import React from 'react'

export default function Certificate({certificates}) {
  return (
    <div >
        {
            certificates.map(certificate => <div>{certificate.certificateName}</div>)
        }
    </div>
  )
}
