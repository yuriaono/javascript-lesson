'use strict';

// かくれ課題１ そのまま出るーーーーーーーーーーーーーーーーーーーーーー
// #menu-btnをクリックしたとき、#gnaviにクラス名の「open」がついてなければ追加、すでにあれば削除

const menuBtn = document.querySelector('#menu-btn');
const gnavi = document.querySelector('#gnavi');

menuBtn.addEventListener('click', (e) => {
    gnavi.classList.toggle('open');
    e.currentTarget.classList.toggle('close');
});

// #menu-btnをクリックしたとき、#menu-btnにクラス名の「close」がついてなければ追加、すでにあれば削除

// かくれ課題１ここまでーーーーーーーーーーーーーーーーーーー



// かくれ課題２ ちょっと変えて出す（ほぼそのまま）ーーーーーーーーーーーーーーーーーーーーーー

// 上から300以上スクロールしたら#page-topに.openを追加し、300未満の時は.openをはずす

const getScrollY = () => {
    const scrolled = window.scrollY;
    const pageTop = document.querySelector('#page-top');
    // console.log(scrolled);

    if (scrolled >= 300) {
        pageTop.classList.add('open');
    } else {
        pageTop.classList.remove('open');
    }
};

window.addEventListener('scroll', getScrollY);


// かくれ課題２ここまでーーーーーーーーーーーーーーーーーーー

// 課題１
// formの取得
const whatDay = document.querySelector('#what-day');

// 送信イベント
whatDay.addEventListener('submit', (e) => {
    // 初期動作のキャンセル
    e.preventDefault();

    // console.log('送信した');

    // 入力内容の取得
    const year = whatDay.year.value;
    const month = whatDay.month.value;
    const date = whatDay.date.value;

    // 日時
    const now = new Date(year, month - 1, date);

    console.log(now);

    // 曜日の取得
    const dayList = ['日','月','火','水','木','金','土',];
    const day = now.getDay();

    // #A-01に「●年●月●日」と表示
    document.querySelector('#A-01').textContent = `${year}年${month}月${date}日`;

    // #A-02に「●曜日」と表示
    document.querySelector('#A-02').textContent = `${dayList[day]}曜日`;
});

// テスト用めも=====================================
// テストは午前中3時間
// ３ローディング画面（消す）が出る
// ４ギャラリー（配列で準備した画像を順番に出す）
// ５ 画面内に入ったらふわっと出すのも出る（教科書の一番最後）
// 教科書と紙は持ち込みOK
// コメントアウトは採点対処にならない
// =====================================


// 課題２ BMIーーーーーーーーーーーーーーーーーーー

// 1.formのIDを取得して submitイベントを設定
const whatBmi =document.querySelector('#what-bmi')

whatBmi.addEventListener('submit', (e) => {
    // 初期動作のキャンセル
    e.preventDefault();

    // 入力内容の取得
    const kg = whatBmi.kg.value;
    const m = (whatBmi.cm.value) / 100;

    // 計算
    const bmi = Math.floor((kg / (m * m)) *10)/10;
  

    // 計算結果からメッセージを作成
    // 25以上 肥満気味・18.5～24.9 標準・18.5未満 痩せすぎ
    let message = ''; // メッセージ用の入れ物
    if (bmi >= 25) {
        message = '肥満気味';
    } else if ( bmi >= 18.5 ) {
        message = '標準';
    } else {
        message = '痩せすぎ';
    }

    // 結果表示
    document.querySelector('#A-03').textContent = bmi;
    document.querySelector('#A-04').textContent = message;

  console/log(`${kg}kgと${m}m`) ;
});

// 課題3 タブで切り替えーーーーーーーーーーーーーーーーーーー

// // Vanilla JSの場合
// const tabs = document.querySelectorAll('.tab-link');
// const sections = document.querySelectorAll('.tab-sec');

// tabs.forEach( (tab) => {
//     tab.addEventListener('click',(e) => {
//         // console.log('クリック');

//         // すべてのsectionから.openを外す 
//         sections.forEach((sec) => {
//             sec.classList.remove('open');
//         });

//         // すべてのtabから.openを外す
//         tabs.forEach((tab) => {
//             tab.classList.remove('open');
//         });

//         // sectionに.openをつける
//         const tabData = e.target.dataset.tab;
//         document.querySelector(`#${tabData}`).classList.add('open');

//         // クリックした場所に.openをつける
//         e.target.classList.add('open');

//         // console.log(tabData);
//     });
//    }); 

    // jqueryの場合
    $('.tab-link').on('click', (e) => {
        $('.tab-link,.tab-sec').removeClass('open');
        
        const tabTarget = $(e.target); // クリックした要素
        tabTarget.addClass('open');
        $( `#${tabTarget.data('tab')}`).addClass('open');
    });
    

