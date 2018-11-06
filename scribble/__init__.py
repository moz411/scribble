from ._version import version_info, __version__

from .scribble import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'scribble',
        'require': 'scribble/extension'
    }]
