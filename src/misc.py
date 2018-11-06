import os


def list_dir(path):
    return sorted([name for name in os.listdir(path)
                   if os.path.isdir(os.path.join(path, name))])


def list_file(path):
    return sorted([name for name in os.listdir(path)])

