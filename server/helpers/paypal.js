const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Aan3zRY_PZP-EMtq83StHpNB0GpGauyTfa8cfr_JqHn69MEfn3dKnt-lH5L-FBAM-4-NQFqhuVmGe1iP",
  client_secret: "EMeb0-W9dAWoVl7vtX3z_v7ggDu67B7il-RqlJ2ipS4wnl-KB1hPhQEX_J-DX4sx5IH01HHntevGwoVi",
});

module.exports = paypal;
