import { IPoint, Point } from './point';
import * as $ from 'jquery';

let point: IPoint = new Point(2, 3);
console.log(point.getDistance());

var elem = document.querySelector("#jsResult");

if (elem)
    elem.innerHTML = point.getDistance().toString();

$(function () {
    $("#jqResult").html(point.getDistance().toString());
});