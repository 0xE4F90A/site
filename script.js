"use strict";

/**
 * 便利サイト集：データをここで管理
 * - frequent: カード表示
 * - other: ピル（カテゴリ別）表示
 */
const FREQUENT_SITES = [
  { name: "Google", url: "https://www.google.com/?hl=ja", desc: "検索の起点。迷ったらまずここ。", tag: "Search" },
  { name: "Yahoo! JAPAN", url: "https://www.yahoo.co.jp/", desc: "ニュース・天気・知恵袋などの定番ポータル。", tag: "Portal" },
  { name: "YouTube", url: "https://www.youtube.com/", desc: "学習・音楽・解説動画。作業用にも。", tag: "Video" },

  { name: "Amazon", url: "https://www.amazon.co.jp/", desc: "買い物・レビュー確認。生活の基盤。", tag: "EC" },
  { name: "ヨドバシ.com", url: "https://www.yodobashi.com/", desc: "家電〜日用品。配送が強い。", tag: "EC" }, // :contentReference[oaicite:4]{index=4}
  { name: "価格.com", url: "https://kakaku.com/", desc: "価格比較・クチコミ・ランキング。", tag: "Price" }, // :contentReference[oaicite:5]{index=5}

  { name: "Google マップ", url: "https://www.google.co.jp/maps/?hl=ja", desc: "地図・経路・お店検索。", tag: "Map" },
  { name: "DeepL 翻訳", url: "https://www.deepl.com/ja/translator", desc: "高精度翻訳。文章・ドキュメントにも。", tag: "Translate" }, // :contentReference[oaicite:6]{index=6}
  { name: "Notion", url: "https://www.notion.com/ja", desc: "メモ・タスク・Wikiをまとめる。", tag: "Note" }, // :contentReference[oaicite:7]{index=7}

  { name: "GigaFile便", url: "https://gigafile.nu/", desc: "登録不要の大容量ファイル転送。", tag: "File" }, // :contentReference[oaicite:8]{index=8}
  { name: "firestorage", url: "https://firestorage.jp/", desc: "オンラインストレージ/転送。", tag: "File" }, // :contentReference[oaicite:9]{index=9}
  { name: "Send Anywhere", url: "https://send-anywhere.com/ja/", desc: "デバイス間/URLで転送。", tag: "File" } // :contentReference[oaicite:10]{index=10}
];

