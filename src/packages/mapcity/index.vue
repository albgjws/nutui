<template>
  <div>
    
    <div id="map" ref="map" :style="mapStyle"></div>

  </div>
</template>

<script>

export default {
  name:"nut-map-city",
  data: function() {
    return {
      longitude: "", //经度
      latitude: "", //纬度
      mapStyle: {
        width: "100%",
        height: this.mapHeight + "px"
      },
      result: "",
    };
  },
  props: {
    // 地图在该视图上的高度
    mapHeight: {
      type: Number,
      default: 250
    },
    description: {
      type: String,
      default: "杭州"
    },
    searchRadius: {
      type: Number,
      default: 1000
    },
    intervalTime: {
      type: Number,
      default: 30000
    },
  },
  methods: {
    // 定位
    relocate() {
        var that = this;
        var map = new BMap.Map("map");

        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(
          function(r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
              that.$emit('locatedStatus',"success")
              var mk = new BMap.Marker(r.point);
              var point = new BMap.Point(r.longitude, r.latitude);
              map.centerAndZoom(point, 13);
              map.addOverlay(mk);
              map.panTo(r.point);
              that.longitude = r.longitude;
              that.latitude = r.latitude;
            } else {
              this.$emit('locatedStatus',"failed")
            }
          },
          { enableHighAccuracy: true }
        );
    },

    // 自动定位
    autoRelocate() {
        var that = this;
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(
          function(r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
              that.$emit('locatedStatus',"success")
              that.longitude = r.longitude;
              that.latitude = r.latitude;
            } else {
              this.$emit('locatedStatus',"failed")
            }
          },
          { enableHighAccuracy: true }
        );
    },

    //逆地址批量查询
    getLocation() {
        var that = this;
        var map = new BMap.Map("map");
        var point = new BMap.Point(this.longitude, this.latitude);

        map.centerAndZoom(point, 13);
        map.enableScrollWheelZoom(true);
        var myGeo = new BMap.Geocoder();
        this.result = "";
        myGeo.getLocation(
          point,
          function(rs) {
            map.addOverlay(
              new BMap.Marker(new BMap.Point(that.longitude, that.latitude))
            );
            var sur = rs.surroundingPois;
            var suround = [];
            for (var i = 0; i < sur.length; i++) {
              suround.push(sur[i].address + sur[i].title);
            }
            that.$emit("getAddInfo", suround);
          },
          { poiRadius: 500, numPois: 10 }
        );
    },

    searchLocation(val) {
      if (true) {
        var that = this;
        var map = new BMap.Map("map"); // 创建Map实例
        var mPoint = new BMap.Point(this.longitude, this.latitude);

        map.enableScrollWheelZoom();
        map.centerAndZoom(mPoint, 15);

        if(this.searchRadius==0){
          var circle = new BMap.Circle(mPoint, 1000, {
            fillColor: "blue",
            strokeWeight: 1,
            fillOpacity: 0.3,
            strokeOpacity: 0.3
          });
        }else{
          var circle = new BMap.Circle(mPoint, this.searchRadius, {
            fillColor: "blue",
            strokeWeight: 1,
            fillOpacity: 0.3,
            strokeOpacity: 0.3
          });
        }
        
        map.addOverlay(circle); //添加圆形区域
        var local = new BMap.LocalSearch(map, {
          renderOptions: { map: map, autoViewport: false }
        });
        if (val == "") return;

        //93005 需求98329：【TS:201809180356-财富业委会-冯洋洋-【需求描述】 需求内容：地图定位添加搜索功能，希】-提供传入搜索范围大小的参数接口
        if(this.searchRadius==0){
          local.searchNearby(val, mPoint, 1000);
        }else{
          local.searchNearby(val, mPoint, this.searchRadius);
        }
        local.setSearchCompleteCallback(function() {
          // 115557 lc-map组件，搜索功能报错，请排查原因，配置包见附件
          // var neb = local.getResults().Br;
          var neb = local.vf;
          var nearby = [];
          console.log(nearby)
          for (var i = 0; i < neb.length; i++) {
            nearby.push(neb[i].title + neb[i].address);
          }
          if(nearby==''){
            // modal.toast({
            //   message: "暂无搜索结果",
            //   duration: 1
            // })
          }
          that.$emit("getNearby", nearby);
        });
      } 
    },

  },
  mounted() {
      var that = this;
      this.$nextTick(function() {
        that.relocate();
        setInterval(that.autoRelocate,that.intervalTime)
      });
  }
}
</script>
 
<style scoped>
.anchorBL {
  display: none;
}
</style>
