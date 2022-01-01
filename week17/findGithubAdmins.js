function findAdmin(list, lang) {

    return list.filter(e => e.language ===lang && e.githubAdmin === 'yes')
}