$(document).ready(function(){
  $("#langbtn").click(function(){
    $(".abouthead").text($(".abouthead").text() == 'About RoseTown' ? 'ローズタウンについて' : 'About RoseTown');
      $(".aboutinfo").text($(".aboutinfo").text() == 'A former wedding chapel (St. Floria) is now opened as “RoseTown” as of Oct. 2009.  A beautiful, stately Victorian-looking building is pleasantly situated on the Tama River in West Tokyo towards Okutama. It is nestled in the midst of the tree-covered mountains of Ome.  All around us are the most pristine views of the winding river and majestic mountains, the songs of birds and cicadas, and the grandeur of nature. Feauring European style architecture complete with marble floors, ornate moldings in the ceiling and walls, wall-mounted light sconces, it captures the imaginations of all who enter.' ? 'Rose Town Tea Garden は2012年にオープンしました。以前はウェディングチャペルとして使われていましたが、現在はTown夫妻が住んでおり、奥様のEdie さんが中心となってイギリス風ティーレストランを開いています。ヴィクトリア調の外観とバルコニーから眺める美しい奥多摩の山々と多摩川がお客様をお迎えします。20数種類の紅茶、季節のスコーン、デザート、サンドウィッチ、スープ、サラダ等の軽食のご用意があります。奥多摩の素晴らしい自然とアフタヌーンティーを楽しみに是非お出掛けください。' : 'A former wedding chapel (St. Floria) is now opened as “RoseTown” as of Oct. 2009.  A beautiful, stately Victorian-looking building is pleasantly situated on the Tama River in West Tokyo towards Okutama. It is nestled in the midst of the tree-covered mountains of Ome.  All around us are the most pristine views of the winding river and majestic mountains, the songs of birds and cicadas, and the grandeur of nature. Feauring European style architecture complete with marble floors, ornate moldings in the ceiling and walls, wall-mounted light sconces, it captures the imaginations of all who enter.');
 $(".videotext").text($(".videotext").text() == 'Please watch the video below for more details!' ? 'もっと詳しくは下のビデオをご覧下さい！' : 'Please watch the video below for more details!');
$(".ownerhead").text($(".ownerhead").text() == 'The Owners' ? 'オーナーさん' : 'The Owners');
$("#latestnews").text($("#latestnews").text() == 'Latest News' ? '最新のニュース' : 'Latest News');
    

    $(".teahead").text($(".teahead").text() == 'Tea Garden Menu' ? 'ティーガーデン メニュー' : 'Tea Garden Menu');
      $(".menuinfo").text($(".menuinfo").text() == 'We are happy to provide our customers with a large selection of tea choices, including many staples such as Earl Grey, Darjeeling, Assam, English Breakfast Tea, and Peppermint. Our speciality teas change somewhat with the Seasons but we do our best to accommodate your taste! It is our pleasure to provide all customers with an opportunity to smell the scents of any of our teas shortly upon arrival as well.' ? 'お客様の好みや嗜好を提供するため、アールグレイ、ダージリン、アッサム、イングリッシュブレックファーストティー、ペパーミントなどのステープルの上に大きな茶選択肢を提供しています。ローズタウンティーガーデンの専門の茶は、季節によって多少変化するが、あなたの好みに対応するために私たちは全力を尽くします！お客様の到着時に今月のオススメ又はお茶のいずれかの香りをかぐする機会もあります。' : 'We are happy to provide our customers with a large selection of tea choices, including many staples such as Earl Grey, Darjeeling, Assam, English Breakfast Tea, and Peppermint. Our speciality teas change somewhat with the Seasons but we do our best to accommodate your taste! It is our pleasure to provide all customers with an opportunity to smell the scents of any of our teas shortly upon arrival as well.');
$(".gardenhead").text($(".gardenhead").text() == 'Tea Garden' ? 'ティーガーデン' : 'Tea Garden');
 $(".gardeninfo").text($(".gardeninfo").text() == 'Take in the beautiful view while you enjoy traditional English Afternoon Tea in our Tea Garden. Enjoy a home-made meal and a delicious beverage from our Cafe.' ? 'ティガーデンで美しい景色を見ながらおいしいイングリッシュアフタヌーンティーはいかがですか?' : 'Take in the beautiful view while you enjoy traditional English Afternoon Tea in our Tea Garden. Enjoy a home-made meal and a delicious beverage from our Cafe.');

 $("#gs1").text($("#gs1").text() == 'Business Hours' ? '営業日時' : 'Business Hours');
 $("#gs2").text($("#gs2").text() == '11 am – 5 pm' ? '11:00 - 15:00' : '11 am – 5 pm');
$("#gs3").text($("#gs3").text() == 'Tuesday ~ Saturday' ? '火、水、木、金、土' : 'Tuesday ~ Saturday');
$("#gs4").text($("#gs4").text() == '(Stop taking orders at 4:30pm)' ? '（オーダーストップ　午後4時30分）' : '(Stop taking orders at 4:30pm)');
$("#gs5").text($("#gs5").text() == 'Reservations are appreciated but not necessary. We welcome all customers!' ? '予約して頂けるとありがたいですが、なしでも結構です' : 'Reservations are appreciated but not necessary. We welcome all customers!');
$("#gs6").text($("#gs6").text() == 'For reservations, please phone: 080-4187-1727' ? '皆様のお越しをお待ちしています。080-4187-1727' : 'For reservations, please phone: 080-4187-1727');

$(".photohead").text($(".photohead").text() == '写真' ? 'Photo Gallery' : '写真');
$(".photoinfo").text($(".photoinfo").text() == 'Use the left and right navigation buttons or swipe to scroll through the photos.' ? '写真を移動するには、「右へ移動」ボタンまたは「左へ移動」ボタンを使用します。イメージ間を移動するには、スワイプすることもできます。' : 'Use the left and right navigation buttons or swipe to scroll through the photos.');
});
});

