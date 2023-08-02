
const fs = require('fs');
const path = require('path');

const couponDataFile = path.join(__dirname, 'coupons.json');

function getCoupon(visitorCoupon) {
  let couponMessage = '';
  let couponsArray = JSON.parse(fs.readFileSync(couponDataFile, 'utf-8'));

  if (!visitorCoupon) {
    for (let i = 0; i < couponsArray.length; i++) {
      if (!couponsArray[i].isRedeem) {
        visitorCoupon = couponsArray[i].coupon;
        couponsArray[i].isRedeem = true;
        couponMessage = ` ${visitorCoupon}`;
        break;
      }
    }
  } else {
    const redeemedCoupon = couponsArray.find(coupon => coupon.coupon === visitorCoupon && coupon.isRedeem);
    if (redeemedCoupon) {
      couponMessage = ` ${redeemedCoupon.coupon}`;
    }
  }

  // Write the updated coupon data back to the JSON file
  fs.writeFileSync(couponDataFile, JSON.stringify(couponsArray, null, 2));

  return { visitorCoupon, couponMessage, couponsArray };
}

module.exports = {
  getCoupon
};
