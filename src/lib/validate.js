module.exports = function validate (val) { // ಠ_ಠ
  return /^([01]\d|2[0-3]):[0-5][0-9](:[0-5][0-9](:[0-9][0-9][0-9])?)?(\s+[ap]m)?$/i.test(val)
}
