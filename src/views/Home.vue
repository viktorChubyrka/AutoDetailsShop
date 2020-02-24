
<template>
  <div>
    <div class="container">
      <div class="header-mobile"></div>
      <div class="header">
        <div class="first-floor">
          <div class="phone-menu-btn">
            <v-icon class="ico" x-large>menu</v-icon>
            <div class="side-menu">
              <ul>
                <li>
                  <a style="display:flex" href="/">
                    Двигатель
                    <v-spacer />>
                  </a>
                </li>

                <li>
                  <a style="display:flex" href="/">
                    Тормоза
                    <v-spacer />>
                  </a>
                </li>
                <li>
                  <a style="display:flex" href="/">
                    Подвеска
                    <v-spacer />>
                  </a>
                </li>
                <li>
                  <a style="display:flex" href="/">
                    Инструмент
                    <v-spacer />>
                  </a>
                </li>
                <li>
                  <a style="display:flex" href="/">
                    Трансмисия
                    <v-spacer />>
                  </a>
                </li>
                <li>
                  <a style="display:flex" href="/">
                    Кузов и оптика
                    <v-spacer />>
                  </a>
                </li>
                <li>
                  <a style="display:flex" href="/">
                    Система охлаждения
                    <v-spacer />>
                  </a>
                </li>
                <li>
                  <a style="display:flex" href="/">
                    Электрика
                    <v-spacer />>
                  </a>
                </li>
                <li>
                  <a style="display:flex" href="/">
                    Выхлопная система
                    <v-spacer />>
                  </a>
                </li>
                <li>
                  <a style="display:flex" href="/">
                    Система очистки окон
                    <v-spacer />>
                  </a>
                </li>
                <li>
                  <a style="display:flex" href="/">
                    Фильтры
                    <v-spacer />>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src="data:image/png;base64,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"
              alt
            />
          </div>
          <v-spacer></v-spacer>
          <div>
            <a href="/">
              <v-icon class="icon" style="margin-left:4%" x-large>shopping_cart</v-icon>
              <h4>Корзина</h4>
            </a>
          </div>
          <div @click="login=(!login)">
            <v-icon x-large>account_box</v-icon>
            <h4>Войти</h4>
          </div>
        </div>
        <div class="second-floor">
          <div>
            <div class="dropdown-menu">
              <button class="dropbtn">
                <h4>АССОРТИМЕНТ</h4>
                <v-icon style="color:white;margin:0% 2%">menu</v-icon>
              </button>
              <ul class="dropdown-list">
                <li class="drpdwn-item">
                  <h4>Item 1</h4>
                  <v-spacer />>
                  <ul class="sub-dropdown-list">
                    <li class="sub-dropdown-item">
                      <h4>Super Item 1</h4>
                      <v-spacer />>
                      <ul class="super-sub-dropdown-list">
                        <li class="super-sub-dropdown-item">Super-sub-item 1</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 2</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 3</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 4</li>
                      </ul>
                    </li>
                    <li class="sub-dropdown-item">
                      <h4>Super Item 2</h4>
                      <v-spacer />>
                      <ul class="super-sub-dropdown-list">
                        <li class="super-sub-dropdown-item">Super-sub-item 1</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 2</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 3</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 4</li>
                      </ul>
                    </li>
                    <li class="sub-dropdown-item">
                      <h4>Super Item 3</h4>
                      <v-spacer />>
                      <ul class="super-sub-dropdown-list">
                        <li class="super-sub-dropdown-item">Super-sub-item 1</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 2</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 3</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 4</li>
                      </ul>
                    </li>
                    <li class="sub-dropdown-item">
                      <h4>Super Item 4</h4>
                      <v-spacer />>
                      <ul class="super-sub-dropdown-list">
                        <li class="super-sub-dropdown-item">Super-sub-item 1</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 2</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 3</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 4</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="drpdwn-item">
                  <h4>Item 2</h4>
                  <v-spacer />>
                  <ul class="sub-dropdown-list">
                    <li class="sub-dropdown-item">
                      <h4>Super Item 1</h4>
                      <v-spacer />>
                      <ul class="super-sub-dropdown-list">
                        <li class="super-sub-dropdown-item">Super-sub-item 1</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 2</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 3</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 4</li>
                      </ul>
                    </li>
                    <li class="sub-dropdown-item">
                      <h4>Super Item 2</h4>
                      <v-spacer />>
                      <ul class="super-sub-dropdown-list">
                        <li class="super-sub-dropdown-item">Super-sub-item 1</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 2</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 3</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 4</li>
                      </ul>
                    </li>
                    <li class="sub-dropdown-item">
                      <h4>Super Item 3</h4>
                      <v-spacer />>
                      <ul class="super-sub-dropdown-list">
                        <li class="super-sub-dropdown-item">Super-sub-item 1</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 2</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 3</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 4</li>
                      </ul>
                    </li>
                    <li class="sub-dropdown-item">
                      <h4>Super Item 4</h4>
                      <v-spacer />>
                      <ul class="super-sub-dropdown-list">
                        <li class="super-sub-dropdown-item">Super-sub-item 1</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 2</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 3</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 4</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="drpdwn-item">
                  <h4>Item 3</h4>
                  <v-spacer />>
                  <ul class="sub-dropdown-list">
                    <li class="sub-dropdown-item">
                      <h4>Super Item 1</h4>
                      <v-spacer />>
                      <ul class="super-sub-dropdown-list">
                        <li class="super-sub-dropdown-item">Super-sub-item 1</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 2</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 3</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 4</li>
                      </ul>
                    </li>
                    <li class="sub-dropdown-item">
                      <h4>Super Item 2</h4>
                      <v-spacer />>
                      <ul class="super-sub-dropdown-list">
                        <li class="super-sub-dropdown-item">Super-sub-item 1</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 2</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 3</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 4</li>
                      </ul>
                    </li>
                    <li class="sub-dropdown-item">
                      <h4>Super Item 3</h4>
                      <v-spacer />>
                      <ul class="super-sub-dropdown-list">
                        <li class="super-sub-dropdown-item">Super-sub-item 1</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 2</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 3</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 4</li>
                      </ul>
                    </li>
                    <li class="sub-dropdown-item">
                      <h4>Super Item 4</h4>
                      <v-spacer />>
                      <ul class="super-sub-dropdown-list">
                        <li class="super-sub-dropdown-item">Super-sub-item 1</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 2</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 3</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 4</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="drpdwn-item">
                  <h4>Item 4</h4>
                  <v-spacer />>
                  <ul class="sub-dropdown-list">
                    <li class="sub-dropdown-item">
                      <h4>Super Item 1</h4>
                      <v-spacer />>
                      <ul class="super-sub-dropdown-list">
                        <li class="super-sub-dropdown-item">Super-sub-item 1</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 2</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 3</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 4</li>
                      </ul>
                    </li>
                    <li class="sub-dropdown-item">
                      <h4>Super Item 2</h4>
                      <v-spacer />>
                      <ul class="super-sub-dropdown-list">
                        <li class="super-sub-dropdown-item">Super-sub-item 1</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 2</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 3</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 4</li>
                      </ul>
                    </li>
                    <li class="sub-dropdown-item">
                      <h4>Super Item 3</h4>
                      <v-spacer />>
                      <ul class="super-sub-dropdown-list">
                        <li class="super-sub-dropdown-item">Super-sub-item 1</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 2</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 3</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 4</li>
                      </ul>
                    </li>
                    <li class="sub-dropdown-item">
                      <h4>Super Item 4</h4>
                      <v-spacer />>
                      <ul class="super-sub-dropdown-list">
                        <li class="super-sub-dropdown-item">Super-sub-item 1</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 2</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 3</li>
                        <li class="super-sub-dropdown-item">Super-sub-item 4</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="toolbar-nav-componenet">
              <h4>АККУМУЛЯТОРЫ</h4>
            </div>
            <div class="toolbar-nav-componenet">
              <h4>АКСЕССУАРЫ</h4>
            </div>
            <div class="toolbar-nav-componenet">
              <h4>МОТО</h4>
            </div>
            <div class="toolbar-nav-componenet">
              <h4>ШИНЫ NOKIAN</h4>
            </div>
            <div class="toolbar-nav-componenet">
              <h4>АКЦИИ И НОВОСТИ</h4>
            </div>
            <div class="toolbar-nav-componenet">
              <h4>ПОМОЩЬ</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="search-auto-container">
          <div id="search-by-auto">
            <div>
              <h3>Выберите авто</h3>
              <select name id>
                <option label="Выберите год" value="0"></option>
              </select>
              <select name id>
                <option label="Выберите марку" value="0"></option>
              </select>
              <select name id>
                <option label="Выберите модель" value="0"></option>
              </select>
              <select name id>
                <option label="Выберите мотор" value="0"></option>
              </select>
            </div>
          </div>
          <div class="ad">
            <img
              style="width:100%;height:100%;border-radius:10px"
              src="data:image/jpeg;base64,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"
              alt
            />
          </div>
        </div>
        <div class="products-container">
          <div v-for="i in els" :key="i" :id="i" class="product">
            <div class="product-content">
              <img src="https://i2.rozetka.ua/goods/12903158/103112064_images_12903158574.png" />
              <h3 style="font-size:20px">233$</h3>
              <h4>Свеча зажигания и тд и тп</h4>
            </div>
          </div>
        </div>
        <div class="details-class-conteiner">
          <h1 style="font-weight:300">КАТАЛОГ ЗАПЧАСТЕЙ</h1>
          <div class="catalog-box">
            <div class="sub-catalog-box-1">
              <div class="catalog-item" style="width:30%;height:388px">
                <h2 style="position:absolute;">Двигатель</h2>
                <img
                  class="category-img"
                  src="https://www.gmperformancemotor.com/mm5/graphics/00000001/19417105-3_540x495.jpg"
                  alt
                />
              </div>
              <div class="mobile" style="width:70%;height:388px">
                <div class="mobile3" style="display:flex;width:100%;height:192px">
                  <div class="catalog-item" style="width:50%;height:194px">
                    <h2 style="position:absolute;">Трансмисия</h2>
                    <img
                      class="category-img"
                      src="https://seite1.ru/wp-content/uploads/2016/12/how_automatic_transmissi-400x280.jpg"
                      alt
                    />
                  </div>
                  <div class="catalog-item" style="width:50%;background-color:grey;height:194px">
                    <h2 style="position:absolute">Подвеска</h2>
                    <img
                      class="category-img"
                      src="https://automotolife.com/app/uploads/2017/09/podveska-avtomobilya-vidy-i-tipy-930x588.jpg"
                      alt
                    />
                  </div>
                </div>
                <div class="mobile2" style="display:flex;width:100%;height:195px">
                  <div class="catalog-item" style="width:25%;height:195px">
                    <h2 style="position:absolute;">
                      Кузов и
                      <br />оптика
                    </h2>
                    <img class="category-img" src="https://eshop.elit.ua/imgbank/Image/5.jpg" alt />
                  </div>
                  <div class="catalog-item" style="width:45%;height:195px">
                    <h2 style="position:absolute;">Система охлаждения</h2>
                    <img
                      class="category-img"
                      src="https://auto.today/media/res/9/4/7/1/9471.nwgl9o.600.jpg"
                      alt
                    />
                  </div>
                  <div class="catalog-item" style="width:30%;height:195px">
                    <h2 style="position:absolute;">Тормоза</h2>
                    <img
                      class="category-img"
                      src="https://sale.autoua.net/media/sale/2013/08/24/1036610.jpg"
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="sub-catalog-box-2">
              <div class="catalog-item" style="width:20%;height:200px">
                <h2 style="position:absolute;">Електрика</h2>
                <img
                  class="category-img"
                  src="https://zen-top.ru/wp-content/uploads/2018/02/akkumulator-avtomobilnyj-delkor-60l.jpg"
                  alt
                />
              </div>
              <div class="catalog-item" style="width:35%;height:200px">
                <h2 style="position:absolute;">Выхлопная система</h2>
                <img
                  class="category-img"
                  src="https://apollo-ireland.akamaized.net/v1/files/05le8m0qw9ap1-UA/image;s=644x461"
                  alt
                />
              </div>
              <div class="catalog-item" style="width:20%;height:200px">
                <h2 style="position:absolute;">Фильтра</h2>
                <img
                  class="category-img"
                  src="https://autotovary.com.ua/imgbank/Image/Gruppy%20s%20glavnoy/filtry/filtr.jpg"
                  alt
                />
              </div>
              <div class="catalog-item" style="width:25%;height:200px">
                <h2 style="position:absolute;">Система очистки окон</h2>
                <img
                  class="category-img"
                  src="https://i1.rozetka.ua/goods/10932028/72464061_images_10932028773.jpg"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-dialog v-model="login" max-width="80%">
        <v-card style="background-color:#eafaff;height:100%">
          <v-card-title class="headline">Регистрация</v-card-title>
          <div class="login-form">
            <h4>Логин</h4>
            <input type="text" />
            <h4>E-mail или номер телефона</h4>
            <input type="text" />
            <h4>Пароль</h4>
            <input type="text" />
          </div>
          <v-card-actions style="margin-left:4%;padding-bottom:4%;">
            <v-btn color="green lighten-1" text @click="dialog = false">Регистрация</v-btn>
            <v-btn color="green lighten-1" text @click="dialog = false">Отмена</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: false,
      els: ["a", "b", "c", "d", "e", "t", "y", "u", "y", "t"],
      methods: {}
    };
  }
};
</script>
<style>
h2,
h3 {
  font-size: 1.8vw;
}
.login-form {
  width: 90%;
  margin: auto;
}
.login-form input {
  width: 80%;
  height: 30px;
  border-left: 2px solid #e0e7ec;
  border-bottom: 2px solid #e0e7ec;
  margin: 2% auto;
  padding: 2%;
  background-color: white;
  color: #505663;
  font-weight: 800;
}
.side-menu {
  position: absolute;
  left: -105%;
  top: 87%;
  width: 100%;
  height: 400px;
  margin-left: 20%;
  background-color: #eafaff;
  text-align: center;
  transition-timing-function: ease-out;
  transition: left 1s;
}

