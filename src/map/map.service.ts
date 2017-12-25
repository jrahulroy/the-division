import {Injectable} from "@angular/core";
import * as d3 from "d3";
import d3Tip from "d3-tip";
import {pier93} from "./json/pier-93";
import {carrier} from "./json/carrier";
import {powerhouse} from "./json/powerhouse";

@Injectable()
export class MapService {
  drawMap(mapName: string) {
    //clear map

    var width = 10000,
      height = 10000;

    var svg = d3.select("svg")
      .attr("width", width)
      .attr("height", height);

    svg.selectAll("*").remove();

    var tip = d3Tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function (d) {
        return "<strong>Cost:</strong> <span style='color:yellow'>" + d.cost + "</span>";
      });

    svg.call(tip);

    let data: any = [];
    if (mapName === 'pier-93') {
      data = pier93;
    } else if(mapName === 'carrier') {
      data = carrier;
    } else if(mapName === 'powerhouse') {
      data = powerhouse;
    }

    //pre-process the json
    data.zones.forEach(function (zone) {
      var maxBoundX = 0, maxBoundY = 0;

      zone.bounds.forEach(function (bound) {
        if (bound.x > maxBoundX) {
          maxBoundX = bound.x;
        }
        if (bound.y > maxBoundY) {
          maxBoundY = bound.y;
        }
      });

      zone.maxBoundX = maxBoundX;
      zone.maxBoundY = maxBoundY;

    });

    //add zone
    let zones = svg.selectAll("polygon")
      .data(data.zones)
      .enter().append("polygon")
      .attr("points", function (zone) {
        return zone.bounds.map(function (d) {
          return [zone.x + d.x, zone.y + d.y].join(",");
        }).join(" ");
      })
      .attr("stroke", "black")
      .attr("fill", "lime")
      .attr("stroke-width", 2);

    //add zone title
    console.log(zones);

    svg.selectAll("text").data(data.zones)
      .enter().append("text").attr("x", function (zone) {
      return zone.x + (zone.maxBoundX / 2);
    }).attr("y", function (zone) {
      return zone.y + (zone.maxBoundY / 2);
    }).text(function (zone) {
      return zone.name;
    });

//        var pointsOfInterests = [];
//        data.zones.forEach(function(zone){
//            zone.pointsOfInterests.forEach(function(poi) {
//                var newPoi = JSON.parse(JSON.stringify(poi));
//                newPoi.zone = zone;
//                pointsOfInterests.push(newPoi);
//            })
//        });
    //add zone point of interests
    data.zones.forEach(function (zone) {
      svg.selectAll().data(zone.pointsOfInterests)
        .enter().append("image").attr("x", function (poi) {
        return zone.x + poi.x;
      }).attr("y", function (poi) {
        return zone.y + poi.y;
      }).attr("width", function (poi) {
        return 30;
      }).attr("height", function (poi) {
        return 30;
      }).attr("href", function (poi) {
        if (poi.type === 'door') {
          return "assets/images/door.png";
        } else if (poi.type === 'support') {
          return "assets/images/support.png";
        } else if (poi.type === 'turret') {
          return "assets/images/turret.png";
        } else if (poi.type === 'pulse') {
          return "assets/images/pulse.svg";
        } else if (poi.type === 'reward') {
          return "assets/images/reward.png";
        } else if (poi.type === 'ammo') {
          return "assets/images/ammo.svg";
        } else if (poi.type === 'medkit') {
          return "assets/images/medkit.png";
        }
      })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);
    });

  }
}
