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
              <div class="dropdown-content">
                <a class="dropdown-item" v-for="i in 10" :key="i" href="#"
                  >Link {{ i }} <v-spacer />
                  <v-icon style="color: rgb(62, 60, 60);"
                    >keyboard_arrow_right</v-icon
                  >
                </a>
                <div class="second-dropdown">sadasdsadsa</div>
              </div>
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
.dropdown-menu {
  margin-right: 1%;
  display: ;
}
.dropbtn {
  padding-top: 5%;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 15%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-menu:hover .dropdown-content {
  display: block;
}
.dropdown-content a {
  color: rgb(62, 60, 60);
  padding: 12px 16px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  display: flex;
}
.dropdown-content a {
  color: rgb(62, 60, 60);
  padding: 12px 16px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  display: flex;
}

.dropdown-item:hover {
  background-color: gainsboro;
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
  color: red;
}
</style>
