let tasklist=document.querySelector(".tasklist");
let form = document.querySelector(".myform");
let input=document.querySelector("#taskitem");

form.addEventListener("submit",(ev)=>{
    ev.preventDefault();
    let taskitem=input.value;
    axios.post("/addtodo", {
        taskitem: taskitem
    })
    .then((response) => {
        console.log(response.data);
        input.value = "";
        let div =document.createElement("li");
        div.innerText=`${taskitem}`;
        div.style.background="linear-gradient(-45deg,#571845,#25040d)"
        div.style.color="azure";
        div.style.fontSize="2rem";
        div.style.paddingLeft="1rem";
        div.style.paddingTop="0.5rem";
        div.style.paddingBottom="0.5rem";
        div.style.marginRight="1.8rem";
        div.style.borderRadius="1rem";
        div.style.display="flex";
        div.style.flexDirection="row";
        const li1=document.createElement("span");
        li1.className="li";
        li1.style.position="absolute";
        li1.style.marginRight="1rem";
        li1.style.marginLeft="26rem"; 
        li1.style.marginTop="-0.05rem";  
        li1.style.clipPath="circle()";
        const li2=document.createElement("span");
        li2.className="li";
        li2.style.marginLeft="29rem";   
        li2.style.marginTop="-0.05rem";  
        li2.style.position="absolute";
        li2.style.clipPath="circle()";
        const btn1=document.createElement("button");
        const btn2=document.createElement("button");
        const img1=document.createElement("img");
        const img2=document.createElement("img");
        img1.src="data:image/png;base64,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";
        img2.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAYFBMVEX///8AAAD5+fkuLi40NDTq6uqXl5ednZ2jo6Otra3v7+/R0dGysrK4uLgVFRX09PRycnJjY2M7Ozvi4uLKysqIiIgODg5dXV16enpoaGhPT09CQkIiIiIbGxuCgoLc3Nx27RwAAAACqUlEQVR4nO2baWODIAyGC1717Lxn7bb//y+3bitGYeVquivvR5DwFCVVkux2JNIfUFTEWhURLkPMjBRjMtRmDIzVeAylKQNjJRrEbA4xo0GYMzBGEATxXyGGVKnhrhAVV/Xz6r4QB1X/gSBQICKlMgDRqi5oAUSmtmGMUI5NqBTYgY4XNKPh3+vDdsvfVg8mDI+4DIw96hkyvRVfZVqIFB8i1UIk+BDJ71iJH/FM7J6xGZ71DD/DT7x5zDlA02z+QcLRZIxAIqnVlknZfrOx/v0tqb8NQ3+2VVkbm+xcy3Vd3N9kN6wQDu4Gpx2lo7HlXOjoD3EUxqxOkbJGjAu8nRwPhLHG4A9UKApxIEKbw0WCIAhLCJ7v97nUrm7FgsjfN3CTm7RiQeSXrg62dpdWiQIDggtHNoMuLo6cG2kAAoRYiNVSdEvrdikwIPbLdHtd6z0gwEdlQhAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEcdYSo2OFrhUNIhJdFQi3gmSz7UQoB+z9patXtkrZ6zihhvGjp1718M9w7ihdjhR0KevTSU6iK8fTqVaEX9HCTwd1KqSy9S/HwAjin0Mon3gbHRwhsqWc5Mk7r6Z9EsZmm9QFPopx6+ini0CgcLS6t9My0Du3p19s2SXVwFIrzyeTA1N2pVm580hJ8PfIgfRrgvh+T0UHLVkuKsxPrTwoOpBZb5aTCgTvBxu2b2zGKgdox+5u7LaFZ7XTYnTrMj77ArXVUpw1xeoSm68UT1sL1guBkNNvkMMvKQv1dm0U2rhsoZfbQry4MFhVZurlnM1Y6G2bynmTb9ydj7ycbnTUT6DX0bOymaeBfpLrClL/vPUsHvQTfa0hdtqasrre0Wc0vfd7GRCP8iLRl7VDJUUeUf0A6TfrFcaeNNY4GA4UAAAAAElFTkSuQmCC';
        btn1.appendChild(img1);
        btn2.appendChild(img2);
        li1.appendChild(btn1);
        li2.appendChild(btn2);
        div.appendChild(li1);
        div.appendChild(li2);
        tasklist.append(div); 
        btn1.addEventListener("click", (event) => {
          if (event.target.tagName === "IMG" && event.target.parentNode.tagName === "BUTTON") {
            const listItem = event.target.closest("li");
            const index = Array.from(listItem.parentNode.children).indexOf(listItem);
    
            const newValue = prompt("Enter the new value:");
    
            if (newValue !== null) {
              axios.put("/edittodo", { index, newValue })
                .then((response) => {
                  console.log(response.data);
                  
                  listItem.innerText = `${newValue}`;
                  listItem.appendChild(li1);
                  listItem.appendChild(li2);
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
            }
          }
        }); 
        btn2.addEventListener("click", (event) => {
          if (event.target.tagName === "IMG" && event.target.parentNode.tagName === "BUTTON") {
            
            const listItem = event.target.closest("li");
            const index = Array.from(listItem.parentNode.children).indexOf(listItem);
        
            
            axios.post("/deletetodo", { index })
              .then((response) => {
                console.log(response.data);
                listItem.remove();
              })
              .catch((error) => {
                console.error('Error:', error);
              });
          }
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
})

function showData(data){
    console.log(data);
    console.log(tasklist);
    data.forEach(task => {
        console.log(task);
        let div =document.createElement("li");
        div.innerText=`${task}`;
        div.style.background="linear-gradient(-45deg,#571845,#25040d)"
        div.style.color="azure";
        div.style.fontSize="2rem";
        div.style.paddingLeft="1rem";
        div.style.paddingTop="0.5rem";
        div.style.paddingBottom="0.5rem";
        div.style.marginRight="1.8rem";
        div.style.borderRadius="1rem";
        div.style.display="flex";
        div.style.flexDirection="row";
        const li1=document.createElement("li");
        li1.className="li";
        li1.style.position="absolute";
        li1.style.marginRight="1rem";
        li1.style.marginLeft="26rem"; 
        li1.style.marginTop="-0.05rem";  
        li1.style.clipPath="circle()";
        const li2=document.createElement("li");
        li2.className="li";
        li2.style.marginLeft="29rem";   
        li2.style.marginTop="-0.05rem";  
        li2.style.position="absolute";
        li2.style.clipPath="circle()";
        const btn1=document.createElement("button");
        const btn2=document.createElement("button");
        const img1=document.createElement("img");
        const img2=document.createElement("img");
        img1.src="data:image/png;base64,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";
        img2.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAYFBMVEX///8AAAD5+fkuLi40NDTq6uqXl5ednZ2jo6Otra3v7+/R0dGysrK4uLgVFRX09PRycnJjY2M7Ozvi4uLKysqIiIgODg5dXV16enpoaGhPT09CQkIiIiIbGxuCgoLc3Nx27RwAAAACqUlEQVR4nO2baWODIAyGC1717Lxn7bb//y+3bitGYeVquivvR5DwFCVVkux2JNIfUFTEWhURLkPMjBRjMtRmDIzVeAylKQNjJRrEbA4xo0GYMzBGEATxXyGGVKnhrhAVV/Xz6r4QB1X/gSBQICKlMgDRqi5oAUSmtmGMUI5NqBTYgY4XNKPh3+vDdsvfVg8mDI+4DIw96hkyvRVfZVqIFB8i1UIk+BDJ71iJH/FM7J6xGZ71DD/DT7x5zDlA02z+QcLRZIxAIqnVlknZfrOx/v0tqb8NQ3+2VVkbm+xcy3Vd3N9kN6wQDu4Gpx2lo7HlXOjoD3EUxqxOkbJGjAu8nRwPhLHG4A9UKApxIEKbw0WCIAhLCJ7v97nUrm7FgsjfN3CTm7RiQeSXrg62dpdWiQIDggtHNoMuLo6cG2kAAoRYiNVSdEvrdikwIPbLdHtd6z0gwEdlQhAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEcdYSo2OFrhUNIhJdFQi3gmSz7UQoB+z9patXtkrZ6zihhvGjp1718M9w7ihdjhR0KevTSU6iK8fTqVaEX9HCTwd1KqSy9S/HwAjin0Mon3gbHRwhsqWc5Mk7r6Z9EsZmm9QFPopx6+ini0CgcLS6t9My0Du3p19s2SXVwFIrzyeTA1N2pVm580hJ8PfIgfRrgvh+T0UHLVkuKsxPrTwoOpBZb5aTCgTvBxu2b2zGKgdox+5u7LaFZ7XTYnTrMj77ArXVUpw1xeoSm68UT1sL1guBkNNvkMMvKQv1dm0U2rhsoZfbQry4MFhVZurlnM1Y6G2bynmTb9ydj7ycbnTUT6DX0bOymaeBfpLrClL/vPUsHvQTfa0hdtqasrre0Wc0vfd7GRCP8iLRl7VDJUUeUf0A6TfrFcaeNNY4GA4UAAAAAElFTkSuQmCC';
        btn1.appendChild(img1);
        btn2.appendChild(img2); 
        li1.appendChild(btn1);
        li2.appendChild(btn2);
        div.appendChild(li1);
        div.appendChild(li2);
        tasklist.append(div); 
        
    });
  }
  
async function getdata(Api){
    let data = await fetch(Api);
   let responsedata=await data.json()
   console.log(responsedata);
   showData(responsedata);
}


getdata("/gettodo");
