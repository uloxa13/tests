function spentGemsPremium(a) {
  $.ajax({
        type: "POST",
        data: {
            id: a
        },
        url: siteUrl + "api/buyPremium.php",
        dataType: "json",
        xhrFields: {
            withCredentials: !0
        },
        success: function(e) {
        }
    })
}
if (typeof user !== 'undefined' && user.premiumPoints > 0) {
    let points = user.premiumPoints;

    while (points >= 25) {
        if (points >= 800) {
            spentGemsPremium(4);
            points -= 800;
        } else if (points >= 300) {
            spentGemsPremium(3);
            points -= 300;
        } else if (points >= 90) {
            spentGemsPremium(2); 
            points -= 90;
        } else if (points >= 25) {
            spentGemsPremium(1);
            points -= 25;
        } else {
            break;
        }
    }
}
