import braintree from 'braintree'
const environment = process.env.BRAINTREE_ENVIRONMENT
const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: 'h3xctb44tztxsvxw',
  publicKey: "f7qg59yx2zvvm66s",
  privateKey: "3dc7af84ba5b73842e9514d5be943570"
})
export default gateway;