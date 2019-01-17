var json;
var test;

function getTeamJson () {
    json = $.getJSON("assets/streamers.json", function (data) {
        $.each(data, function() {
            var image = this.image;
            var desc = this.description;
            var name = this.name;

            var obj = document.getElementById("teamInfo");
            obj.innerHTML = obj.innerHTML + "<div class=\"teamName\">" + name + "</div><span><div class=\"teamInfo teamPicture\" style='background-image: url(https://www.imgur.com/" + image + ".jpg);)'></div></span>" +
                    "<div class=\"teamInfo teamDescription\">" + desc + "</div>";
        });
    });
}

function showTeam()
{
    $('#team').modal('show');
}
