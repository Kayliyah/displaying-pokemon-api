let url = "https://pokebuildapi.fr/api/v1/pokemon/limit/20";

$(document).ready(function() {

    $.ajax({

        url: url,
        type: "GET",
        dataType: "json",
        success: data => {

            $(document).ready(function() {

                $("#0").append("<h2>" + data[0].name + "</h2>");
                $("#0").append("<button>" + "<img src='" + data[0].image + "'>" + "</button>");
                $("#0").append("<p id='first-type'>" + data[0].apiTypes[0].name + "</p>");
                $("#0").append("<p id='second-type'>" + data[0].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#overlay").show();
                    $("#0 > #overlay").append("<h3>Stats</h3>");
                    $("#0 > #overlay").append("<p>HP " + data[0].stats.HP + "</p>");
                    $("#0 > #overlay").append("<p>Attack " + data[0].stats.attack + "</p>");
                    $("#0 > #overlay").append("<p>Defense " + data[0].stats.defense + "</p>");
                    $("#0 > #overlay").append("<img src='" + data[1].image + "'>");
                })

            });

            $(document).ready(function() {

                $("#1").append("<h2>" + data[1].name + "</h2>");
                $("#1").append("<button>" + "<img src='" + data[1].image + "'>" + "</button>");
                $("#1").append("<p id='first-type'>" + data[1].apiTypes[0].name + "</p>");
                $("#1").append("<p id='second-type'>" + data[1].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#1 > #overlay").show();
                    $("#1 > #overlay").append("<h3>Stats</h3>");
                    $("#1 > #overlay").append("<p>HP " + data[1].stats.HP + "</p>");
                    $("#1 > #overlay").append("<p>Attack " + data[1].stats.attack + "</p>");
                    $("#1 > #overlay").append("<p>Defense " + data[1].stats.defense + "</p>");
                    $("#1 > #overlay").append("<img src='" + data[2].image + "'>");
                })

            });

            $(document).ready(function() {

                $("#2").append("<h2>" + data[2].name + "</h2>");
                $("#2").append("<button>" + "<img src='" + data[2].image + "'>" + "</button>");
                $("#2").append("<p id='first-type'>" + data[2].apiTypes[0].name + "</p>");
                $("#2").append("<p id='second-type'>" + data[2].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#2 > #overlay").show();
                    $("#2 > #overlay").append("<h3>Stats</h3>");
                    $("#2 > #overlay").append("<p>HP " + data[2].stats.HP + "</p>");
                    $("#2 > #overlay").append("<p>Attack " + data[2].stats.attack + "</p>");
                    $("#2 > #overlay").append("<p>Defense " + data[2].stats.defense + "</p>");
                })

            });

            $(document).ready(function() {

                $("#3").append("<h2>" + data[3].name + "</h2>");
                $("#3").append("<button>" + "<img src='" + data[3].image + "'>" + "</button>");
                $("#3").append("<p id='first-type'>" + data[3].apiTypes[0].name + "</p>");
                $("#3").append("<p id='second-type'>" + data[3].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#3 > #overlay").show();
                    $("#3 > #overlay").append("<h3>Stats</h3>");
                    $("#3 > #overlay").append("<p>HP " + data[3].stats.HP + "</p>");
                    $("#3 > #overlay").append("<p>Attack " + data[3].stats.attack + "</p>");
                    $("#3 > #overlay").append("<p>Defense " + data[3].stats.defense + "</p>");
                    $("#3 > #overlay").append("<img src='" + data[4].image + "'>");
                })

            });

            $(document).ready(function() {

                $("#4").append("<h2>" + data[4].name + "</h2>");
                $("#4").append("<button>" + "<img src='" + data[4].image + "'>" + "</button>");
                $("#4").append("<p id='first-type'>" + data[4].apiTypes[0].name + "</p>");
                $("#4").append("<p id='second-type'>" + data[4].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#4 > #overlay").show();
                    $("#4 > #overlay").append("<h3>Stats</h3>");
                    $("#4 > #overlay").append("<p>HP " + data[4].stats.HP + "</p>");
                    $("#4 > #overlay").append("<p>Attack " + data[4].stats.attack + "</p>");
                    $("#4 > #overlay").append("<p>Defense " + data[4].stats.defense + "</p>");
                    $("#4 > #overlay").append("<img src='" + data[5].image + "'>");
                })

            });

            $(document).ready(function() {

                $("#5").append("<h2>" + data[5].name + "</h2>");
                $("#5").append("<button>" + "<img src='" + data[5].image + "'>" + "</button>");
                $("#5").append("<p id='first-type'>" + data[5].apiTypes[0].name + "</p>");
                $("#5").append("<p id='second-type'>" + data[5].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#5 > #overlay").show();
                    $("#5 > #overlay").append("<h3>Stats</h3>");
                    $("#5 > #overlay").append("<p>HP " + data[5].stats.HP + "</p>");
                    $("#5 > #overlay").append("<p>Attack " + data[5].stats.attack + "</p>");
                    $("#5 > #overlay").append("<p>Defense " + data[5].stats.defense + "</p>");

                })

            });

            $(document).ready(function() {

                $("#6").append("<h2>" + data[6].name + "</h2>");
                $("#6").append("<button>" + "<img src='" + data[6].image + "'>" + "</button>");
                $("#6").append("<p id='first-type'>" + data[6].apiTypes[0].name + "</p>");
                $("#6").append("<p id='second-type'>" + data[6].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#6 > #overlay").show();
                    $("#6 > #overlay").append("<h3>Stats</h3>");
                    $("#6 > #overlay").append("<p>HP " + data[6].stats.HP + "</p>");
                    $("#6 > #overlay").append("<p>Attack " + data[6].stats.attack + "</p>");
                    $("#6 > #overlay").append("<p>Defense " + data[6].stats.defense + "</p>");
                    $("#6 > #overlay").append("<img src='" + data[7].image + "'>");
                })

            });

            $(document).ready(function() {

                $("#7").append("<h2>" + data[7].name + "</h2>");
                $("#7").append("<button>" + "<img src='" + data[7].image + "'>" + "</button>");
                $("#7").append("<p id='first-type'>" + data[7].apiTypes[0].name + "</p>");
                $("#7").append("<p id='second-type'>" + data[7].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#7 > #overlay").show();
                    $("#7 > #overlay").append("<h3>Stats</h3>");
                    $("#7 > #overlay").append("<p>HP " + data[7].stats.HP + "</p>");
                    $("#7 > #overlay").append("<p>Attack " + data[7].stats.attack + "</p>");
                    $("#7 > #overlay").append("<p>Defense " + data[7].stats.defense + "</p>");
                    $("#7 > #overlay").append("<img src='" + data[8].image + "'>");
                })

            });

            $(document).ready(function() {

                $("#8").append("<h2>" + data[8].name + "</h2>");
                $("#8").append("<button>" + "<img src='" + data[8].image + "'>" + "</button>");
                $("#8").append("<p id='first-type'>" + data[8].apiTypes[0].name + "</p>");
                $("#8").append("<p id='second-type'>" + data[8].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#8 > #overlay").show();
                    $("#8 > #overlay").append("<h3>Stats</h3>");
                    $("#8 > #overlay").append("<p>HP " + data[8].stats.HP + "</p>");
                    $("#8 > #overlay").append("<p>Attack " + data[8].stats.attack + "</p>");
                    $("#8 > #overlay").append("<p>Defense " + data[8].stats.defense + "</p>");
                })

            });

            $(document).ready(function() {

                $("#9").append("<h2>" + data[9].name + "</h2>");
                $("#9").append("<button>" + "<img src='" + data[9].image + "'>" + "</button>");
                $("#9").append("<p id='first-type'>" + data[9].apiTypes[0].name + "</p>");
                $("#9").append("<p id='second-type'>" + data[9].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#9 > #overlay").show();
                    $("#9 > #overlay").append("<h3>Stats</h3>");
                    $("#9 > #overlay").append("<p>HP " + data[9].stats.HP + "</p>");
                    $("#9 > #overlay").append("<p>Attack " + data[9].stats.attack + "</p>");
                    $("#9 > #overlay").append("<p>Defense " + data[9].stats.defense + "</p>");
                    $("#9 > #overlay").append("<img src='" + data[10].image + "'>");
                })

            });

            $(document).ready(function() {

                $("#10").append("<h2>" + data[10].name + "</h2>");
                $("#10").append("<button>" + "<img src='" + data[10].image + "'>" + "</button>");
                $("#10").append("<p id='first-type'>" + data[10].apiTypes[0].name + "</p>");
                $("#10").append("<p id='second-type'>" + data[10].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#10 > #overlay").show();
                    $("#10 > #overlay").append("<h3>Stats</h3>");
                    $("#10 > #overlay").append("<p>HP " + data[10].stats.HP + "</p>");
                    $("#10 > #overlay").append("<p>Attack " + data[10].stats.attack + "</p>");
                    $("#10 > #overlay").append("<p>Defense " + data[10].stats.defense + "</p>");
                    $("#10 > #overlay").append("<img src='" + data[11].image + "'>");
                })

            });

            $(document).ready(function() {

                $("#11").append("<h2>" + data[11].name + "</h2>");
                $("#11").append("<button>" + "<img src='" + data[11].image + "'>" + "</button>");
                $("#11").append("<p id='first-type'>" + data[11].apiTypes[0].name + "</p>");
                $("#11").append("<p id='second-type'>" + data[11].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#11 > #overlay").show();
                    $("#11 > #overlay").append("<h3>Stats</h3>");
                    $("#11 > #overlay").append("<p>HP " + data[11].stats.HP + "</p>");
                    $("#11 > #overlay").append("<p>Attack " + data[11].stats.attack + "</p>");
                    $("#11 > #overlay").append("<p>Defense " + data[11].stats.defense + "</p>");
                })

            });
            
            $(document).ready(function() {

                $("#12").append("<h2>" + data[12].name + "</h2>");
                $("#12").append("<button>" + "<img src='" + data[12].image + "'>" + "</button>");
                $("#12").append("<p id='first-type'>" + data[12].apiTypes[0].name + "</p>");
                $("#12").append("<p id='second-type'>" + data[12].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#12 > #overlay").show();
                    $("#12 > #overlay").append("<h3>Stats</h3>");
                    $("#12 > #overlay").append("<p>HP " + data[12].stats.HP + "</p>");
                    $("#12 > #overlay").append("<p>Attack " + data[12].stats.attack + "</p>");
                    $("#12 > #overlay").append("<p>Defense " + data[12].stats.defense + "</p>");
                    $("#12 > #overlay").append("<img src='" + data[13].image + "'>");
                })

            });

            $(document).ready(function() {

                $("#13").append("<h2>" + data[13].name + "</h2>");
                $("#13").append("<button>" + "<img src='" + data[13].image + "'>" + "</button>");
                $("#13").append("<p id='first-type'>" + data[13].apiTypes[0].name + "</p>");
                $("#13").append("<p id='second-type'>" + data[13].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#13 > #overlay").show();
                    $("#13 > #overlay").append("<h3>Stats</h3>");
                    $("#13 > #overlay").append("<p>HP " + data[13].stats.HP + "</p>");
                    $("#13 > #overlay").append("<p>Attack " + data[13].stats.attack + "</p>");
                    $("#13 > #overlay").append("<p>Defense " + data[13].stats.defense + "</p>");
                    $("#13 > #overlay").append("<img src='" + data[14].image + "'>");
                })

            });

            $(document).ready(function() {

                $("#14").append("<h2>" + data[14].name + "</h2>");
                $("#14").append("<button>" + "<img src='" + data[14].image + "'>" + "</button>");
                $("#14").append("<p id='first-type'>" + data[14].apiTypes[0].name + "</p>");
                $("#14").append("<p id='second-type'>" + data[14].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#14 > #overlay").show();
                    $("#14 > #overlay").append("<h3>Stats</h3>");
                    $("#14 > #overlay").append("<p>HP " + data[14].stats.HP + "</p>");
                    $("#14 > #overlay").append("<p>Attack " + data[14].stats.attack + "</p>");
                    $("#14 > #overlay").append("<p>Defense " + data[14].stats.defense + "</p>");
                })

            });

            $(document).ready(function() {

                $("#15").append("<h2>" + data[15].name + "</h2>");
                $("#15").append("<button>" + "<img src='" + data[15].image + "'>" + "</button>");
                $("#15").append("<p id='first-type'>" + data[15].apiTypes[0].name + "</p>");
                $("#15").append("<p id='second-type'>" + data[15].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#15 > #overlay").show();
                    $("#15 > #overlay").append("<h3>Stats</h3>");
                    $("#15 > #overlay").append("<p>HP " + data[15].stats.HP + "</p>");
                    $("#15 > #overlay").append("<p>Attack " + data[15].stats.attack + "</p>");
                    $("#15 > #overlay").append("<p>Defense " + data[15].stats.defense + "</p>");
                    $("#15 > #overlay").append("<img src='" + data[16].image + "'>");
                })

            });

            $(document).ready(function() {

                $("#16").append("<h2>" + data[16].name + "</h2>");
                $("#16").append("<button>" + "<img src='" + data[16].image + "'>" + "</button>");
                $("#16").append("<p id='first-type'>" + data[16].apiTypes[0].name + "</p>");
                $("#16").append("<p id='second-type'>" + data[16].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#16 > #overlay").show();
                    $("#16 > #overlay").append("<h3>Stats</h3>");
                    $("#16 > #overlay").append("<p>HP " + data[16].stats.HP + "</p>");
                    $("#16 > #overlay").append("<p>Attack " + data[16].stats.attack + "</p>");
                    $("#16 > #overlay").append("<p>Defense " + data[16].stats.defense + "</p>");
                    $("#16 > #overlay").append("<img src='" + data[17].image + "'>");
                })

            });

            $(document).ready(function() {

                $("#17").append("<h2>" + data[17].name + "</h2>");
                $("#17").append("<button>" + "<img src='" + data[17].image + "'>" + "</button>");
                $("#17").append("<p id='first-type'>" + data[17].apiTypes[0].name + "</p>");
                $("#17").append("<p id='second-type'>" + data[17].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#17 > #overlay").show();
                    $("#17 > #overlay").append("<h3>Stats</h3>");
                    $("#17 > #overlay").append("<p>HP " + data[17].stats.HP + "</p>");
                    $("#17 > #overlay").append("<p>Attack " + data[17].stats.attack + "</p>");
                    $("#17 > #overlay").append("<p>Defense " + data[17].stats.defense + "</p>");
                })

            });

            $(document).ready(function() {

                $("#18").append("<h2>" + data[18].name + "</h2>");
                $("#18").append("<button>" + "<img src='" + data[18].image + "'>" + "</button>");
                $("#18").append("<p id='first-type'>" + data[18].apiTypes[0].name + "</p>");
                $("#18").append("<p id='second-type'>" + data[18].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#18 > #overlay").show();
                    $("#18 > #overlay").append("<h3>Stats</h3>");
                    $("#18 > #overlay").append("<p>HP " + data[18].stats.HP + "</p>");
                    $("#18 > #overlay").append("<p>Attack " + data[18].stats.attack + "</p>");
                    $("#18 > #overlay").append("<p>Defense " + data[18].stats.defense + "</p>");
                    $("#18 > #overlay").append("<img src='" + data[19].image + "'>");
                })

            });

            $(document).ready(function() {

                $("#12").append("<h2>" + data[12].name + "</h2>");
                $("#12").append("<button>" + "<img src='" + data[12].image + "'>" + "</button>");
                $("#12").append("<p id='first-type'>" + data[12].apiTypes[0].name + "</p>");
                $("#12").append("<p id='second-type'>" + data[12].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#12 > #overlay").show();
                    $("#12 > #overlay").append("<h3>Stats</h3>");
                    $("#12 > #overlay").append("<p>HP " + data[12].stats.HP + "</p>");
                    $("#12 > #overlay").append("<p>Attack " + data[12].stats.attack + "</p>");
                    $("#12 > #overlay").append("<p>Defense " + data[12].stats.defense + "</p>");
                    $("#12 > #overlay").append("<img src='" + data[13].image + "'>");
                })

            });

            $(document).ready(function() {

                $("#19").append("<h2>" + data[19].name + "</h2>");
                $("#19").append("<button>" + "<img src='" + data[19].image + "'>" + "</button>");
                $("#19").append("<p id='first-type'>" + data[19].apiTypes[0].name + "</p>");
                $("#19").append("<p id='second-type'>" + data[19].apiTypes[1].name + "</p>");

                $("button").click(function() {

                    $("this").next("#19 > #overlay").show();
                    $("#19 > #overlay").append("<h3>Stats</h3>");
                    $("#19 > #overlay").append("<p>HP " + data[19].stats.HP + "</p>");
                    $("#19 > #overlay").append("<p>Attack " + data[19].stats.attack + "</p>");
                    $("#19 > #overlay").append("<p>Defense " + data[19].stats.defense + "</p>");
                })

            });

        }

    })

})