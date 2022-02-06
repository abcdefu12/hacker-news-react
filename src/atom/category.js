// const categoryList = [
//     {category: "top", path: "top"},

// ]
const categoryList = [ "top", "new", "ask", "show", "job", ];

const colorList = { "top":"#FD6106", "new":"", "ask":"", "show":"", "job":"" };
const colorListKey = Object.keys(colorList);

export { categoryList, colorList, colorListKey };

 // fetch할때 array로 불러와서 파일양 줄일 예정
    
// import { Group_obj, Group_key_arr } from "./atom";

    // const Group_obj = {"Top":"top", "New": "new", "Ask":"ask", "Show":"show", "job":"job"};
    // const Group_key_arr = Object.keys(Group_obj);
    // <div>
    // { Group_key_arr.map((key)=>{
    //     return(
    //         <div key={key}>
    //             <Link to={`/page/${Group_obj[key]}`}></Link>
    //         </div>
    //     )
    // })}
    // </div>

// 이런 식으로 loading을 가져오기 error
//import { atom } from "recoil";
// const listPageReLoading = atom ({ 
//     key: 'listPageReLoading',
//     default: false,
// });
// const focusNav = atom ({
//     key: 'focusNav',
//     default: "",
// })
// export {listPageReLoading, focusNav};
