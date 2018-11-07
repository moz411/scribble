import ipywidgets as widgets
from traitlets import Unicode, List, Tuple, default

module_name = 'scribble'
module_version = '0.1.0'

@widgets.register
class Bar(widgets.DOMWidget):
    _model_name = Unicode('BarChartModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('P5View').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)
    values = List([]).tag(sync=True)
    size = Tuple().tag(sync=True)

@widgets.register
class Point(widgets.DOMWidget):
    _model_name = Unicode('BarChartModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('P5View').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)
    values = List([]).tag(sync=True)
    size = Tuple().tag(sync=True)
