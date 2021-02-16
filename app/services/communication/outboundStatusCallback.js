

const OutboundCallStatusCallback = ( args ) => {
    const {
      body,
      params,
    } = args

    const {
      CallStatus,
    } = body

    if ( CallStatus === 'ringing' ) {
      console.log( 'RINGINGGGGGGGGGGGGG', body, params )
    }

    if ( CallStatus === 'in-progress' ) {
      console.log( 'IN PROGRESSSSSSSSSS', body )
    }

    if ( CallStatus === 'completed' ||  CallStatus === 'no-answer' ) {
      console.log( 'Completed or No Answer', body )
    }
  }

export default OutboundCallStatusCallback
