

function change_path_lang(path, new_lang) {
    var idx = path.indexOf('/');
    if (idx == -1) {
        return '/' + path;
    }
    return '/' + new_lang + '/' + path.substring(idx+1);
}

hexo.extend.helper.register('change_path_lang', change_path_lang);