const OTHER_GROUPS = [
  {
    title: "買い物 / 価格比較",
    links: [
      { name: "楽天市場", url: "https://www.rakuten.co.jp/" },
      { name: "Yahoo!ショッピング", url: "https://shopping.yahoo.co.jp/" },
      { name: "ビックカメラ.com", url: "https://www.biccamera.com/" },
      { name: "ヨドバシ.com", url: "https://www.yodobashi.com/" }, // :contentReference[oaicite:11]{index=11}
      { name: "Amazon", url: "https://www.amazon.co.jp/" },
      { name: "価格.com", url: "https://kakaku.com/" } // :contentReference[oaicite:12]{index=12}
    ]
  },
  {
    title: "中古 / フリマ / オークション",
    links: [
      { name: "メルカリ", url: "https://jp.mercari.com/" },
      { name: "Yahoo!オークション", url: "https://auctions.yahoo.co.jp/" },
      { name: "ラクマ", url: "https://fril.jp/" },
      { name: "ジモティー", url: "https://jmty.jp/" }
    ]
  },
  {
    title: "地図 / 交通 / ルート",
    links: [
      { name: "Google マップ", url: "https://www.google.co.jp/maps/?hl=ja" },
      { name: "Yahoo!路線情報", url: "https://transit.yahoo.co.jp/" },
      { name: "NAVITIME", url: "https://www.navitime.co.jp/" },
      { name: "ジョルダン 乗換案内", url: "https://www.jorudan.co.jp/" },
      { name: "駅すぱあと", url: "https://ekiworld.net/" }
    ]
  },
  {
    title: "ファイル転送 / 共有",
    links: [
      { name: "GigaFile便", url: "https://gigafile.nu/" }, // :contentReference[oaicite:13]{index=13}
      { name: "firestorage", url: "https://firestorage.jp/" }, // :contentReference[oaicite:14]{index=14}
      { name: "WeTransfer", url: "https://wetransfer.com/" }, // :contentReference[oaicite:15]{index=15}
      { name: "Send Anywhere", url: "https://send-anywhere.com/ja/" }, // :contentReference[oaicite:16]{index=16}
      { name: "Dropbox Transfer", url: "https://www.dropbox.com/transfer" }
    ]
  },
  {
    title: "クラウド / ドキュメント",
    links: [
      { name: "Google Drive", url: "https://drive.google.com/" },
      { name: "Google Docs", url: "https://docs.google.com/" },
      { name: "Google Calendar", url: "https://calendar.google.com/" },
      { name: "OneDrive", url: "https://onedrive.live.com/" },
      { name: "Dropbox", url: "https://www.dropbox.com/" },
      { name: "Notion", url: "https://www.notion.com/ja" } // :contentReference[oaicite:17]{index=17}
    ]
  },
  {
    title: "翻訳 / 言語",
    links: [
      { name: "DeepL 翻訳", url: "https://www.deepl.com/ja/translator" }, // :contentReference[oaicite:18]{index=18}
      { name: "Google 翻訳", url: "https://translate.google.com/?hl=ja" },
      { name: "英辞郎 on the WEB", url: "https://eow.alc.co.jp/" },
      { name: "Weblio", url: "https://www.weblio.jp/" }
    ]
  },
  {
    title: "開発 / 技術",
    links: [
      { name: "GitHub", url: "https://github.com/" },
      { name: "Qiita", url: "https://qiita.com/" },
      { name: "Zenn", url: "https://zenn.dev/" },
      { name: "Stack Overflow", url: "https://stackoverflow.com/" },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org/ja/" },
      { name: "cppreference", url: "https://en.cppreference.com/w/" },
      { name: "Compiler Explorer", url: "https://godbolt.org/" }
    ]
  },
  {
    title: "画像 / 素材 / デザイン",
    links: [
      { name: "Google Fonts", url: "https://fonts.google.com/" },
      { name: "Font Awesome", url: "https://fontawesome.com/" },
      { name: "Unsplash", url: "https://unsplash.com/" },
      { name: "Pexels", url: "https://www.pexels.com/ja-jp/" },
      { name: "Canva", url: "https://www.canva.com/ja_jp/" }
    ]
  },
  {
    title: "時間 / 便利ツール",
    links: [
      { name: "タイマー", url: "https://timer.onl.jp/" },
      { name: "ストップウォッチ", url: "https://stopwatch.onl.jp/" },
      { name: "こよみのページ", url: "http://koyomi8.com/" },
      { name: "Web電卓", url: "https://www.webdentaku.com/" },
      { name: "time.is", url: "https://time.is/ja/" }
    ]
  },
  {
    title: "セキュリティ / チェック",
    links: [
      { name: "VirusTotal", url: "https://www.virustotal.com/" },
      { name: "Have I Been Pwned", url: "https://haveibeenpwned.com/" },
      { name: "URLVoid", url: "https://www.urlvoid.com/" }
    ]
  },
  {
    title: "動画 / 配信 / 娯楽",
    links: [
      { name: "YouTube", url: "https://www.youtube.com/" },
      { name: "Twitch", url: "https://www.twitch.tv/" },
      { name: "ニコニコ動画", url: "https://www.nicovideo.jp/" },
      { name: "Netflix", url: "https://www.netflix.com/jp/" }
    ]
  },
  {
    title: "フード / デリバリー",
    links: [
      { name: "Uber Eats", url: "https://www.ubereats.com/jp" },
      { name: "出前館", url: "https://demae-can.com/" },
      { name: "ガスト(宅配)", url: "https://delivery.skylark.co.jp/brand/gusto?initialized=true&display_mode=grid&category=category_GT0305" }
    ]
  }
];


const STORAGE_KEY = "utility_collection_favs_v1";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function loadFavs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

