jupyter nbextension uninstall --py --sys-prefix scribble
pip install -e .
jupyter nbextension install --py --symlink --sys-prefix scribble
jupyter nbextension enable --py --sys-prefix scribble
