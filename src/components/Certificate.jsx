import React from 'react'

export default function Certificate({certificates}) {
  return (
    <div className='border-rose-600 border-2'>
        {
            certificates.map(certificate => <div>{certificate.certificateName}</div>)
        }
    </div>
  )
}