function saveFavs(favs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(favs)));
  } catch {
    // storage disabled, ignore
  }
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("isShow");

  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(() => {
    toast.classList.remove("isShow");
  }, 1600);
}

function safeOpen(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function createCard(site, isFav) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.name = site.name.toLowerCase();
  card.dataset.desc = site.desc.toLowerCase();

  const top = document.createElement("div");
  top.className = "card__top";

  const left = document.createElement("div");
  const name = document.createElement("h3");
  name.className = "card__name";
  name.textContent = site.name;

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = site.tag || "Link";
  name.appendChild(badge);

  const meta = document.createElement("div");
  meta.className = "card__meta";
  meta.textContent = new URL(site.url).hostname;

  left.appendChild(name);
  left.appendChild(meta);

  const actions = document.createElement("div");
  actions.className = "card__actions";

  const favBtn = document.createElement("button");
  favBtn.className = "iconBtn iconBtn--fav";
  favBtn.type = "button";
  favBtn.title = "お気に入り";
  favBtn.setAttribute("aria-label", "お気に入り");
  favBtn.textContent = "★";
  if (isFav) favBtn.classList.add("isFav");

  const toggleBtn = document.createElement("button");
  toggleBtn.className = "iconBtn";
  toggleBtn.type = "button";
  toggleBtn.title = "説明を開閉";
  toggleBtn.setAttribute("aria-label", "説明を開閉");
  toggleBtn.textContent = "⌄";

  actions.appendChild(favBtn);
  actions.appendChild(toggleBtn);

  top.appendChild(left);
  top.appendChild(actions);

  const desc = document.createElement("div");
  desc.className = "card__desc";
  desc.textContent = site.desc;

  const foot = document.createElement("div");
  foot.className = "card__foot";

  const openBtn = document.createElement("a");
  openBtn.className = "linkBtn";
  openBtn.href = site.url;
  openBtn.target = "_blank";
  openBtn.rel = "noreferrer";
  openBtn.textContent = "開く →";

  const hint = document.createElement("span");
  hint.className = "card__meta";
  hint.textContent = "クリックで説明";

  foot.appendChild(hint);
  foot.appendChild(openBtn);

  card.appendChild(top);
  card.appendChild(desc);
  card.appendChild(foot);

  return { card, favBtn, toggleBtn, openBtn };
}

function renderFrequentGrid() {
  const grid = $("#frequentGrid");
  if (!grid) return;

  grid.innerHTML = "";

  const favs = loadFavs();
  const query = ($("#searchInput")?.value || "").trim().toLowerCase();
  const onlyFav = $("#onlyFav")?.checked ?? false;

  const filtered = FREQUENT_SITES.filter(s => {
    const matchQuery =
      !query ||
      s.name.toLowerCase().includes(query) ||
      s.desc.toLowerCase().includes(query) ||
      (s.tag || "").toLowerCase().includes(query);

    const isFav = favs.has(s.url);
    const matchFav = !onlyFav || isFav;

    return matchQuery && matchFav;
  });

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.style.gridColumn = "span 12";
    empty.innerHTML = `<h3 class="card__name">見つかりませんでした</h3>
      <div class="card__meta">検索ワードや「お気に入りのみ」を見直してください。</div>`;
    grid.appendChild(empty);
    return;
  }

  filtered.forEach(site => {
    const isFav = favs.has(site.url);
    const { card, favBtn, toggleBtn, openBtn } = createCard(site, isFav);

    toggleBtn.addEventListener("click", () => {
      card.classList.toggle("isOpen");
    });

    // カードクリックでも説明開閉（リンクやボタンは除外）
    card.addEventListener("click", (e) => {
      const t = e.target;
      if (t === openBtn || t === favBtn || t === toggleBtn) return;
      if (t.closest("a,button")) return;
      card.classList.toggle("isOpen");
    });

    favBtn.addEventListener("click", () => {
      const favs2 = loadFavs();
      if (favs2.has(site.url)) {
        favs2.delete(site.url);
        favBtn.classList.remove("isFav");
        showToast("お気に入りから削除しました");
      } else {
        favs2.add(site.url);
        favBtn.classList.add("isFav");
        showToast("お気に入りに追加しました");
      }
      saveFavs(favs2);
      // お気に入りのみ表示中なら即反映
      if ($("#onlyFav")?.checked) renderFrequentGrid();
    });

    grid.appendChild(card);
  });
}