.side-menu ul li {
  margin: 1%;
  padding: 1% 6% 1% 1%;
  color: white;
  list-style: none;
}

.side-menu ul li a {
  color: rgb(74, 74, 81);
  font-size: 16px;
  font-weight: 700;
}
.phone-menu-btn:hover .side-menu {
  left: -2%;
}
.phone-menu-btn:hover .side-menu ul {
  display: block;
}

.category-img {
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  max-width: 100%;
  padding: 0%;
}
#search-by-auto {
  width: 95%;
  padding: 1%;
  margin: 0.1% auto;
  border-radius: 6px;
  box-shadow: 0 0 9px rgba(1, 2, 2, 0.16);
  background-color: #eafaff;
}
#search-by-auto div {
  width: 100%;
  margin: auto;
  background-color: white;
  border-radius: 5px;
  color: rgb(0, 64, 255);
  text-align: center;
  display: table;
}
#search-by-auto div select {
  margin: 1.5%;
  color: #505663;
  padding: 1%;
  width: 95%;
  border: 3px solid #e0e7ec;
  border-radius: 5px;
  font-size: 20px;
  background-color: white;
}
.catalog-box {
  width: 100%;
  max-width: 100%;
  padding: 0.5%;
  height: 600px;
  border: 0.5px solid black;
  margin: 2% 2%;
}
.sub-catalog-box-1 {
  display: flex;
  width: 100%;
  height: 388px;
}
.sub-catalog-box-2 {
  display: flex;
  width: 100%;
  height: 200px;
}
.catalog-item {
  border: 0.5px solid grey;
}
.catalog-item:hover {
  box-shadow: 0px 0px 10px blue;
  z-index: 3;
  cursor: pointer;
}
.header {
  width: 100%;
}
.header-mobile {
  min-width: 100%;
  height: 70px;
  display: none;
}
.content {
  width: 80%;
  max-width: 80%;
  margin: auto;
  padding: 0%;
}
.products-container {
  width: 100%;
  margin: auto;
  padding: 0%;
}
.product {
  color: blue;
  width: 17.5%;
  height: 240px;
  float: left;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.653);
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(19, 18, 18, 0.769);
  margin: 1% 1.2%;
}
.product-content {
  min-width: 100%;
  min-height: 100%;
}
.product-content img {
  width: 80%;
  height: 80%;
  border-radius: 10px;
}
.product-content h4:hover {
  color: red;
  cursor: pointer;
}
.search-auto-container {
  min-width: 100%;
  border: 2px solid rgb(92, 125, 245);
  box-shadow: 0px 0px 5px grey;
  border-radius: 15px;
  height: 251px;
  margin: 1% 0%;
  padding: 0.3% 0.3%;
  display: flex;
}
.search-auto {
  min-width: 20%;
  height: 240px;
  text-align: center;
  border: 1px solid rgba(165, 158, 158, 0.694);
  border-radius: 10px;
  background-color: rgba(202, 202, 202, 0.394);
}
.auto-search-input-container {
  width: 100%;
  height: 200px;
  padding: 1%;
}
.auto-search-input {
  max-width: 100%;
  position: relative;
  border: 2px solid rgba(128, 128, 128, 0.687);
  height: 35px;
  border-radius: 10px;
  margin-top: 6%;
  padding-left: 4%;
  background-color: white;
  font-weight: bold;
}
.ad {
  min-width: 79%;
  height: 240px;
  border: 1px solid rgba(165, 158, 158, 0.694);
  border-radius: 10px;
  margin-left: 1%;
  padding: 0%;
  background-color: rgba(202, 202, 202, 0.394);
}
.details-class-conteiner {
  width: 100%;
  min-width: 100%;
  padding: 0%;
  padding-right: 5%;
}
.first-floor {
  width: 80%;
  margin: auto;
  padding: 0%;
  display: flex;
  color: gray;
}

