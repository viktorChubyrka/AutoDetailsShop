<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="first-floor">
          <img
            id="logo"
            src="data:image/png;base64,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"
            alt
          />

          <div style="display:flex">
            <a href>
              <v-icon x-large>phone</v-icon>
            </a>

            <h3>
              Помочь с подбором?
              <br />Проконсультировать? <br />
              <a href="">Мы вам перезвоним!</a>
            </h3>
          </div>
          <div id="search-container">
            <input id="search" type="search" />
          </div>
          <div class="numbers">
            <h3>
              (044) 389-444-0
              <br />(067) 443-12-03 <br />(050) 33-55-000
            </h3>
          </div>
          <div id="login-shopbag-container">
            <div id="shop-bag">
              <a href=""
                ><v-icon style="margin-left:30%" large>shopify</v-icon>
                <h4>Корзина</h4></a
              >
            </div>
            <div>
              <a href=""
                ><v-icon large>account_box</v-icon>
                <h4>Войти</h4></a
              >
            </div>
          </div>
        </div>
        <div class="second-floor">
          <div style="display:flex;width:80%;margin:auto">
            <div class="dropdown-menu">
              <button class="dropbtn">
                АССОРТИМЕНТ
                <v-icon style="color:white;">menu</v-icon>
              </button>
              <ul class="dropdown-list">
                <li class="drpdwn-item">
                  <h4>Item 1</h4>
                  <v-spacer /> >
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
                  <v-spacer /> >
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
                  <v-spacer /> >
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
                  <v-spacer /> >
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

            <div class="toolbar-nav-componenet"><h4>АККУМУЛЯТОРЫ</h4></div>
            <div class="toolbar-nav-componenet">
              <h4>МАСЛА, ЖИДКОСТИ И АВТОХИМИЯ</h4>
            </div>
            <div class="toolbar-nav-componenet"><h4>АКСЕССУАРЫ</h4></div>
            <div class="toolbar-nav-componenet"><h4>МОТО</h4></div>
            <div class="toolbar-nav-componenet"><h4>ШИНЫ NOKIAN</h4></div>
            <div class="toolbar-nav-componenet"><h4>АКЦИИ И НОВОСТИ</h4></div>
            <div class="toolbar-nav-componenet"><h4>ПОМОЩЬ</h4></div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="search-auto-container">
          <div class="search-auto">
            <h2>Виберіть авто</h2>
            <div class="auto-search-input-container"><input class="auto-search-input" type="text">
            <input class="auto-search-input" type="text">
            <input class="auto-search-input" type="text">
            <input class="auto-search-input" type="text"></div>
          </div>
          <div class="ad">
              <img style="width:100%;height:100%;border-radius:10px" src="data:image/jpeg;base64,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" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.container {
  width: 100%;
  max-width: 100%;
  padding: 0%;
}
.header {
  width: 100%;
}
.content {
  width: 80%;
  max-width: 80%;
  margin: auto;
  padding: 0%;
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
.search-auto{
  min-width: 20%;
  height: 240px;
  text-align: center;
  border:1px solid rgba(165, 158, 158, 0.694);
  border-radius: 10px;
  background-color: rgba(202, 202, 202, 0.394);
}
.auto-search-input-container{
  width: 100%;
  height:200px;
  padding:1%;
}
.auto-search-input{
  max-width: 100%;
  position: relative;
  border: 2px solid rgba(128, 128, 128, 0.687);
  height: 35px;
  border-radius: 10px;
  margin-top:6%;
  padding-left: 4%;
  background-color: white;
  font-weight: bold;
}
.ad{
  min-width: 79%;
  height:240px;
  border:1px solid rgba(165, 158, 158, 0.694);
  border-radius: 10px;
  margin-left:1%;
  padding: 0%;
  background-color: rgba(202, 202, 202, 0.394);
}

.first-floor {
  width: 80%;
  margin: auto;
  padding: 0%;
  display: flex;
  color: gray;
}

.first-floor div {
  margin: 1% 1% 0% 1%;
}
.second-floor {
  width: 100%;
  height: 70px;
  margin: auto;
  padding: 0%;
  display: flex;
  background-color: darkturquoise;
}
#logo {
  width: 10%;
  height: 5%;
  margin-top: 1%;
}
#search-container {
  width: 30%;
  margin-top: 2%;
}
#search {
  width: 100%;
  height: 30px;
  padding: 1%;
  background-color: antiquewhite;
  border: solid 2px gray;
  border-radius: 5px;
  box-shadow: 1px 1px 3 px 1px;
  font-size: 20px;
}
#login-shopbag-container {
  margin: 0.5% 0%;
  display: flex;
  width: 20%;
  border-left: solid 2px whitesmoke;
  border-right: solid 2px whitesmoke;
}
#login-shopbag-container div {
  text-align: center;
  width: 50%;
}
#shop-bag {
  border-right: solid 2px whitesmoke;
}
a {
  text-decoration: none;
  padding-top: 2%;
}
.numbers {
  padding-bottom: 1%;
}

.dropbtn {
  padding-top: 5%;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
}
.sub-dropdown-list {
  display: none;
  position: absolute;
  margin-left: 78%;
  margin-top: -5%;
  min-width: 100%;
  z-index: 1;
}
.super-sub-dropdown-list{
  display: none;
  position: absolute;
  margin-left: 78%;
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
  margin-left: -28px;
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
.sub-dropdown-item:hover{
   background-color: rgba(108, 199, 201, 0.912);
}
.super-sub-dropdown-item:hover{
  background-color: rgba(108, 199, 201, 0.912);
}

.toolbar-nav-componenet {
  font-weight: 600;
  color: white;
  text-align: center;
  margin: auto;
  width: 10%;
  font-size: 12px;
}
.toolbar-nav-componenet:hover {
  cursor: default;
  color: red;
}
</style>
