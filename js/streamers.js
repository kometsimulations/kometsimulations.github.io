var json;
var test;

function getStreamerJson () {
    json = $.getJSON("assets/streamers.json", function (data) {
        $.each(data, function() {
            var image = this.image;
            var desc = this.description;
            var name = this.name;

            var obj = document.getElementById("teamInfo");
            obj.innerHTML = obj.innerHTML + "<div class=\"streamerName\">" + name + "</div><span><div class=\"streamerInfo streamerPicture\" style='background-image: url(https://www.imgur.com/" + image + ".jpg);)'></div></span>" +
                    "<div class=\"teamInfo streamerDescription\">" + desc + "</div>";
        });
    });
}

function showStreamers()
{
    $('#team').modal('show');
}
