import twilio from 'twilio'

import config from '../../../config/app'
const deviceIdentity = () => config.get( 'devices.device1' )

const VoiceResponse = twilio.twiml.VoiceResponse

const InboundCall = ( args ) => {
    const {
      To,
      From,
    } = args

    console.log( 'Callee and Caller', To, From )

    const voiceResponse = new VoiceResponse()
    const dial = voiceResponse.dial({
      timeout: 20,
    })
    dial.client({
      statusCallbackEvent: 'initiated ringing answered completed',
      statusCallback: `${config.get('twilio.callbackURL')}/api/v1/communication/callInboundStatusCallBack`,
      statusCallbackMethod: 'POST',
    }, deviceIdentity() )
    console.log('Inbound Voice Response TwiML', voiceResponse.toString())

    const voiceResponseString = voiceResponse.toString()
    return { voiceResponseString }
  }

export default InboundCall
