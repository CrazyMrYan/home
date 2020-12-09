const filesMD = require.context('../../../doc', true, /\.md$/);
const filesMDNames = filesMD.keys();
const tmepListDatas = [];
filesMDNames.map((item) => {
    const listObj = {};
    const listItemS = item.split('/');
    if (listItemS.length > 0) {
        listObj.name = listItemS[1].replace('.md', '');
        listObj.path = item;
        listObj.children = [];
        listObj.showChild = false;
    }
　　return tmepListDatas.push(listObj);
});    

const resultComps = {}
let requireComponent = require.context(
    '../../../doc', // 在当前目录下查找
    false, // 不遍历子文件夹
    /\.md$/ // 正则匹配 以 .vue结尾的文件
)
requireComponent.keys().forEach(fileName => {
    let comp = requireComponent(fileName)
    resultComps[fileName.replace(/^\.\/(.*)\.\w+$/, '$1')] = comp.default
})
let mdListData = {
    resultComps,
    tmepListDatas
}
export default mdListData
