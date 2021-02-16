import twilio from 'twilio'
import config from '../../../config/app'

const VoiceResponse = twilio.twiml.VoiceResponse

const OutboundCall = ( args ) => {
    const {
      To,
      From,
    } = args

    let voiceResponse = new VoiceResponse()
    const dial = voiceResponse.dial({
      callerId: From,
      timeout: 10,
    } )
    dial.number( {
      statusCallbackEvent: 'initiated ringing answered completed',
      statusCallback: `${ config.get( 'twilio.callbackURL' ) }/api/v1/communication/outboundCallStatusCallBack`,
      statusCallbackMethod: 'POST',
    }, To )
    console.log( 'Outbound Voice Response', voiceResponse.toString() )

    const voiceResponseString = voiceResponse.toString()
    return { voiceResponseString }
  }

export default OutboundCall