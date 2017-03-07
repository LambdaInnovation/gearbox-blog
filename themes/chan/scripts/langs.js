

function change_path_lang(path, new_lang) {
    var idx = path.indexOf('/');
    if (idx == 0) {
        idx = path.substring(1).indexOf('/') + 1;
    }

    if (idx == -1) {
        return '/' + new_lang + '/';
    }
    return '/' + new_lang + '/' + path.substring(idx+1);
}

hexo.extend.helper.register('change_path_lang', change_path_lang);