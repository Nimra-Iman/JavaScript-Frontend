//      such questions are asked in interview

// DOM ko ek tree representation s dikhaya ja skta h 
// dom tree contains html page where all nodes are objects
// there are 3 nodes jo har html page pr ho gy
// 1- text node
// 2- element node
// 3- comment node
// text node is always a leaf of tree(yani text k ander mazeed kuch nhi a skta, jesy
// html k ander header, body etc tha, header k ander title etc tha, title k ander
// text tha, or text node is leaf of html tree yani ab text k ander kuch nhi a skta)


// html allows auto-correction yani agar ap n <span> tag lgaya or us k ander kuch likha
// lekin ghalti s span ka closing tag lgany ki bijay ap n </div> ka closing tag lga dia 
// to execute krty huy koi error nhi ay ga or jab ap page k inspect m ja kr element m
// jao gy or dekho gy to HTML n automatically vha </div> ki jga </span> kia ho ga
// similaaly if you made table without <tbody> to jab inspect m ja kr dekho gy to <tbody>
// aya hua ho ga, lekin y baat dhiaan rhy k auto-correction sirf inspect m ja kr skti h
// ********************  view page source  m nhi hoti  ************************



document.documentElement //likhny s poori HTML a jay gi and ek object return kry ga 
document.body // likhny s html ki poori body a jay gi, it can sometimes be null if
// <script> console.log(document.body) </script>  is written before body, because here executer didn't  
// know where the body actually is  
document.title //to show title or y tag actual m "string" return kry ga


