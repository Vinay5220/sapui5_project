sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("tile1.controller.Tile", {
        onInit: function () {

        },
        moveTosales(event){
            this.getOwnerComponent().getRouter().navTo('sales');
        },
        moveTopurchase(event){
            this.getOwnerComponent().getRouter().navTo('purchase');
        },
        moveToorder(event){
            this.getOwnerComponent().getRouter().navTo('order');
        }
    });
});
