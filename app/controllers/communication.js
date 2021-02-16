import CapabilityToken from '../services/communication/capabilityToken'
import InboundCall from '../services/communication/inboundCall'
import InboundCallStatusCallback from '../services/communication/inboundStatusCallback'
import OutboundCall from '../services/communication/outboundCall'
import OutboundCallStatusCallback from '../services/communication/outboundStatusCallback'


class Communication {
  static capabilityToken( req, res ) {
    console.log( 'requestttttttttttt', req.body )
    const token = CapabilityToken( req.body )
    res.send( token )
  }
  static inboundCall(req, res) {
    const { body } = req
    const result = InboundCall( { ...body } )
    const { voiceResponseString } = result
    res.type('text/xml')
    res.send(voiceResponseString.toString())
  }
  static callInbouundStatusCallBack(req, res) {
    InboundCallStatusCallback(req)
    res.status(202).send()
  }
  static outboundCall (req, res) {
    const { body } = req
    const result = OutboundCall( { ...body } )
    const { voiceResponseString } = result
    res.type('text/xml')
    res.send( voiceResponseString.toString() )
  }

  static outboundCallStatusCallback ( req, res ) {
    OutboundCallStatusCallback( req )
    res.status( 202 ).send()
  }

}

export default Communication