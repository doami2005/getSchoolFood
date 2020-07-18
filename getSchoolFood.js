/*

Made by doami2005
학교 급식 정보를 가져오는 함수입니다.
메신저봇R 전용입니다.

예시 ) getSchoolFood("목동중");

https://open.kakao.com/o/gXaUzu1b
질문은 여기로

*/

Jsoup = org.jsoup.Jsoup;

function getSchoolFood (school) {
    let Babs = {};
    let parse = Jsoup.connect("https://m.search.naver.com/search.naver?&query="+school+"+급식").get();
    parse.select(".menu_info").toArray()
    .forEach(e => Babs[e.select("strong").text().split(" [")[0]] = e.select("li").toArray()
    .map(r => r.text().replace(/[.()0-9중]/g, "")));
    return Babs;
}
