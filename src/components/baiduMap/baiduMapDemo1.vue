<template>
  <div class="mapbox">
    <baidu-map :center="center" :zoom="zoom" :scroll-wheel-zoom="true" style="height:100vh" @ready="handler" @click="getClickInfo" >
      <!-- 必须给容器指高度，不然地图将显示在一个高度为0的容器中，看不到 -->
      <!--全景-->
      <bm-panorama></bm-panorama>
      <!--地图类型-->
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-map-type>
      <!-- <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation> -->
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
    </baidu-map>
    <!-- 因为我采用的是全局注册，所以不用再在该页面上注册components -->
  </div>
</template>
<script>
export default {
  name: "mapbox",
  data() {
    return {
      center: { lng: 0, lat: 0 }, //经纬度
      zoom: 13 //地图展示级别
    };
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = this.zoom;
    },
    getClickInfo(e) {
      console.log(e.point.lng);
      console.log(e.point.lat);
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    }
  }
};
</script>