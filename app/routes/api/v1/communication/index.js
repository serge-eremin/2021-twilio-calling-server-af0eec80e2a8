import { communicationRouter as router } from '../../router'
import { communication as CommunicationController } from '../../../../controllers'

router.post('/token', CommunicationController.capabilityToken )
router.post('/inbound-call', CommunicationController.inboundCall)
router.post('/callInboundStatusCallBack', CommunicationController.callInbouundStatusCallBack)
router.post( '/outbound-call', CommunicationController.outboundCall )
router.post( '/outboundCallStatusCallBack', CommunicationController.outboundCallStatusCallback )

export default router 