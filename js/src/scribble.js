var widgets = require('@jupyter-widgets/base');

var p5 = require('p5');
window.p5 = p5;
require('./p5.dom');
var sketch = require('./sketch');

var BarChartModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'BarChartModel',
        _view_name : 'P5View',
        _model_module : 'scribble',
        _view_module : 'scribble',
        _model_module_version: "0.1.0",
        _view_module_version: "0.1.0",
        values : []
    })
});

var P5View = widgets.DOMWidgetView.extend({
	initialize : function() {
		console.log("scribble start initialize");
		// build P5 window
		this.p5 = new p5(sketch);
        // append elmt to dom
        this.el.appendChild(this.p5.canvas);
		console.log("scribble end initialize");
	},
	
    render: function() {
        console.log("scribble start render");
        this.p5.values = this.model.get('values');
        this.p5.draw();
    	// event listener
    	this.model.on("change", this.value_changed, this);
        console.log("scribble end render");
	},
	
	value_changed: function() {
    	console.log("scribble value_changed");
    	this.p5.values = this.model.get('values');
        this.p5.draw();
    },
    
	remove: function() {
    	console.log("scribble remove");
        P5View.__super__.remove.apply(this, arguments);
    }
});

module.exports = {
    BarChartModel:BarChartModel,
    P5View:P5View
}