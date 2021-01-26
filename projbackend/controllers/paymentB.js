const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "tbmv45tw3c5qdyrd",
  publicKey: "mfrysdfyc9r3nys8",
  privateKey: "457f827a8c087f2731e9389c6a5f11b4"
});

exports.getToken = (req, res) => {
    gateway.clientToken.generate({}, (err, response) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.send(response);
        }
      });
};

exports.processPayment = (req, res) => {
    let nonceFromTheClient = req.body.paymentMethodNonce;
    let amountFromTheClient = req.body.amount;

    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,

        options: {
          submitForSettlement: true
        }
      }, (err, result) => {
          if (err) {
              res.status(500).json(error);
          } else {
              res.json(result);
          }
      });
};