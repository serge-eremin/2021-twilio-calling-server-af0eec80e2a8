import twilio from 'twilio'
import config from '../../../config/app'

const TwilioToken = ( args ) => {
    const deviceName = config.get( 'devices.device1' )
    let token

    const ClientCapability = twilio.jwt.ClientCapability
    try {
      const capability = new ClientCapability({
        accountSid: config.get('twilio.accountSid'),
        authToken: config.get('twilio.authToken')
      })
      capability.addScope(new ClientCapability.IncomingClientScope(deviceName))
      capability.addScope(new ClientCapability.OutgoingClientScope({
        applicationSid: config.get('twilio.applicationSid'), //TWIML_APP_SID
        clientName: deviceName,
      }))

      token = capability.toJwt()
      console.log('--------------------------------------- token', deviceName, config.get('twilio.accountSid'), config.get('twilio.authToken'), token)

    } catch (e) {
      console.log( 'Capability Token Error', e )
    }
    return { token }
  }

export default TwilioToken
