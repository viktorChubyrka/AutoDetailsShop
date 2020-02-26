<template>
  <div>
    <div id="item">
      <h1>The name of the product</h1>
      <div style="display:flex;margin:2% 0%;">
        <div style="width:40%">
          <div class="image"></div>
          <div class="sub-images">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div style="width:60%">
          <div class="cost-and-purchapse-container">
            <div class="cost" style="width:35%">
              <h1 class="first-coast">260 грн</h1>
              <h1 class="second-coast">10 usd</h1>
            </div>
            <div style="width:40%"></div>
            <div style="width:25%">
              <button id="first-btn">В корзину</button>
              <button id="second-btn">Купить в 1 клик</button>
            </div>
          </div>
          <div class="description">
            <h4>
              There is some long giscription
              There is some long giscription There is some long giscription There is some long giscription There is some long giscription There is some long giscription There is some long giscription There is some long giscription There is some long giscription There is some long giscription There is some long giscription There is some long giscription
            </h4>
          </div>
        </div>
      </div>
    </div>
    <!-- <div>
      <router-link to="/ItemDetails">
        <div style="width:18%;margin:1%;" v-for="i in 5" :key="i" :id="i">
          <div>
            <img src="https://i2.rozetka.ua/goods/12903158/103112064_images_12903158574.png" />
            <h3 style="font-size:20px">233$</h3>
            <h4>Свеча зажигания и тд и тп</h4>
          </div>
        </div>
      </router-link>
    </div>-->
  </div>
</template>

<style >
#item {
  width: 100%;
  margin: auto;
  text-align: left;
}
#item h1 {
  font-variant-caps: all-petite-caps;
  font-size: 38px;
  color: rgb(79, 77, 77);
  width: 100%;
}
.sub-images {
  width: 94%;
  margin: auto;
}
.sub-images div {
  float: left;
  background-color: black;
  width: 27%;
  height: 80px;
  margin: 3.1%;
}
.image {
  width: 90%;
  margin: 2% auto;
  height: 250px;
  background-color: black;
}
.cost-and-purchapse-container {
  width: 90%;
  height: 180px;
  margin: auto;
  border-radius: 20px;
  background-color: aliceblue;
  display: table;
}
.cost-and-purchapse-container div {
  display: table-cell;
}
.cost-and-purchapse-container div #first-btn {
  width: 90%;
  height: 40px;
  margin: 20% auto 10% auto;
  background-color: rgb(8, 61, 167);
  color: white;
  border-radius: 10px;
  font-size: 20px;
  font-variant-caps: all-petite-caps;
}
.cost-and-purchapse-container div #second-btn {
  width: 90%;
  height: 40px;
  margin: 10% auto;
  color: rgb(105, 100, 100);
  border: 1px solid blue;
  border-radius: 10px;
  font-size: 18px;
}
.cost {
  padding: 0% auto;
  text-align: center;
}
.cost .first-coast {
  color: green !important;
  margin: 10% 0%;
}
.cost .second-coast {
  color: rgb(235, 49, 49) !important;
}
.description {
  width: 90%;
  margin: 4.8% auto;
  height: 250px;
}
.description h4 {
  font-weight: 500;
  color: rgb(73, 70, 70);
  font-size: 16px;
}
</style>