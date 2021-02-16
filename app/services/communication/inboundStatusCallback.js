
const InboundCallStatusCallback = ( args ) => {
    const {
      body,
    } = args

    console.log( 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee inbound status callback', body )


    const {
      CallStatus,
    } = body

    if ( CallStatus === 'initiated' ) {
      console.log('Initiated')
    }
    
    if ( CallStatus === 'in-progress' ) {
      io.emit( 'callAnswered', {})
    }
  
    if ( CallStatus === 'completed' ) {
      console.log('Completed')
    }
  }

export default InboundCallStatusCallback
