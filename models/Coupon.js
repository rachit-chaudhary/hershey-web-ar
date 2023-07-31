const couponsArray = [
    { "coupon": "COUPON1", "isRedeem": false },
    { "coupon": "COUPON2", "isRedeem": false },
    { "coupon": "COUPON3", "isRedeem": false },
    { "coupon": "COUPON4", "isRedeem": false },
    { "coupon": "COUPON5", "isRedeem": false }
  ];
  
  function getCoupon(visitorCoupon) {
    let couponMessage = '';
  
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
  
    return { visitorCoupon, couponMessage };
  }
  
  module.exports = {
    getCoupon
  };
  