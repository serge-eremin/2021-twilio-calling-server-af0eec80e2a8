import { router } from '../router'
import communicationRoutes from './communication/index'

const NAMESPACE = '/v1'
router.use( `${ NAMESPACE }/communication`, communicationRoutes )


export default router

