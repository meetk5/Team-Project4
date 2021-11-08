//function (success)


    document.getElementById('flask').on(function (success) {
        var clickcode = '';
        for (var i = 0; i < success.points.length; i++) {
            clickcode = success.points[i].x;
        }

        let followdata = getfollower(clickcode);
        console.log(followdata.length);

        let followerdisplay = d3.select("#followerdetails");
        followerdisplay.html("");

        followerdisplay.append("h5").text(`Expected Followers ${button}:`);

        for (k = 0; k < restdata.length; k++) {
            followerdisplay.append("ul").append("li").text(`${followdata[k]}`);
        }
    });