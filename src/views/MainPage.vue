<template>
  <div>
    <div>
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
            <button
              style="margin:2%;padding:2% 10%;background-color:aquamarine;color:blue;font-weight:600"
              type="submit"
            >Поиск</button>
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
        <router-link to="/ItemDetails">
          <div v-for="i in els" :key="i" :id="i" class="product">
            <div class="product-content">
              <img src="https://i2.rozetka.ua/goods/12903158/103112064_images_12903158574.png" />
              <h3 style="font-size:20px">233$</h3>
              <h4>Свеча зажигания и тд и тп</h4>
            </div>
          </div>
        </router-link>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      els: ["a", "b", "c", "d", "e", "t", "y", "u", "y", "t"]
    };
  }
};
</script>