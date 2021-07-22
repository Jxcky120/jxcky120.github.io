fetch("https://recent-anime.vercel.app/get?user=jxcky120")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    var anime = data[0].anime;

    $(".recentAnime").append("<p><span class='title'>"+anime[0].title+"</span> - <span style='color:#111'>" + anime[0].content+"</span></p>");
    $(".recentAnime").append("<p><span class='title'>"+anime[1].title+"</span> - <span style='color:#111'>" + anime[1].content+"</span></p>");
    $(".recentAnime").append("<p><span class='title'>"+anime[2].title+"</span> - <span style='color:#111'>" + anime[2].content+"</span></p>");
    var manga = data[1].manga;

    $(".recentManga").append("<p><span class='title'>"+manga[0].title+"</span> - <span style='color:#111'>" + manga[0].content+"</span></p>");
    $(".recentManga").append("<p><span class='title'>"+manga[1].title+"</span> - <span style='color:#111'>" + manga[1].content+"</span></p>");
    $(".recentManga").append("<p><span class='title'>"+manga[2].title+"</span> - <span style='color:#111'>" + manga[2].content+"</span></p>");

  });
