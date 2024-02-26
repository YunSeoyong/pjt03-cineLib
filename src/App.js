import { useRef, useState } from 'react';
import './App.css';
import Header from './component/Header.js';
import MovieTop from './component/MovieTop.js';
import MovieList from './component/MovieList.js';
import Footer from './component/Footer.js';
// 이미지파일
import movie00 from './img/movie_2020_01_namsan.jpg';
import movie01 from './img/movie_2020_02_birdsofpray.jpg';
import movie02 from './img/movie_2022_01_thebatman.jpg';
import movie03 from './img/movie_2021_01_soul.jpg';
import movie04 from './img/movie_2023_01_slamdunk.jpg';
import movie05 from './img/movie_2022_02_theroundup2.jpg';
import movie06 from './img/movie_2021_02_minari.jpg';
import movie07 from './img/movie_2023_02_suzume.jpg';
import movie08 from './img/movie_2020_03_alive.jpg';
import movie09 from './img/movie_2022_03_topgun.jpg';
import movie10 from './img/movie_2023_03_theroundup3.jpg';
import movie11 from './img/movie_2021_03_cruella.jpg';
import movie12 from './img/movie_2020_04_peninsula.jpg';
import movie13 from './img/movie_2021_04_suicide.jpg';
import movie14 from './img/movie_2022_04_confidentialassignment2.jpg';
import movie15 from './img/movie_2023_04_elemental.jpg';
import movie16 from './img/movie_2022_05_avatar2.jpg';
import movie17 from './img/movie_2020_05_deliverus.jpg';
import movie18 from './img/movie_2023_05_oppenheimer.jpg';
import movie19 from './img/movie_2021_05_spiderman.jpg';
import gradeAll from './img/grade_all.svg';
import grade12 from './img/grade_12.svg';
import grade15 from './img/grade_15.svg';
import grade18 from './img/grade_18.svg';

