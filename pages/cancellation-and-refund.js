import React from 'react'

export default function privacy_policy() {
  return (
    <div className='text-black lg:px-20 px-6 grotesk-text lg:leading-8 lg:text-sm text-xs leading-6'>
      
      <p id='cancellation-refund' className='font-bold text-lg pt-6 pb-3'>Cancellation & Refund policy</p>
      <p className='pb-4'>Once Advanced Paid there is No Refund if Booking is Canceled by Customer Because that Property is Specially blocked for Customer.There is NO REFUND of Advance amount paid.We Suggest Customer to Visit the location atleast 1 (one) Hour before Pickup Time</p>
      <p className='font-bold text-lg pt-6 pb-2 border-t-2 border-t-gray-300'>WHAT DATA IS COLLECTED</p>
      <p className='font-bold text-lg pt-2 pb-3'>LOCATION</p>
      <ol className='pl-6 '>
        <li  className='list-decimal'>We actively gather and use GPS location data from users of your mobile device-accessible location-enabled services. This information includes latitude, longitude, altitude, and the corresponding timestamp from your mobile device. By adding location-based features and relevant information, we hope to tailor our service offers. That is why we are collecting this data. We use this information, for example, to tell users where properties are available nearby you.</li>
        <li  className='list-decimal'>Your personal data is needed for some App functionality. In such circumstances, we might link the location data we've collected to other pertinent data we have on file about you, such as your device ID. It's crucial to remember that we only save this information for as long as it takes us to provide you with our services.</li>
        <li  className='list-decimal'>As long as their device permits it, they may withdraw their consent at any moment by turning off GPS or other location-tracking features. It is recommended that users consult the manufacturer's instructions pertaining to their device for additional advice on how to adjust these settings.</li>
        <li  className='list-decimal'>Customers can search available properties based on stored locations with ease thanks to our user-friendly application. With the help of this feature, users can easily find nearby properties and evaluate competing pricing offers.</li>
        <li  className='list-decimal pb-4'>We advise referring to the manufacturer's instructions that are particular to your device for more details or comprehensive instructions on how to adjust its settings.</li>
      </ol>
    </div>
  )
}