.first-floor div {
  display: flexbox;
  margin: 2% 2% 0% 2%;
  vertical-align: middle;
}
.first-floor div img {
  width: 50%;
  height: 80%;
  margin: 0%;
}
.first-floor div .ico {
  display: none;
}
.second-floor {
  width: 100%;
  height: 70px;
  margin: auto;
  padding: 0%;
  display: flex;
  background-color: darkturquoise;
}
.second-floor div {
  width: 80%;
  display: flex;
  margin: auto;
  vertical-align: middle;
}
.second-floor div div {
  display: flexbox;
  padding: 0% 1%;
}
#shop-bag {
  border-right: solid 2px whitesmoke;
}
a {
  text-decoration: none;
  padding-top: 2%;
}
.dropbtn {
  display: flex;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
}
.sub-dropdown-list {
  display: none;
  position: absolute;
  margin-left: 80%;
  margin-top: -5%;
  min-width: 100%;
  z-index: 1;
}
.super-sub-dropdown-list {
  display: none;
  position: absolute;
  margin-left: 80%;
  margin-top: -5%;
  min-width: 100%;
  z-index: 1;
}

.sub-dropdown-item:hover .super-sub-dropdown-list {
  display: block;
}
.drpdwn-item:hover .sub-dropdown-list {
  display: block;
}