const dummyList = [
    {
        id : 0,
        title : '남산의 부장들',
        year : new Date(2020, 0, 22).getTime(),
        photo : movie00,
        ageRestriction : grade15,
        director : '우민호',
        cast : '이병헌, 이성민, 곽도원, 이희준',
        plot : `1979년 10월 26일, 중앙정보부장 김규평(이병헌)이 대한민국 대통령을 암살한다. 이 사건의 40일전, 미국에서는 전 중앙정보부장 박용각(곽도원)이 청문회를 통해 전 세계에 정권의 실체를 고발하며 파란을 일으킨다. 그를 막기 위해 중앙정보부장 김규평과 경호실장 곽상천(이희준)이 나서고, 대통령 주변에는 충성 세력과 반대 세력들이 뒤섞이기 시작하는데… 흔들린 충성, 그 날의 총성`,
        runTime : 114,
        rate : 8.46
    },
    {
        id : 1,
        title : '버즈 오브 프레이(할리 퀸의 황홀한 해방)',
        year : new Date(2020, 1, 5).getTime(),
        photo : movie01,
        ageRestriction : grade15,
        director : '캐시 얀',
        cast : '마고 로비, 메리 엘리자베스, 저니 스몰렛',
        plot : `오랜 연인이던 조커와 헤어진 ‘할리 퀸(마고 로비)’은 처음 맞이한 해방에 황홀함을 느낀다. 하지만 조커라는 방패막이 사라지자 평생 처음 무방비 상태에 놓인 할리 퀸을 고담시에서 가장 비열한 범죄왕 로만 시오니스(이완 맥그리거)와 고담의 모든 갱들이 노린다. 통제 불능의 상태에서 카산드라라는 소매치기가 로만의 부하에게서 모든 권력과 고담시 지하 세계 전체의 지배권을 차지할 열쇠인 금융 정보가 암호화되어 있는 다이아몬드를 훔치면서 사건을 걷잡을 수 없이 급변한다. 로만 손에 죽을 위기에 처한 할리 퀸은 헌트리스, 블랙 카나리, 르네 몬토야와 새로운 팀을 결성해 로만에 맞서는데…`,
        runTime : 108,
        rate : 8.22
    },
    {
        id : 2,
        title : '더 배트맨',
        year : new Date(2022, 2, 1).getTime(),
        photo : movie02,
        ageRestriction : grade15,
        director : '맷 리브스',
        cast : '로버트 패틴슨, 폴 다노, 조 크라비츠, 앤디 서키스',
        plot : `지난 2년간 고담시의 어둠 속에서 범법자들을 응징하며 배트맨으로 살아온 브루스 웨인. 알프레드와 제임스 고든 경위의 도움 아래, 도시의 부패한 공직자들과 고위 관료들 사이에서 복수의 화신으로 활약한다. 고담의 시장 선거를 앞두고 고담의 엘리트 집단을 목표로 잔악한 연쇄살인을 저지르는 수수께끼 킬러 리들러가 나타나자, 최고의 탐정 브루스 웨인이 수사에 나서고 남겨진 단서를 풀어가며 캣우먼, 펭귄, 카마인 팔코네, 리들러를 차례대로 만난다. 사이코 범인의 미스터리를 수사하면서 그 모든 증거가 자신을 향한 의도적인 메시지였음을 깨닫고, 리들러에게 농락 당한 배트맨은 광기에 사로잡힌다. 범인의 무자비한 계획을 막고 오랫동안 고담시를 썩게 만든 권력 부패의 고리를 끊어야 하지만, 부모님의 죽음에 얽힌 진실이 밝혀지자 복수와 정의 사이에서 갈등한다. 선과 악, 빛과 어둠, 영웅과 악당, 정의와 복수.. 무엇을 선택할 것인가`,
        runTime : 176,
        rate : 8.09
    },
    {
        id : 3,
        title : '소울',
        year : new Date(2021, 0, 20).getTime(),
        photo : movie03,
        ageRestriction : gradeAll,
        director : '피트 닥터',
        cast : '제이미 폭스, 티나 페이, 다비드 딕스',
        plot : `뉴욕에서 음악 선생님으로 일하던 ‘조’는 꿈에 그리던 최고의 밴드와 재즈 클럽에서 연주하게 된 그 날, 예기치 못한 사고로 영혼이 되어 ‘태어나기 전 세상’에 떨어진다. 탄생 전 영혼들이 멘토와 함께 자신의 관심사를 발견하면 지구 통행증을 발급하는 ‘태어나기 전 세상’ ‘조’는 그 곳에서 유일하게 지구에 가고 싶어하지 않는 시니컬한 영혼 ‘22’의 멘토가 된다. 링컨, 간디, 테레사 수녀도 멘토되길 포기한 영혼 ‘22’ 꿈의 무대에 서려면 ‘22’의 지구 통행증이 필요한 ‘조’ 그는 다시 지구로 돌아가 꿈의 무대에 설 수 있을까?`,
        runTime : 107,
        rate : 9.32
    },
    {
        id : 4,
        title : '더 퍼스트 슬램덩크',
        year : new Date(2023, 0, 4).getTime(),
        photo : movie04,
        ageRestriction : grade12,
        director : '이노우에 다케히코',
        cast : '나카무라 슈고, 키무라 스바루, 미야케 켄타, 카미오 신이치로, 카사마 쥰',
        plot : '전국 제패를 꿈꾸는 북산고 농구부 5인방의 꿈과 열정, 멈추지 않는 도전을 그린 영화',
        runTime : 124,
        rate : 9.26
    },
    {
        id : 5,
        title : '범죄도시2',
        year : new Date(2022, 4, 18).getTime(),
        photo : movie05,
        ageRestriction : grade15,
        director : '이상용',
        cast : '마동석, 손석구, 최귀화',
        plot : `가리봉동 소탕작전 후 4년 뒤, 금천서 강력반은 베트남으로 도주한 용의자를 인도받아 오라는 미션을 받는다. 괴물형사 ‘마석도’(마동석)와 ‘전일만’(최귀화) 반장은 현지 용의자에게서 수상함을 느끼고, 그의 뒤에 무자비한 악행을 벌이는 ‘강해상’(손석구)이 있음을 알게 된다. ‘마석도’와 금천서 강력반은 한국과 베트남을 오가며 역대급 범죄를 저지르는 ‘강해상’을 본격적으로 쫓기 시작하는데... 나쁜 놈들 잡는 데 국경 없다! 통쾌하고 화끈한 범죄 소탕 작전이 다시 펼쳐진다!`,
        runTime : 106,
        rate : 8.99
    },
    {
        id : 6,
        title : '미나리',
        year : new Date(2021, 2, 3).getTime(),
        photo : movie06,
        ageRestriction : grade12,
        director : '정이삭',
        cast : '스티븐 연, 한예리, 윤여정, 앨런 김, 노엘 조, 윌 패튼',
        plot : `"미나리는 어디서든 잘 자라" 낯선 미국, 아칸소로 떠나온 한국 가족. 가족들에게 뭔가 해내는 걸 보여주고 싶은 아빠 '제이콥'(스티븐 연)은 자신만의 농장을 가꾸기 시작하고 엄마 '모니카'(한예리)도 다시 일자리를 찾는다. 아직 어린 아이들을 위해 ‘모니카’의 엄마 ‘순자’(윤여정)가 함께 살기로 하고 가방 가득 고춧가루, 멸치, 한약 그리고 미나리씨를 담은 할머니가 도착한다. 의젓한 큰딸 '앤'(노엘 케이트 조)과 장난꾸러기 막내아들 '데이빗'(앨런 김)은 여느 그랜마같지 않은 할머니가 영- 못마땅한데… 함께 있다면, 새로 시작할 수 있다는 희망으로 하루하루 뿌리 내리며 살아가는 어느 가족의 아주 특별한 여정이 시작된다!`,
        runTime : 115,
        rate : 8.32
    },
    {
        id : 7,
        title : '스즈메의 문단속',
        year : new Date(2023, 2, 8).getTime(),
        photo : movie07,
        ageRestriction : grade12,
        director : '신카이 마코토',
        cast : '하라 나노카, 마츠무라 호쿠토, 후카츠 에리',
        plot : `한 소녀가 우연히 만난 청년과 재난의 문을 닫는 모험에 뛰어들게 되는 이야기를 다룬 애니메이션 영화`,
        runTime : 122,
        rate : 8.11
    },
    {
        id : 8,
        title : '#살아있다',
        year : new Date(2020, 5, 24).getTime(),
        photo : movie08,
        ageRestriction : grade15,
        director : '조일형',
        cast : '유아인, 박신혜, 전배수, 이현욱',
        plot : `원인불명 증세의 사람들의 공격에 통제 불능에 빠진 도시. 영문도 모른 채 잠에서 깬 ‘준우’(유아인)는 아무도 없는 집에 혼자 고립된 것을 알게 된다. 데이터, 와이파이, 문자, 전화 모든 것이 끊긴 채 고립된 상황. 연락이 두절된 가족에 이어 최소한의 식량마저 바닥이 나자 더 이상 버티기 힘들어진 ‘준우’. 하지만 그 순간 건너편 아파트에서 누군가 시그널을 보내온다. 또 다른 생존자 ‘유빈’(박신혜)이 아직 살아있음을 알게 된 ‘준우’는 함께 살아남기 위한 방법을 찾아 나서는데...! 꼭 살아남아야 한다`,
        runTime : 98,
        rate : 6.89
    },
    {
        id : 9,
        title : '탑건: 매버릭',
        year : new Date(2022, 5, 22).getTime(),
        photo : movie09,
        ageRestriction : grade12,
        director : '조셉 코신스키',
        cast : '톰 크루즈, 마일즈 텔러, 제니퍼 코넬리',
        plot : `최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. 그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. 매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자 매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데…`,
        runTime : 130,
        rate : 9.59
    },
    {
        id : 10,
        title : '범죄도시3',
        year : new Date(2023, 4, 31).getTime(),
        photo : movie10,
        ageRestriction : grade15,
        director : '이상용',
        cast : '마동석, 이준혁, 아오키 무네타카',
        plot : `대체불가 괴물형사 마석도, 서울 광수대로 발탁! 베트남 납치 살해범 검거 후 7년 뒤, ‘마석도’(마동석)는 새로운 팀원들과 함께 살인사건을 조사한다. 사건 조사 중, ‘마석도’는 신종 마약 사건이 연루되었음을 알게 되고 수사를 확대한다. 한편, 마약 사건의 배후인 '주성철'(이준혁)은 계속해서 판을 키워가고 약을 유통하던 일본 조직과 '리키'(아오키 무네타카)까지 한국에 들어오며 사건의 규모는 점점 더 커져가는데... 나쁜 놈들 잡는 데 이유 없고 제한 없다. 커진 판도 시원하게 싹 쓸어버린다!`,
        runTime : 105,
        rate : 7.70
    },
    {
        id : 11,
        title : '크루엘라',
        year : new Date(2021, 4, 26).getTime(),
        photo : movie11,
        ageRestriction : grade12,
        director : '크레이그 질레스피',
        cast : '엠마 스톤, 엠마 톰슨, 마크 스트롱, 폴 윌터 하우저',
        plot : `처음부터 난 알았어. 내가 특별하단 걸 그게 불편한 인간들도 있겠지만 모두의 비위를 맞출 수는 없잖아? 그러다 보니 결국, 학교를 계속 다닐 수가 없었지 우여곡절 런던에 오게 된 나, 에스텔라는 재스퍼와 호레이스를 운명처럼 만났고 나의 뛰어난 패션 감각을 이용해 완벽한 변장과 빠른 손놀림으로 런던 거리를 싹쓸이 했어 도둑질이 지겹게 느껴질 때쯤, 꿈에 그리던 리버티 백화점에 낙하산(?)으로 들어가게 됐어 거리를 떠돌았지만 패션을 향한 나의 열정만큼은 언제나 진심이었거든 근데 이게 뭐야, 옷에는 손도 못 대보고 하루 종일 바닥 청소라니 인내심에 한계를 느끼고 있을 때, 런던 패션계를 꽉 쥐고 있는 남작 부인이 나타났어 천재는 천재를 알아보는 법! 난 남작 부인의 브랜드 디자이너로 들어가게 되었지 꿈을 이룰 것 같았던 순간도 잠시, 세상에 남작 부인이 ‘그런 사람’이었을 줄이야… 그래서 난 내가 누군지 보여주기로 했어 잘가, 에스텔라 난 이제 크루엘라야!`,
        runTime : 133,
        rate : 9.21
    },
    {
        id : 12,
        title : '반도',
        year : new Date(2020, 6, 15).getTime(),
        photo : movie12,
        ageRestriction : grade15,
        director : '연상호',
        cast : '강동원, 이정현, 이레, 권해효',
        plot : `[전대미문의 재난 그 후 4년 폐허의 땅으로 다시 들어간다!] 4년 전, 나라 전체를 휩쓸어버린 전대미문의 재난에서 가까스로 탈출했던 ‘정석’(강동원). 바깥세상으로부터 철저히 고립된 반도에 다시 들어가야 하는 피할 수 없는 제안을 받는다. 제한 시간 내에 지정된 트럭을 확보해 반도를 빠져 나와야 하는 미션을 수행하던 중 인간성을 상실한 631부대와 4년 전보다 더욱 거세진 대규모 좀비 무리가 정석 일행을 습격한다. 절체절명의 순간, 폐허가 된 땅에서 살아남은 ‘민정’(이정현) 가족의 도움으로 위기를 가까스로 모면하고 이들과 함께 반도를 탈출할 수 있는 마지막 기회를 잡기로 한다. 되돌아온 자, 살아남은 자 그리고 미쳐버린 자 필사의 사투가 시작된다!`,
        runTime : 116,
        rate : 7.17
    },
    {
        id : 13,
        title : '더 수어사이드 스쿼드',
        year : new Date(2021, 7, 3).getTime(),
        photo : movie13,
        ageRestriction : grade18,
        director : '제임스 건',
        cast : '마고 로비, 이드리스 엘바, 존 시나, 조엘 킨나만, 비올라 데이비스',
        plot : `살고 싶다면 무조건 성공시켜라! 최강 우주 빌런에 맞선, 자살특공대에게 맡겨진 ‘더’ 대책 없는 작전. 팀플레이가 ‘더’ 불가능한 최악의 안티히어로들. 최고의 팀워크를 기대한다면 “죽.는.다!”`,
        runTime : 132,
        rate : 7.94
    },
    {
        id : 14,
        title : '공조2: 인터내셔날',
        year : new Date(2022, 8, 7).getTime(),
        photo : movie14,
        ageRestriction : grade15,
        director : '이석훈',
        cast : '현빈, 유해진, 윤아, 다니엘 헤니, 진선규',
        plot : `공조 이즈 백! 이번엔 삼각 공조다! 남한으로 숨어든 글로벌 범죄 조직을 잡기 위해 새로운 공조 수사에 투입된 북한 형사 ‘림철령’(현빈). 수사 중의 실수로 사이버수사대로 전출됐던 남한 형사 ‘강진태’(유해진)는 광수대 복귀를 위해 모두가 기피하는 ‘철령’의 파트너를 자청한다. 이렇게 다시 공조하게 된 ‘철령’과 ‘진태’! ‘철령’과 재회한 ‘민영’(임윤아)의 마음도 불타오르는 가운데, ‘철령’과 ‘진태’는 여전히 서로의 속내를 의심하면서도 나름 그럴싸한 공조 수사를 펼친다. 드디어 범죄 조직 리더인 ‘장명준’(진선규)의 은신처를 찾아내려는 찰나, 미국에서 날아온 FBI 소속 ‘잭’(다니엘 헤니)이 그들 앞에 나타나는데…! 아직도 짠내 나는 남한 형사, 여전한 엘리트 북한 형사, 그리고 FBI 소속 해외파 형사까지! 각자의 목적으로 뭉친 그들의 짜릿한 공조 수사가 시작된다!`,
        runTime : 129,
        rate : 7.92
    },
    {
        id : 15,
        title : '엘리멘탈',
        year : new Date(2023, 5, 14).getTime(),
        photo : movie15,
        ageRestriction : gradeAll,
        director : '피터 손',
        cast : '레아 루이스, 마무두 아티',
        plot : `불, 물, 공기, 흙 4개의 원소들이 살고 있는 ‘엘리멘트 시티’ 재치 있고 불처럼 열정 넘치는 ‘앰버'는 어느 날 우연히 유쾌하고 감성적이며 물 흐르듯 사는 '웨이드'를 만나 특별한 우정을 쌓으며, 지금껏 믿어온 모든 것들이 흔들리는 새로운 경험을 하게 되는데... 웰컴 투 ‘엘리멘트 시티’!`,
        runTime : 109,
        rate : 8.93
    },
    {
        id : 16,
        title : '아바타: 물의 길',
        year : new Date(2022, 11, 14).getTime(),
        photo : movie16,
        ageRestriction : grade12,
        director : '제임스 카메론',
        cast : '조 샐다나, 샘 워싱턴, 시고니 위버, 우나 채플린, 지오바니 리비시',
        plot : `<아바타: 물의 길>은 판도라 행성에서 '제이크 설리'와 '네이티리'가 이룬 가족이 겪게 되는 무자비한 위협과 살아남기 위해 떠나야 하는 긴 여정과 전투, 그리고 견뎌내야 할 상처에 대한 이야기를 그렸다. 월드와이드 역대 흥행 순위 1위를 기록한 전편 <아바타>에 이어 제임스 카메론 감독이 13년만에 선보이는 영화로, 샘 워싱턴, 조 샐다나, 시고니 위버, 스티븐 랭, 케이트 윈슬렛이 출연하고 존 랜도가 프로듀싱을 맡았다.`,
        runTime : 192,
        rate : 8.83
    },
    {
        id : 17,
        title : '다만 악에서 구하소서',
        year : new Date(2020, 7, 5).getTime(),
        photo : movie17,
        ageRestriction : grade15,
        director : '홍원찬',
        cast : '황정민, 이정재, 박정민, 박소이',
        plot : `태국에서 충격적인 납치사건이 발생하고 마지막 청부살인 미션을 끝낸 암살자 인남(황정민)은 그것이 자신과 관계된 것임을 알게 된다. 인남은 곧바로 태국으로 향하고, 조력자 유이(박정민)를 만나 사건을 쫓기 시작한다. 한편, 자신의 형제가 인남에게 암살당한 것을 알게 된 레이(이정재). 무자비한 복수를 계획한 레이는 인남을 추격하기 위해 태국으로 향하는데... 처절한 암살자 VS 무자비한 추격자 멈출 수 없는 두 남자의 지독한 추격이 시작된다!`,
        runTime : 108,
        rate : 8.54
    },
    {
        id : 18,
        title : '오펜하이머',
        year : new Date(2023, 7, 15).getTime(),
        photo : movie18,
        ageRestriction : grade15,
        director : '크리스토퍼 놀란',
        cast : '킬리언 머피, 에밀리 블런트, 맷 데이먼, 로버트 다우니 주니어, 플로렌스 퓨',
        plot : `“나는 이제 죽음이요, 세상의 파괴자가 되었다.” 세상을 구하기 위해 세상을 파괴할 지도 모르는 선택을 해야 하는 천재 과학자의 핵개발 프로젝트.`,
        runTime : 180,
        rate : 8.53
    },
    {
        id : 19,
        title : '스파이더맨: 노 웨이 홈',
        year : new Date(2021, 11, 15).getTime(),
        photo : movie19,
        ageRestriction : grade12,
        director : '존 왓츠',
        cast : '톰 홀랜드, 젠데이아 콜먼, 베네딕트 컴버배치, 존 파브로, 제이콥 배덜런',
        plot : `‘미스테리오’의 계략으로 세상에 정체가 탄로난 스파이더맨 ‘피터 파커’는 하루 아침에 평범한 일상을 잃게 된다. 문제를 해결하기 위해 ‘닥터 스트레인지’를 찾아가 도움을 청하지만 뜻하지 않게 멀티버스가 열리면서 각기 다른 차원의 불청객들이 나타난다. ‘닥터 옥토퍼스’를 비롯해 스파이더맨에게 깊은 원한을 가진 숙적들의 강력한 공격에 ‘피터 파커’는 사상 최악의 위기를 맞게 되는데…`,
        runTime : 148,
        rate : 9.09
    },
]

function App() {
    const [cateYear, setCateYear] = useState('all');

    return (
        <div className="App">
            <Header dummyList={dummyList} />
            <MovieTop setCateYear={setCateYear} />
            <MovieList dummyList={dummyList} cateYear={cateYear} />
            <Footer />
        </div>
    );
}

export default App;
