async function apiCall(url) {

try{
    let res= await fetch(url)
    let data =await res.json();
    return data;
} catch (err){
    console.log("error")
}
    //add api call logic her

}


 function appendArticles(articles, main) {

    articles.forEach((element) => {
        let div=document.createElement("div")

        let image=document.createElement("img")
        image.src=element.urlToImage;

        let p=document.createElement("p")
        p.innerText=element.source.name;
        
        div.append(image,p)
        main.append(div)
    });
    //add append logic here

}


export { apiCall, appendArticles }