function renderOtherGroups() {
  const root = $("#otherGroups");
  if (!root) return;

  root.innerHTML = "";

  const query = ($("#searchInput")?.value || "").trim().toLowerCase();

  OTHER_GROUPS.forEach(group => {
    const links = group.links.filter(l => {
      if (!query) return true;
      return l.name.toLowerCase().includes(query) || l.url.toLowerCase().includes(query);
    });

    if (links.length === 0) return;

    const wrap = document.createElement("div");
    wrap.className = "pillGroup";

    const title = document.createElement("h3");
    title.className = "pillGroup__title";
    title.textContent = group.title;

    const pills = document.createElement("div");
    pills.className = "pills";

    links.forEach(l => {
      const a = document.createElement("a");
      a.className = "pill";
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.textContent = l.name;
      pills.appendChild(a);
    });

    wrap.appendChild(title);
    wrap.appendChild(pills);
    root.appendChild(wrap);
  });
}

function openDialog(dlg) {
  if (!dlg) return;
  if (typeof dlg.showModal === "function") dlg.showModal();
  else dlg.setAttribute("open", "open");
}

function closeDialog(dlg) {
  if (!dlg) return;
  if (typeof dlg.close === "function") dlg.close();
  else dlg.removeAttribute("open");
}

function setupDialogs() {
  const loginDialog = $("#loginDialog");
  const signupDialog = $("#signupDialog");

  const openLogin = () => openDialog(loginDialog);
  const openSignup = () => openDialog(signupDialog);

  $("#loginOpen")?.addEventListener("click", openLogin);
  $("#signupOpen")?.addEventListener("click", openSignup);
  $("#loginOpen_m")?.addEventListener("click", openLogin);
  $("#signupOpen_m")?.addEventListener("click", openSignup);

  $("#loginBtn")?.addEventListener("click", () => {
    const id = ($("#loginId")?.value || "").trim();
    const pass = ($("#loginPass")?.value || "").trim();

    if (!id || !pass) {
      showToast("IDとパスワードを入力してください");
      return;
    }

    // 重要：パスワードをURLに含めるのは危険なので絶対しない
    // デモとして「ログイン成功っぽい」演出のみ
    showToast(`ようこそ、${id} さん（デモ）`);
    closeDialog(loginDialog);
  });

  $("#signupBtn")?.addEventListener("click", () => {
    const mail = ($("#signupEmail")?.value || "").trim();
    const pass = ($("#signupPass")?.value || "").trim();

    if (!mail || !pass) {
      showToast("メールとパスワードを入力してください");
      return;
    }

    showToast("登録しました（デモ）");
    closeDialog(signupDialog);
  });
}

function setupHeader() {
  $("#brandBtn")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $("#toTop")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const burger = $("#burgerBtn");
  const mobileNav = $("#mobileNav");

  const setMobileOpen = (open) => {
    if (!burger || !mobileNav) return;
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    mobileNav.classList.toggle("isOpen", open);
    mobileNav.setAttribute("aria-hidden", open ? "false" : "true");
  };

  burger?.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") !== "true";
    setMobileOpen(open);
  });

  // モバイルメニュー内リンクを押したら閉じる
  $$("#mobileNav a").forEach(a => {
    a.addEventListener("click", () => setMobileOpen(false));
  });
}

function setupSearchAndFilters() {
  $("#searchInput")?.addEventListener("input", () => {
    renderFrequentGrid();
    renderOtherGroups();
  });

  $("#onlyFav")?.addEventListener("change", () => {
    renderFrequentGrid();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupHeader();
  setupDialogs();
  setupSearchAndFilters();

  renderFrequentGrid();
  renderOtherGroups();
});