.dropdown-list {
  display: none;
  position: absolute;
  margin-left: -30px;
  min-width: 20%;
  z-index: 1;
}
.dropdown-list li {
  display: flex;
  color: white;
  list-style: none;
  background-color: rgba(0, 206, 209, 0.912);
  padding: 2%;
  font-size: 16px;
  font-weight: 500;
  padding: 6% 3%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
.dropdown-menu:hover .dropdown-list {
  display: block;
}
.drpdwn-item:hover {
  background-color: rgba(108, 199, 201, 0.912);
}
.sub-dropdown-item:hover {
  background-color: rgba(108, 199, 201, 0.912);
}
.super-sub-dropdown-item:hover {
  background-color: rgba(108, 199, 201, 0.912);
}

.toolbar-nav-componenet {
  font-weight: 600;
  color: white;
  text-align: center;
  margin: auto;
  width: 12%;
  font-size: 12px;
}
.toolbar-nav-componenet:hover {
  cursor: pointer;
  color: red;
}
@media (max-width: 1160px) {
  h3 {
    font-size: 2.5vw;
  }
  #b {
    display: none;
  }
  #a {
    display: none;
  }
  .product {
    width: 22.5%;
    height: 240px;
  }
  .first-floor div h3 {
    display: none;
  }
  .dropdown-list {
    min-width: 30%;
  }
  .sub-dropdown-list {
    margin-left: 80%;
  }
  .super-sub-dropdown-list {
    margin-left: 80%;
  }
  .ad {
    min-width: 60%;
  }
}
@media (max-width: 895px) {
  .login-form {
    width: 95%;
  }
  #a {
    display: inline;
  }
  .product {
    width: 30.5%;
    height: 240px;
  }
  h3 {
    font-size: 3vw;
  }
  .dropbtn h4 {
    display: none;
  }
  .dropdown-list {
    min-width: 35%;
  }
  .sub-dropdown-list {
    margin-left: 74%;
  }
  .super-sub-dropdown-list {
    margin-left: 74%;
  }
}
@media (max-width: 600px) {
  .first-floor {
    position: fixed;
    top: 0%;
    left: 0%;
    background-color: white;
    margin-bottom: 1px;
    z-index: 10;
  }
  #search-by-auto {
    height: 98%;
    padding-bottom: 2%;
  }
  body {
    background-color: #dee4e6;
  }
  .first-floor {
    min-width: 100%;
  }
  .first-floor div .ico {
    display: inline;
  }
  .first-floor div a .icon {
    margin-left: 15% !important;
  }
  h3 {
    font-size: 6vw;
  }
  h2 {
    font-size: 6vw;
  }
  .dropdown-list {
    margin-left: -40px;
    min-width: 35%;
  }
  .product {
    width: 97%;
    height: 230px;
    background-color: white;
  }
  .product img {
    width: 45%;
  }
  .ad {
    display: none;
  }
  .second-floor {
    display: none;
  }
  .sub-catalog-box-2 {
    margin-top: 328.5%;
    margin-bottom: 2%;
    display: block;
  }
  .sub-catalog-box-2 div {
    width: 100% !important;
  }
  .sub-catalog-box-1 {
    display: block;
  }
  .sub-catalog-box-1 div {
    width: 100% !important;
  }
  .sub-catalog-box-1 div div {
    position: unset;
  }
  .details-class-conteiner {
    height: 2780px !important;
  }
  .catalog-box {
    height: 2170px !important;
  }
  .mobile {
    height: 1000px !important;
  }
  .mobile2 {
    margin-top: -4%;
    display: block !important;
    height: 600px !important;
  }
  .mobile3 {
    display: block !important;
    height: 400px !important;
  }
  .content {
    margin-top: 100px;
  }
}
</style>
